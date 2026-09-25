<script setup>
  import { ref, computed } from 'vue'
  import { supabase } from '@/lib/supabase'

  const SERVICES = [
    { id: 'beard', name: 'Beard trim', minutes: 15 },
    { id: 'hair', name: 'Haircut', minutes: 30 },
    { id: 'both', name: 'Beard & hair cut', minutes: 45 },
  ]

  const selectedService = ref(null)
  const selectedDate = ref('')
  const slots = ref([])
  const selectedSlot = ref(null)
  const loadingSlots = ref(false)

  const customerName = ref('')
  const customerEmail = ref('')
  const submitting = ref(false)
  const message = ref('')
  const messageType = ref('')

  const todayStr = new Date().toISOString().split('T')[0]

  const canSearch = computed(() => selectedService.value && selectedDate.value)

  async function loadAvailability() {
    if (!canSearch.value) return
    loadingSlots.value = true
    selectedSlot.value = null
    message.value = ''

    const { data, error } = await supabase.rpc('get_availability', {
      p_date: selectedDate.value,
      p_duration: selectedService.value.minutes,
    })

    loadingSlots.value = false

    if (error) {
      slots.value = []
      message.value = 'Could not load availability, try again.'
      messageType.value = 'error'
      return
    }

    slots.value = data ?? []
  }

  function formatTime(slotStart) {
    return new Date(slotStart).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  async function submitBooking() {
    if (!selectedSlot.value || !customerName.value || !customerEmail.value) return

    submitting.value = true
    message.value = ''

    const { data, error } = await supabase.rpc('book_appointment', {
      p_name: customerName.value,
      p_email: customerEmail.value,
      p_service: selectedService.value.id,
      p_start: selectedSlot.value.slot_start,
      p_duration: selectedService.value.minutes,
    })

    submitting.value = false

    if (error) {
      message.value = 'Something went wrong, please try again.'
      messageType.value = 'error'
      return
    }

    if (data === 'ok') {
      message.value = 'Your appointment is booked! Check your email for confirmation.'
      messageType.value = 'success'
      slots.value = []
      selectedSlot.value = null
      customerName.value = ''
      customerEmail.value = ''
    } else if (data === 'already_booked') {
      message.value = 'This email already has an upcoming appointment.'
      messageType.value = 'error'
    } else if (data === 'slot_taken') {
      message.value = 'That time was just booked by someone else, pick another.'
      messageType.value = 'error'
      await loadAvailability()
    }
  }
</script>

<template>
  <div class="booking-page">
    <h1>Book an appointment</h1>

    <div class="booking-step">
      <h2>1. Choose a service</h2>
      <div class="service-options">
        <button
          v-for="service in SERVICES"
          :key="service.id"
          class="service-option"
          :class="{ selected: selectedService?.id === service.id }"
          @click="selectedService = service; loadAvailability()"
        >
          {{ service.name }} <span class="service-minutes">{{ service.minutes }} min</span>
        </button>
      </div>
    </div>

    <div class="booking-step">
      <h2>2. Choose a date</h2>
      <input
        type="date"
        v-model="selectedDate"
        :min="todayStr"
        class="date-input"
        @change="loadAvailability"
      >
    </div>

    <div class="booking-step" v-if="canSearch">
      <h2>3. Choose a time</h2>
      <p v-if="loadingSlots">Loading available times...</p>
      <p v-else-if="slots.length === 0">No available times for that date.</p>
      <div v-else class="slot-options">
        <button
          v-for="slot in slots"
          :key="slot.slot_start"
          class="slot-option"
          :class="{ selected: selectedSlot?.slot_start === slot.slot_start }"
          @click="selectedSlot = slot"
        >
          {{ formatTime(slot.slot_start) }}
        </button>
      </div>
    </div>

    <div class="booking-step" v-if="selectedSlot">
      <h2>4. Your details</h2>
      <input type="text" v-model="customerName" placeholder="Full name" class="booking-input">
      <input type="email" v-model="customerEmail" placeholder="Email" class="booking-input">
      <button
        class="confirm-button"
        :disabled="!customerName || !customerEmail || submitting"
        @click="submitBooking"
      >
        {{ submitting ? 'Booking...' : 'Confirm booking' }}
      </button>
    </div>

    <p v-if="message" class="booking-message" :class="messageType">{{ message }}</p>
  </div>
</template>

<script setup>
  import {useRouter} from "vue-router"

  const router = useRouter()

  const services = [
    {name: 'Beard trim', description: 'Keep your beard looking fresh and sharp', minutes: 15, price: 15},
    {name: 'Kids haircut', description: 'Gentle, fast and kid-friendly service', minutes: 30, price: 18},
    {name: 'Haircut', description: 'Clean, sharp and tailored to your style', minutes: 30, price: 25},
    {name: 'Haircut + beard', description: 'The complete package for a polished look', minutes: 45, price: 35},
  ]
</script>

<template>
  <div class="price-content">
    <h1 class="section-heading">Our prices</h1>

    <ul class="price-list">
      <li class="price-item" v-for="service in services" :key="service.name">
        <div class="price-info">
          <h2 class="price-name">{{ service.name }}</h2>
          <p class="price-description">{{ service.description }}</p>
        </div>
        <span class="price-minutes">{{ service.minutes }} min</span>
        <span class="price-amount">€{{ service.price }}</span>
      </li>
    </ul>

    <div class="cta-holder">
      <button class="cta-button" @click="router.push('/booking')">Book an appointment</button>
    </div>
  </div>
</template>

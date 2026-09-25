<script setup>
  import {useRouter} from "vue-router"

  const router = useRouter()

  const values = [
    {title: 'Precision', text: 'Every cut, fade and trim is done with care and attention to detail.'},
    {title: 'Relaxed atmosphere', text: 'Sit back, unwind and enjoy your visit. No rush, no stress.'},
    {title: 'Fair prices', text: 'Clear, honest prices for every service, with no surprises.'},
  ]
</script>

<template>
  <div class="about-hero">
    <img src="/chair%20banner.png" alt="Barbershop chair" class="about-hero-img">
    <div class="about-hero-overlay"></div>
    <h1 class="about-hero-title">About us</h1>
  </div>

  <div class="about-content">
    <h2 class="section-heading">Our story</h2>
    <p class="about-text">
      We're a small, independent barbershop built around one simple idea: a great haircut should
      feel effortless. From the moment you sit down, we take the time to listen to what you want
      and turn it into a clean, sharp result.
    </p>
    <p class="about-text">
      Whether you come in for a quick beard trim or the full haircut and beard treatment, you get
      our full attention, good conversation and a fresh look you can be proud of. Booking takes
      less than a minute, so you can pick a time that suits you.
    </p>

    <h2 class="section-heading">What we stand for</h2>
    <div class="about-values">
      <div class="about-value" v-for="value in values" :key="value.title">
        <h3 class="about-value-title">{{ value.title }}</h3>
        <p class="about-value-text">{{ value.text }}</p>
      </div>
    </div>

    <div class="cta-holder">
      <button class="cta-button" @click="router.push('/booking')">Book an appointment</button>
    </div>
  </div>
</template>

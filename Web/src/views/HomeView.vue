<script setup>
  import {useRouter} from "vue-router"
  import {ref, onMounted} from "vue";

  const router = useRouter()
  function goToBooking(){
    router.push("/booking")
  }
</script>

<template>
  <div class="home-hero">
    <img src="/chair%20banner.png" alt="Banner" class="topbanner">
    <div class="home-overlay"></div>
    <h1 class="home-title">Fresh cuts. Sharp style.</h1>
    <button @click="goToBooking" class="home-book-button">
      <span class="home-book-icon"></span>
      Book an appointment now
    </button>
  </div>
  <div class="home-services">
    <p class="section-heading">Our services</p>
    <div class="services-holder">
      <div class="services">
        <span class="services-i" style="aspect-ratio: 3/2; mask-image: url('/beard.png'); -webkit-mask-image: url('/beard.png');"></span>
        <h1 class="services-h">Beard Trim</h1>
        <p class="services-p">Keep your beard looking fresh and sharp</p>
      </div>
      <div class="services">
        <span class="services-i" style="aspect-ratio: 614/432; mask-image: url('/kid.png'); -webkit-mask-image: url('/kid.png');"></span>
        <h1 class="services-h">Kids Haircut</h1>
        <p class="services-p">Gentle, fast and kid-friendly service</p>
      </div>
      <div class="services">
        <span class="services-i" style="width: 50%; mask-image: url('/scissors.png'); -webkit-mask-image: url('/scissors.png');"></span>
        <h1 class="services-h">Haircut</h1>
        <p class="services-p">Clean, sharp and tailored to your style.</p>
      </div>
      <div class="services">
        <span class="services-i" style="width: 70%; top: -2%; mask-image: url('/cutbeard.png'); -webkit-mask-image: url('/cutbeard.png');"></span>
        <h1 class="services-h">Haircut + Beard</h1>
        <p class="services-p">The complete package for a polished look</p>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
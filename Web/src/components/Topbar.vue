<script setup>
  import {useRouter} from "vue-router"
  import {ref, onMounted} from "vue";

  const router = useRouter()
  function goToBooking(){
    router.push("/booking")
  }
  function goToHome(){
    router.push("/home")
  }

  const isDark = ref(false)
  function themeDark(){
    isDark.value = true
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("theme", "dark")
  }
  function themeLight(){
    isDark.value = false
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
  }

  onMounted(() =>{
    const saved = localStorage.getItem("theme")
    if (saved){
      isDark.value = saved === "dark"
      document.documentElement.setAttribute("data-theme", saved)
    }
  })
</script>

<template>
  <div class="topbar">
    
    <div class="topbar-left">
      <img src="/barbershoplogo.png" class="topbar-logo" @click="goToHome">
    </div>

    <div class="topbar-right">
      <nav class="topbar-nav">
        <router-link to="/home" class="topbar-nav-link">Home</router-link>
        <router-link to="/about" class="topbar-nav-link">About us</router-link>
        <router-link to="/price" class="topbar-nav-link">Prices</router-link>
      </nav>

      <button @click="goToBooking" class="topbar-book-button"><span class="topbar-book-icon"></span> Book appointment</button>

      <div class="topbar-themebox">
        <button @click="themeDark" class="theme-toggle-button" id="dark-toggle">🌙</button>
        <button @click="themeLight" class="theme-toggle-button" id="light-toggle">☀️</button>
      </div>
    </div>

  </div>
</template>
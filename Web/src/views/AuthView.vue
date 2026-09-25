<script setup>
  import {ref} from "vue";
  import {useRouter} from "vue-router";
  import {supabase} from "@/lib/supabase.js";

  const router = useRouter()

  const userEmail = ref('')
  const password = ref('')
  const loginError = ref('')
  const loggingIn = ref(false)

  async function loginClick(){
    loginError.value = ''
    loggingIn.value = true

    const {error} = await supabase.auth.signInWithPassword({
      email: userEmail.value,
      password: password.value,
    })

    loggingIn.value = false

    if (error) {
      loginError.value = 'Incorrect email or password.'
      return
    }

    router.push('/admin')
  }
</script>

<template>
  <div class="auth-page">
    <div class="login-holder">
      <img src="/barbershoplogo.png" class="login-logo">
      <div class="input-group">
        <!-- made icon with AI -->
        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 6-10 7L2 6"/>
        </svg>
        <input type="email" v-model="userEmail" placeholder="Email" class="input">
      </div>
      <div class="input-group">
        <!-- made icon with AI -->
        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="11" width="16" height="10" rx="2"/>
          <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
        </svg>
        <input type="password" v-model="password" placeholder="Password" class="input">
      </div>
      <button class="login-button" :disabled="loggingIn" @click="loginClick">Login<span class="login-icon"></span>
      </button>
      <p v-if="loginError" class="login-error">{{ loginError }}</p>
    </div>
  </div>
</template>
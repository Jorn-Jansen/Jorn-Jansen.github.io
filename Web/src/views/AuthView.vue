<script>

</script>

<template>
  <div class="auth-page">
    <div class="login-holder">
      <div class="input-group">
        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 6-10 7L2 6"/>
        </svg>
        <input type="email" v-model="customerEmail" placeholder="Email" class="input">
      </div>
      <div class="input-group">
        <svg class="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="4" y="11" width="16" height="10" rx="2"/>
          <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
        </svg>
        <input type="password" v-model="password" placeholder="Password" class="input">
      </div>
      <button class="login-button" @click="">Login<span class="login-icon"></span></button>
    </div>
  </div>
</template>
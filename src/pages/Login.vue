<template>
  <div>
    Login
    <button @click="handleLogin">login</button>
  </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue';

import  useAuth from '../hooks/useAuth'
export default defineComponent({
  setup() {
    const router = useRouter()
    const { login } = useAuth()
    const handleLogin = async () => {
      try {
        await login()
        router.push('/')
      }
      catch (error) {
        console.log(error)
      } 
    }
    return {
      handleLogin
    }
  }
})
</script>
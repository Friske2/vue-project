<template>
  <div>
    <div>Navbar
      <router-link to="/home">home</router-link>
      <router-link to="/about">about</router-link>
      <button @click="handleLogout">logout</button>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import useAuth from '../hooks/useAuth'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const { logout } = useAuth()
    const router = useRouter()
    const handleLogout = async () => {
      try {
        await logout()
        router.push('/login')
      }
      catch (error) {
        console.log(error)
      }
    }
    return {
      handleLogout
    }
  }
})

</script>
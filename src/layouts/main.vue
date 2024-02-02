<template>
  <div class="container">
    <div>
      <layout-navbar @logout="handleLogout" />
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import LayoutNavbar from './Navbar.vue'
import { defineComponent } from 'vue';
import useAuth from '../hooks/useAuth'
import { useRouter } from 'vue-router'
export default defineComponent({
  components: {
    LayoutNavbar
  },
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
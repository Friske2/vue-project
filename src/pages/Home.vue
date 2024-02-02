<template>
  <div>
    Home
    <svg-icon height="200px" name="vue"></svg-icon>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from '../components/svgIcon.vue'
export default defineComponent({
  name: 'Home',
  components: {
    SvgIcon
  }
})

</script>
<template>
  <div>
    <el-button @click="increment">+</el-button>
    <span class="m-2">{{ count  }}</span>
    <el-button @click="decrement">-</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const count = ref(0)
const increment = () => {
  count.value++
}
const decrement = () => {
  count.value--
}
</script>
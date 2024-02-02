<template>
  <component :style="`width: auto; height: ${height};`" :is="dynamicComponent" />
</template>


<script lang="ts" setup>
import { defineProps, computed,defineAsyncComponent } from 'vue'
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  height: {
    type: String,
    default: 'auto'
  },
})
const dynamicComponent = computed(() => {
  const name = props.name;
  return defineAsyncComponent(() => import(`../assets/${name}.svg`));
})
</script>
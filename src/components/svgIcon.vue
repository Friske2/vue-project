<template>
  <component :style="`width: auto; height: ${height};`" :is="dynamicComponent" />
</template>

<script lang="ts">
import { defineComponent,defineAsyncComponent } from 'vue'
export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: 'auto'
    },
  },
  computed: {
    dynamicComponent() {
      const name = this.name;
      return defineAsyncComponent(() => import(`../assets/${name}.svg`));
    },
  }
})
</script>
<template>
 <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/home">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
      </ul>
      <div class="d-flex">
        <button class="btn btn-dark" @click="handleEvent">logout</button>
      </div>
    </div>
  </div>
</nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup(_,{emit}) {
    // const emit = defineEmits(['logout'])
    const handleEvent = function() {
      emit('logout')
    }
    return {
      handleEvent
    }
  }
})
</script>
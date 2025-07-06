<script setup>
  import { computed, defineProps } from 'vue'

  const props = defineProps({
    firstName: String,
    lastName: String
  })

  const fullName = computed(() => {
    return `${props.firstName} ${props.lastName}`
  })
</script>

<template>
  <div class="red-bg">
    <h2>Hello, {{ fullName }}!</h2>
    <div>
      <slot></slot>
    </div>
    <router-link to="/">Home</router-link>
  </div>
</template>

<style scoped>
  .red-bg {
    background-color: #aa5a3d;
    padding: 20px;
    border-radius: 5px;
    margin: 5px 5px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
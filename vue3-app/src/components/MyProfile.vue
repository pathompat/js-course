<script setup>
  // import { useCounter } from '@/composables/useCounter'
  import { computed, defineProps } from 'vue'
  import { useCounter } from '@/composables/useCounter'

  const { count } = useCounter()
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
    <h3>Clicked: {{ count }}.</h3>
    <div>
      <slot></slot>
    </div>
    <button>Submit</button>
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
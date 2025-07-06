<script setup>
  import { defineEmits, watch } from 'vue'
  import { useCounter } from '@/composables/useCounter'

  const emit = defineEmits(['increment'])
  const { count, increment } = useCounter()

  watch(count, (newVal) => {
    console.log(`Count changed to: ${newVal}`)
    emit('increment', newVal)
  })
</script>

<template>
  <div 
    :class="{ 'green-bg': count <= 5, 'red-bg': count > 5 }">
    <h2>Clicked: {{ count }} times</h2>
    <p v-if="count > 5">More than 5 times clicked!</p>
    <button @click="increment" ref="btn">Click</button>
  </div>
</template>

<style scoped>
  .green-bg {
    background-color: green;
    color: white;
    padding: 20px;
    border-radius: 5px;
    margin: 5px 5px;
  }

  .red-bg {
    background-color: #e03d3d;
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
  
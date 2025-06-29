<script setup>
  import { useApi } from '@/composables/useApi'

  const { data, loading, error } = useApi('https://api.open-meteo.com/v1/forecast?latitude=13.75&longitude=100.5&current_weather=true')
  console.log(data, loading, error)
</script>

<template>
  <div v-if="loading">กำลังโหลด...</div>
  <div v-else-if="error">เกิดข้อผิดพลาด: {{ error.message }}</div>
  <ul v-else class="weather-list">
    <li>lat: {{ data.latitude }}</li>
    <li>long: {{ data.longitude }}</li>
    <li>temp: {{ data.current_weather.temperature }}</li>
  </ul>
</template>

<style scoped>
  .weather-list {
    padding: 20px;
    border-radius: 5px;
    margin: 5px 5px;
    background-color: #22ddaa;
  }
</style>
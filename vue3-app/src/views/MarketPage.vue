<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'

const API_KEY = process.env.VUE_APP_MARKETSTACK_KEY
const route = useRoute()
const router = useRouter()

const symbol = ref(route.query.symbol || '')
const data = ref(null)
const loading = ref(false)
const error = ref(null)

const fetchData = async () => {
  if (!symbol.value) return
  loading.value = true
  try {
    const res = await axios.get('https://api.marketstack.com/v2/eod', {
      params: { access_key: API_KEY, symbols: symbol.value }
    })
    data.value = res.data.data ? res.data.data[0] : null
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

watch(() => route.query.symbol, (val) => {
  symbol.value = val || ''
  fetchData()
})

onMounted(fetchData)

const submit = () => {
  if (symbol.value) {
    router.replace({ query: { symbol: symbol.value } })
  }
}
</script>

<template>
  <v-container>
    <v-form @submit.prevent="submit" class="d-flex align-center mb-4">
      <v-text-field v-model="symbol" label="Symbol" class="mr-2" />
      <v-btn type="submit" color="primary">Load</v-btn>
    </v-form>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <v-card v-else-if="data">
      <v-card-title>{{ data.name }} ({{ data.symbol }})</v-card-title>
      <v-card-text>
        <p>Open: {{ data.open }}</p>
        <p>Close: {{ data.close }}</p>
        <p>High: {{ data.high }}</p>
        <p>Low: {{ data.low }}</p>
        <p>Exchange Code: {{ data.exchange_code }}</p>
        <p>Asset Type: {{ data.asset_type }}</p>
        <p>Currency: {{ data.price_currency }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

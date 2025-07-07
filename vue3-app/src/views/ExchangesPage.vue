<script setup>
import { useApi } from '@/composables/useApi'

const API_KEY = process.env.VUE_APP_MARKETSTACK_KEY
const url = `https://api.marketstack.com/v2/exchanges?access_key=${API_KEY}`
const { data, loading, error, refetch } = useApi(url)
</script>

<template>
  <div>
    <v-btn class="refresh-btn" color="primary" @click="refetch">Refresh</v-btn>
    <div v-if="loading" class="pa-4">Loading...</div>
    <div v-else-if="error" class="pa-4">Error: {{ error.message }}</div>
    <v-table v-else>
      <thead>
        <tr>
          <th>Name</th>
          <th>Acronym</th>
          <th>Country</th>
          <th>City</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ex in data.data" :key="ex.mic">
          <td>{{ ex.name }}</td>
          <td>{{ ex.acronym }}</td>
          <td>{{ ex.country_code }}</td>
          <td>{{ ex.city }}</td>
          <td>
            <a :href="ex.website" target="_blank" v-if="ex.website">{{ ex.website }}</a>
          </td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<style scoped>
.refresh-btn {
  float: right;
  margin: 10px;
}
</style>

<script setup>
import { useApi } from '@/composables/useApi'

const API_KEY = process.env.VUE_APP_NEWS_API_KEY
const url = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&q=${encodeURIComponent('Cambodia Thailand Conflict')}`

const { data, loading, error, refetch } = useApi(url)
</script>

<template>
  <div>
    <v-btn class="refresh-btn" color="primary" @click="refetch">Refresh</v-btn>
    <div v-if="loading" class="pa-4">Loading...</div>
    <div v-else-if="error" class="pa-4">Error: {{ error.message }}</div>
    <v-container v-else>
      <v-row>
        <v-col v-for="item in data.results" :key="item.link" cols="12" md="4">
          <v-card>
            <v-img v-if="item.image_url" :src="item.image_url" height="200" />
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-text>
              <div class="desc">{{ item.description }}</div>
            </v-card-text>
            <v-card-actions>
              <a :href="item.link" target="_blank">Read more</a>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.refresh-btn {
  float: right;
  margin: 10px;
}
.desc {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>

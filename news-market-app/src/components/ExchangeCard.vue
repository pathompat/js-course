<template>
  <div class="exchange-card">
    <div class="card-header">
      <h3 class="exchange-name">{{ exchange.name }} ({{ exchange.acronym || 'N/A' }})</h3>
      <span class="exchange-mic" v-if="exchange.mic">MIC: {{ exchange.mic }}</span>
    </div>
    <div class="card-body">
      <p><strong>City:</strong> {{ exchange.city || 'N/A' }}</p>
      <p><strong>Country:</strong> {{ exchange.country || 'N/A' }} ({{ exchange.country_code || 'N/A' }})</p>
      <p v-if="exchange.timezone"><strong>Timezone:</strong> {{ exchange.timezone.timezone }}</p>
    </div>
    <div class="card-footer">
      <a v-if="exchange.website" :href="exchange.website" target="_blank" rel="noopener noreferrer" class="website-button">
        Visit Website
      </a>
      <span v-else class="no-website">Website not available</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExchangeCard',
  props: {
    exchange: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.exchange-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
}

.exchange-card:hover {
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.card-header {
  padding: 15px 20px;
  border-bottom: 1px solid #f0f0f0;
  background-color: #f9f9f9;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.exchange-name {
  margin: 0;
  font-size: 1.3em;
  color: #35495e; /* Dark Vue Green */
}

.exchange-mic {
  font-size: 0.85em;
  color: #777;
  display: block;
  margin-top: 5px;
}

.card-body {
  padding: 15px 20px;
  flex-grow: 1;
}

.card-body p {
  margin: 0 0 8px 0;
  font-size: 0.95em;
  color: #555;
}

.card-body p strong {
  color: #333;
}

.card-footer {
  padding: 15px 20px;
  border-top: 1px solid #f0f0f0;
  text-align: right;
}

.website-button {
  display: inline-block;
  padding: 8px 15px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9em;
  transition: background-color 0.3s ease;
}

.website-button:hover {
  background-color: #36a374;
}

.no-website {
  font-size: 0.9em;
  color: #888;
  font-style: italic;
}
</style>

<template>
  <div class="stock-data-card" v-if="stock">
    <h2>{{ stock.name || stock.symbol }} ({{ stock.symbol }})</h2>
    <p class="exchange-info">
      Exchange: {{ stock.exchange_code || 'N/A' }} | Asset Type: {{ stock.asset_type || 'N/A' }} | Currency: {{ stock.price_currency || 'N/A' }}
    </p>
    <div class="price-details">
      <div class="price-item">
        <span class="label">Open:</span>
        <span class="value">{{ formatPrice(stock.open) }}</span>
      </div>
      <div class="price-item">
        <span class="label">Close:</span>
        <span class="value">{{ formatPrice(stock.close) }}</span>
      </div>
      <div class="price-item">
        <span class="label">High:</span>
        <span class="value">{{ formatPrice(stock.high) }}</span>
      </div>
      <div class="price-item">
        <span class="label">Low:</span>
        <span class="value">{{ formatPrice(stock.low) }}</span>
      </div>
      <div class="price-item" v-if="stock.volume">
        <span class="label">Volume:</span>
        <span class="value">{{ formatVolume(stock.volume) }}</span>
      </div>
    </div>
    <p class="data-timestamp" v-if="stock.date">
      Data as of: {{ formatDate(stock.date) }}
    </p>
  </div>
  <div v-else class="no-data">
    <p>No data available for the selected stock.</p>
  </div>
</template>

<script>
export default {
  name: 'StockDataCard',
  props: {
    stock: {
      type: Object,
      default: null,
    },
  },
  methods: {
    formatPrice(value) {
      if (typeof value !== 'number') return 'N/A';
      return value.toFixed(2);
    },
    formatVolume(value) {
      if (typeof value !== 'number') return 'N/A';
      return value.toLocaleString();
    },
    formatDate(dateString) {
      if (!dateString) return 'N/A';
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
      try {
        // Marketstack EOD data usually provides date without time.
        // If time is included and it's UTC (ends with Z), it will be converted to local.
        // If it's just a date, it will be treated as local midnight.
        const date = new Date(dateString);
         // Check if date is valid
        if (isNaN(date.getTime())) {
            return dateString; // Return original string if date is invalid
        }
        // For EOD data, time is less relevant, so just date might be fine
        return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
      } catch (e) {
        console.error("Error formatting date:", e);
        return dateString; // Fallback to original string
      }
    }
  }
};
</script>

<style scoped>
.stock-data-card {
  background-color: #fff;
  padding: 20px 25px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  border: 1px solid #e0e0e0;
}

.stock-data-card h2 {
  margin-top: 0;
  margin-bottom: 10px;
  color: #35495e; /* Dark Vue Green */
  font-size: 1.8em;
}

.exchange-info {
  font-size: 0.9em;
  color: #777;
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 10px;
}

.price-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.price-item {
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #eee;
}

.price-item .label {
  display: block;
  font-size: 0.9em;
  color: #555;
  margin-bottom: 5px;
  font-weight: bold;
}

.price-item .value {
  font-size: 1.2em;
  color: #333;
  font-weight: bold;
}

.data-timestamp {
  font-size: 0.8em;
  color: #888;
  text-align: right;
  margin-top: 15px;
}

.no-data {
  text-align: center;
  padding: 20px;
  color: #777;
}
</style>

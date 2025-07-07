<template>
  <div class="market-view">
    <h1>Stock Market Data</h1>
    <form @submit.prevent="searchStock" class="search-form">
      <input
        type="text"
        v-model="symbolInput"
        placeholder="Enter stock symbol (e.g., AAPL)"
        class="symbol-input"
      />
      <button type="submit" :disabled="loading" class="search-button">
        {{ loading ? 'Searching...' : 'Search' }}
      </button>
    </form>

    <p v-if="error" class="error-message">{{ error }}</p>

    <div v-if="loading && !stockData" class="loading-indicator">
      <p>Loading stock data...</p>
    </div>

    <StockDataCard v-if="stockData" :stock="stockData" />

    <div v-if="!loading && !stockData && searched && !error" class="no-results">
        <p>No data found for symbol "{{ currentSymbol }}". Please ensure the symbol is correct and try again.</p>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import StockDataCard from '../components/StockDataCard.vue';

export default {
  name: 'MarketView',
  components: {
    StockDataCard,
  },
  data() {
    return {
      symbolInput: '',
      currentSymbol: '',
      stockData: null,
      loading: false,
      error: null,
      searched: false, // To track if a search has been attempted
      apiKey: process.env.VUE_APP_MARKETSTACK_API_KEY || 'YOUR_MARKETSTACK_API_KEY', // Fallback
    };
  },
  watch: {
    '$route.query.symbol'(newSymbol) {
      if (newSymbol && newSymbol.toUpperCase() !== this.currentSymbol.toUpperCase()) {
        this.symbolInput = newSymbol.toUpperCase();
        this.fetchStockData();
      }
    }
  },
  methods: {
    searchStock() {
      if (!this.symbolInput.trim()) {
        this.error = 'Please enter a stock symbol.';
        this.stockData = null;
        this.searched = false;
        return;
      }
      this.currentSymbol = this.symbolInput.trim().toUpperCase();
      this.$router.push({ query: { symbol: this.currentSymbol } });
      // fetchStockData will be called by the watcher or manually if route doesn't change
      if (this.$route.query.symbol === this.currentSymbol) {
         this.fetchStockData();
      }
    },
    async fetchStockData() {
      if (!this.currentSymbol) {
        // This case might occur if the page loads with no symbol in query and no input yet
        this.stockData = null;
        this.searched = false;
        return;
      }

      this.loading = true;
      this.error = null;
      this.stockData = null;
      this.searched = true;

      if (this.apiKey === 'YOUR_MARKETSTACK_API_KEY' || !this.apiKey) {
        console.error('Marketstack API key is not set. Please set VUE_APP_MARKETSTACK_API_KEY in your .env file.');
        this.error = 'API Key for Marketstack is missing. Please configure it in the .env file (VUE_APP_MARKETSTACK_API_KEY).';
        this.loading = false;
        return;
      }

      try {
        // Marketstack's free plan often requires specific exchanges or has limitations.
        // Using /eod/latest endpoint as per example. Some symbols might need exchange specified.
        const response = await axios.get(`https://api.marketstack.com/v1/eod/latest`, { // v1 for latest EOD for free tier
          params: {
            access_key: this.apiKey,
            symbols: this.currentSymbol,
          },
        });

        if (response.data && response.data.data && response.data.data.length > 0) {
          const rawData = response.data.data[0];
          // The API provides results in an array `data`. We take the first one.
          // The fields required are: data.open, data.close, high, low, name (from symbol), exchange_code (from exchange), asset_type (not directly available, can be assumed stock), price_currency (not directly available in EOD, usually USD for US stocks), symbol
          this.stockData = {
            open: rawData.open,
            close: rawData.close,
            high: rawData.high,
            low: rawData.low,
            volume: rawData.volume,
            name: rawData.symbol, // Marketstack EOD might not return full name, use symbol
            exchange_code: rawData.exchange,
            asset_type: 'Stock', // Assumption
            price_currency: 'USD', // Common assumption, Marketstack EOD doesn't specify in basic response
            symbol: rawData.symbol,
            date: rawData.date, // Add date for context
          };
        } else if (response.data && response.data.error) {
            this.error = `Error from Marketstack: ${response.data.error.message || 'Unknown API error'}`;
            console.error("Marketstack API error:", response.data.error);
        }
         else {
          this.error = `No data found for symbol ${this.currentSymbol}. It might be an invalid symbol or not available on the free plan.`;
          this.stockData = null;
        }
      } catch (err) {
        console.error('Error fetching stock data:', err);
        this.error = 'Failed to fetch stock data. ';
        if (err.response) {
          this.error += `Status: ${err.response.status}. `;
          if(err.response.data && err.response.data.error && err.response.data.error.message) {
            this.error += err.response.data.error.message;
          } else {
            this.error += 'Check console for more details.';
          }
          if (err.response.status === 401 || err.response.status === 403) {
            this.error = 'Failed to fetch stock data: Invalid or unauthorized API Key for Marketstack.';
          } else if (err.response.status === 429) {
            this.error = 'Failed to fetch stock data: API request limit reached for Marketstack.';
          } else if (err.response.data && err.response.data.error && err.response.data.error.code === 'validation_error') {
             this.error = `Validation Error: ${err.response.data.error.message}. Ensure the symbol is correct.`;
          }
        } else if (err.request) {
          this.error += 'No response from server. Check your network connection.';
        } else {
          this.error += err.message;
        }
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    // Load symbol from query parameter if present on initial load
    const querySymbol = this.$route.query.symbol;
    if (querySymbol) {
      this.symbolInput = querySymbol.toUpperCase();
      this.currentSymbol = querySymbol.toUpperCase();
      this.fetchStockData();
    }
  },
};
</script>

<style scoped>
.market-view {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.market-view h1 {
  text-align: center;
  margin-bottom: 25px;
  color: #333;
}

.search-form {
  display: flex;
  margin-bottom: 25px;
  gap: 10px;
}

.symbol-input {
  flex-grow: 1;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1em;
  box-sizing: border-box;
}

.symbol-input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}

.search-button {
  padding: 12px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #36a374;
}

.search-button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.error-message {
  color: red;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid red;
  border-radius: 4px;
  background-color: #ffe0e0;
  text-align: center;
}

.loading-indicator, .no-results {
  text-align: center;
  font-size: 1.1em;
  color: #666;
  margin-top: 40px;
}
</style>

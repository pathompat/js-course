<template>
  <div class="exchanges-view">
    <h1>Global Stock Exchanges</h1>

    <div class="controls">
        <input type="text" v-model="searchTerm" placeholder="Filter by name, acronym, or country..." class="filter-input"/>
        <button @click="fetchExchanges" :disabled="loading" class="reload-button">
            {{ loading ? 'Loading...' : 'Reload Exchanges' }}
        </button>
    </div>

    <p v-if="error" class="error-message">{{ error }}</p>

    <div v-if="loading && exchanges.length === 0" class="loading-indicator">
      <p>Loading exchanges list...</p>
    </div>

    <div v-if="!loading && filteredExchanges.length === 0 && !error" class="no-results">
      <p>No exchanges found matching your criteria, or no data available.</p>
    </div>

    <div class="exchanges-grid" v-if="filteredExchanges.length > 0">
      <ExchangeCard v-for="exchange in filteredExchanges" :key="exchange.mic || exchange.name" :exchange="exchange" />
    </div>
     <div class="pagination-controls" v-if="totalPages > 1">
        <button @click="prevPage" :disabled="currentPage === 1 || loading">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages || loading">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ExchangeCard from '../components/ExchangeCard.vue';

const ITEMS_PER_PAGE = 24; // Adjust as needed

export default {
  name: 'ExchangesView',
  components: {
    ExchangeCard,
  },
  data() {
    return {
      exchanges: [],
      loading: false,
      error: null,
      apiKey: process.env.VUE_APP_MARKETSTACK_API_KEY || 'YOUR_MARKETSTACK_API_KEY',
      searchTerm: '',
      currentPage: 1,
      totalExchanges: 0, // Total count from API for pagination if available
    };
  },
  computed: {
    // Client-side filtering after fetching (Marketstack free tier may not support server-side search on exchanges)
    allFilteredExchanges() {
        if (!this.searchTerm) {
            return this.exchanges;
        }
        const lowerSearchTerm = this.searchTerm.toLowerCase();
        return this.exchanges.filter(ex => {
            return (ex.name && ex.name.toLowerCase().includes(lowerSearchTerm)) ||
                   (ex.acronym && ex.acronym.toLowerCase().includes(lowerSearchTerm)) ||
                   (ex.country && ex.country.toLowerCase().includes(lowerSearchTerm)) ||
                   (ex.country_code && ex.country_code.toLowerCase().includes(lowerSearchTerm)) ||
                   (ex.city && ex.city.toLowerCase().includes(lowerSearchTerm));
        });
    },
    totalPages() {
        return Math.ceil(this.allFilteredExchanges.length / ITEMS_PER_PAGE);
    },
    filteredExchanges() {
        const start = (this.currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        return this.allFilteredExchanges.slice(start, end);
    }
  },
  methods: {
    async fetchExchanges() {
      this.loading = true;
      this.error = null;
      // Reset exchanges for reload, keep current page if possible or reset if filter changes
      // this.exchanges = [];

      if (this.apiKey === 'YOUR_MARKETSTACK_API_KEY' || !this.apiKey) {
        console.error('Marketstack API key is not set for exchanges. Please set VUE_APP_MARKETSTACK_API_KEY in your .env file.');
        this.error = 'API Key for Marketstack is missing. Please configure it in the .env file (VUE_APP_MARKETSTACK_API_KEY).';
        this.loading = false;
        return;
      }

      try {
        // Marketstack API for exchanges. Free tier might have pagination limits or return all.
        // The API is http://api.marketstack.com/v1/exchanges for v1.
        const response = await axios.get('https://api.marketstack.com/v1/exchanges', {
          params: {
            access_key: this.apiKey,
            // Marketstack free plan usually returns all exchanges, limit/offset might be paid features
            // limit: 1000 // Try to get as many as possible if supported
          },
        });

        if (response.data && response.data.data) {
          // The API returns data in `data` array.
          // Required fields: name, acronym, country_code, city, website
          // Marketstack provides: name, acronym, mic, country, country_code, city, website, timezone object
          this.exchanges = response.data.data.map(ex => ({
            name: ex.name,
            acronym: ex.acronym,
            mic: ex.mic, // Market Identifier Code, useful as a key
            country: ex.country,
            country_code: ex.country_code,
            city: ex.city,
            website: ex.website,
            timezone: ex.timezone // Object like { timezone: "Europe/London", abbr: "GMT", abbr_dst: "BST" }
          }));
          this.totalExchanges = response.data.pagination ? response.data.pagination.total : this.exchanges.length;
          this.currentPage = 1; // Reset to first page on new fetch/filter
        } else if (response.data && response.data.error) {
            this.error = `Error from Marketstack: ${response.data.error.message || 'Unknown API error'}`;
            this.exchanges = [];
        } else {
          this.error = 'No exchange data found or unexpected API response structure.';
          this.exchanges = [];
        }
      } catch (err) {
        console.error('Error fetching exchanges:', err);
        this.error = 'Failed to fetch exchanges list. ';
         if (err.response) {
          this.error += `Status: ${err.response.status}. `;
          if(err.response.data && err.response.data.error && err.response.data.error.message) {
            this.error += err.response.data.error.message;
          } else {
            this.error += 'Check console for more details.';
          }
          if (err.response.status === 401 || err.response.status === 403) {
            this.error = 'Failed to fetch exchanges: Invalid or unauthorized API Key for Marketstack.';
          } else if (err.response.status === 429) {
            this.error = 'Failed to fetch exchanges: API request limit reached for Marketstack.';
          }
        } else if (err.request) {
          this.error += 'No response from server. Check your network connection.';
        } else {
          this.error += err.message;
        }
        this.exchanges = [];
      } finally {
        this.loading = false;
      }
    },
    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    },
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.currentPage++;
        }
    }
  },
  watch: {
    searchTerm() {
        this.currentPage = 1; // Reset to first page when search term changes
    }
  },
  created() {
    this.fetchExchanges();
  },
};
</script

<style scoped>
.exchanges-view {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.exchanges-view h1 {
  text-align: center;
  margin-bottom: 25px;
  color: #333;
}

.controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    gap: 15px;
}

.filter-input {
    flex-grow: 1;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 0.95em;
}

.filter-input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}

.reload-button {
  padding: 10px 15px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.reload-button:hover {
  background-color: #36a374;
}

.reload-button:disabled {
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

.exchanges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.pagination-controls {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    padding: 10px;
    gap: 15px;
}

.pagination-controls button {
    padding: 8px 15px;
    background-color: #5cb85c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
}

.pagination-controls button:hover:not(:disabled) {
    background-color: #4cae4c;
}

.pagination-controls button:disabled {
    background-color: #ddd;
    color: #888;
    cursor: not-allowed;
}

.pagination-controls span {
    font-size: 1em;
    color: #555;
}


@media (max-width: 768px) {
  .exchanges-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
   .controls {
        flex-direction: column;
        gap: 10px;
    }
    .filter-input, .reload-button {
        width: 100%;
    }
}
</style>

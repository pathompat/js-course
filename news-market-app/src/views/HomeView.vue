<template>
  <div class="news-view">
    <div class="header-controls">
      <h1>Thai-Cambodia Conflict News</h1>
      <button @click="fetchNews" :disabled="loading" class="reload-button">
        {{ loading ? 'Loading...' : 'Reload News' }}
      </button>
    </div>
    <p v-if="error" class="error-message">{{ error }}</p>
    <div v-if="loading && articles.length === 0" class="loading-indicator">
      <p>Loading news...</p>
    </div>
    <div v-if="!loading && articles.length === 0 && !error" class="no-articles">
      <p>No news articles found. Try reloading or check back later.</p>
    </div>
    <div class="news-grid" v-if="articles.length > 0">
      <NewsCard v-for="article in articles" :key="article.article_id || article.link" :article="article" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import NewsCard from '../components/NewsCard.vue';

export default {
  name: 'HomeView',
  components: {
    NewsCard,
  },
  data() {
    return {
      articles: [],
      loading: false,
      error: null,
      apiKey: process.env.VUE_APP_NEWSDATA_API_KEY || 'YOUR_NEWSDATA_API_KEY', // Fallback for local dev
    };
  },
  methods: {
    async fetchNews() {
      this.loading = true;
      this.error = null;
      try {
        // Ensure the API key is available
        if (this.apiKey === 'YOUR_NEWSDATA_API_KEY' || !this.apiKey) {
          console.error('Newsdata.io API key is not set. Please set VUE_APP_NEWSDATA_API_KEY in your .env file.');
          this.error = 'API Key for Newsdata.io is missing. Please configure it in the .env file (VUE_APP_NEWSDATA_API_KEY).';
          this.loading = false;
          this.articles = []; // Clear articles if key is missing
          return;
        }

        const response = await axios.get('https://newsdata.io/api/1/news', { // Corrected endpoint
          params: {
            apikey: this.apiKey,
            q: 'Cambodia Thailand Conflict',
            language: 'en,th', // Fetch English and Thai news
          },
        });
        if (response.data && response.data.results) {
          this.articles = response.data.results;
        } else if (response.data && response.data.status === 'error') {
            this.error = `Error from Newsdata.io: ${response.data.results.message || 'Unknown error'}`;
            this.articles = [];
        }
        else {
          this.articles = [];
          console.warn('No results found or unexpected API response structure:', response.data);
        }
      } catch (err) {
        console.error('Error fetching news:', err);
        this.error = 'Failed to fetch news. ';
        if (err.response) {
          this.error += `Status: ${err.response.status}. Message: ${err.response.data?.results?.message || err.message}`;
          if (err.response.status === 401) {
            this.error = 'Failed to fetch news: Invalid API Key for Newsdata.io.';
          } else if (err.response.status === 429) {
            this.error = 'Failed to fetch news: API request limit reached for Newsdata.io.';
          }
        } else if (err.request) {
          this.error += 'No response from server. Check your network connection.';
        } else {
          this.error += err.message;
        }
        this.articles = [];
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.fetchNews();
  },
};
</script>

<style scoped>
.news-view {
  padding: 20px;
}

.header-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-controls h1 {
  margin: 0;
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
}

.loading-indicator, .no-articles {
  text-align: center;
  font-size: 1.2em;
  color: #666;
  margin-top: 50px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

@media (max-width: 600px) {
  .news-grid {
    grid-template-columns: 1fr; /* Single column on small screens */
  }
  .header-controls {
    flex-direction: column;
    align-items: stretch;
  }
  .header-controls h1 {
    margin-bottom: 10px;
    text-align: center;
  }
  .reload-button {
    width: 100%;
  }
}
</style>

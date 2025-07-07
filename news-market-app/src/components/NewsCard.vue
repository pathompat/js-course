<template>
  <div class="news-card">
    <img v-if="article.image_url" :src="article.image_url" :alt="article.title" class="news-image" @error="handleImageError"/>
    <img v-else src="../assets/default-news-image.png" alt="Default News Image" class="news-image default-image" />
    <div class="card-content">
      <h3 class="card-title">{{ article.title }}</h3>
      <p class="card-description">{{ truncatedDescription }}</p>
      <a :href="article.link" target="_blank" rel="noopener noreferrer" class="read-more">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  computed: {
    truncatedDescription() {
      if (!this.article.description) {
        return 'No description available.';
      }
      const maxLines = 4;
      const lineHeight = 1.2; // Approximate line height in em
      const maxHeight = maxLines * lineHeight; // Max height in em

      // This is a simplified way to estimate truncation.
      // For perfect truncation, one might need to render to an off-screen element
      // or use a library. This approach limits by character count based on an average.
      // Assuming average 50 chars per line for typical descriptions.
      const maxChars = maxLines * 70; // Adjusted for potentially wider cards
      if (this.article.description.length > maxChars) {
        return this.article.description.substring(0, maxChars) + '...';
      }
      return this.article.description;
    },
  },
  methods: {
    handleImageError(event) {
      // Replace broken image with a default one
      event.target.src = require('../assets/default-news-image.png');
      event.target.classList.add('default-image'); // Optional: for styling default state
    }
  }
};
</script>

<style scoped>
.news-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  max-width: 350px; /* Or adjust as per grid layout */
}

.news-image {
  width: 100%;
  height: 200px;
  object-fit: cover; /* Crop image to fit */
  border-bottom: 1px solid #e0e0e0;
}

.news-image.default-image {
  object-fit: contain; /* Show default image fully, maybe with padding */
  padding: 10px;
  background-color: #f0f0f0;
}


.card-content {
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.2em;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
  /* Limit title to 2 lines with ellipsis */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2.4em; /* Assuming 1.2em line height */
}

.card-description {
  font-size: 0.9em;
  color: #666;
  line-height: 1.4;
  margin-bottom: 15px;
  flex-grow: 1;
  /* CSS for line clamping (works in most modern browsers) */
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Max lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 5.6em; /* 4 lines * 1.4 line-height */
}

.read-more {
  display: inline-block;
  padding: 8px 12px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9em;
  text-align: center;
  margin-top: auto; /* Pushes the button to the bottom */
  transition: background-color 0.3s ease;
}

.read-more:hover {
  background-color: #36a374;
}
</style>

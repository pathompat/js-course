<template>
  <div id="app">
    <nav class="app-bar">
      <div class="nav-container">
        <router-link to="/" class="nav-brand">NewsMarket</router-link>
        <div class="nav-links">
          <router-link to="/">News</router-link>
          <router-link to="/market">Stock Market</router-link>
          <router-link to="/exchanges">Exchanges</router-link>
          <router-link to="/profile">Profile</router-link>
          <router-link to="/login">Login</router-link>
        </div>
      </div>
    </nav>
    <main class="content-container">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-bar {
  background-color: #35495e; /* Darker Vue green */
  padding: 15px 30px;
  color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-brand {
  font-size: 1.5em;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links a {
  color: #e0e0e0; /* Lighter gray for links */
  margin-left: 20px;
  text-decoration: none;
  font-size: 1em;
  transition: color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: #42b983; /* Vue green for active/hover */
  font-weight: bold;
}

.content-container {
  flex-grow: 1;
  padding: 20px;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
}

/* Basic responsive behavior for navbar */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-links {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .nav-links a {
    margin-left: 0;
    margin-bottom: 8px;
    padding: 5px 0;
  }
}
</style>

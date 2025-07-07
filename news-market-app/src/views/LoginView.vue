<template>
  <div class="login-view">
    <div class="login-container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" class="login-button">Login</button>
      </form>
      <p v-if="message" class="login-message">{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      message: '',
    };
  },
  methods: {
    handleLogin() {
      // Placeholder login logic
      this.message = 'Login functionality is not implemented in this demo.';
      console.log('Attempted login with:', this.email);
      // In a real app, you would call an auth service here
    },
  },
};
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: calc(100vh - 120px); /* Adjust based on navbar/footer height */
}

.login-container {
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-container h1 {
  margin-bottom: 25px;
  color: #333;
}

.login-form .form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 1em;
}

.form-group input:focus {
  outline: none;
  border-color: #42b983; /* Vue green */
  box-shadow: 0 0 0 2px rgba(66, 185, 131, 0.2);
}

.login-button {
  width: 100%;
  padding: 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1em;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #36a374;
}

.login-message {
  margin-top: 20px;
  color: #e74c3c; /* Error color, can be changed for info */
}
</style>

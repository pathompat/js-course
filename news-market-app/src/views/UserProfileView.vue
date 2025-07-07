<template>
  <div class="user-profile-view">
    <div class="profile-container">
      <h1>User Profile</h1>
      <div v-if="user" class="profile-details">
        <div class="profile-avatar">
          <img :src="user.avatarUrl || defaultAvatar" alt="User Avatar" />
        </div>
        <div class="profile-info">
          <p><strong>Name:</strong> {{ user.name }}</p>
          <p><strong>Email:</strong> {{ user.email }}</p>
          <p><strong>Joined:</strong> {{ user.joinedDate }}</p>
          <button @click="editProfile" class="edit-profile-button">Edit Profile</button>
        </div>
      </div>
      <div v-else class="no-user-data">
        <p>User data is not available. Please log in to view your profile.</p>
        <p>(This is a placeholder page. Profile editing and data are not functional.)</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfileView',
  data() {
    return {
      // Placeholder user data. In a real app, this would come from a store or API.
      user: {
        name: 'Demo User',
        email: 'demo@example.com',
        joinedDate: 'January 1, 2024',
        avatarUrl: null, // Could be a URL to an image
      },
      defaultAvatar: require('../assets/default-avatar.png'), // A default avatar image
    };
  },
  methods: {
    editProfile() {
      alert('Profile editing is not implemented in this demo.');
      // In a real app, this would navigate to an edit profile page or open a modal.
    },
  },
  created() {
    // In a real app, you might fetch user data here if not already available
    // For now, we're using static data.
    // If you wanted to simulate a "not logged in" state:
    // this.user = null;
  }
};
</script>

<style scoped>
.user-profile-view {
  display: flex;
  justify-content: center;
  padding: 20px;
}

.profile-container {
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  text-align: center;
}

.profile-container h1 {
  margin-bottom: 25px;
  color: #333;
}

.profile-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
}

.profile-avatar img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid #eee;
}

.profile-info p {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 10px;
}

.profile-info strong {
  color: #333;
}

.edit-profile-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.edit-profile-button:hover {
  background-color: #36a374;
}

.no-user-data {
  margin-top: 20px;
  color: #777;
}

.no-user-data p {
  margin-bottom: 10px;
}
</style>

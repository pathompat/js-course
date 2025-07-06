<script setup>
  import MyProfile from '@/components/MyProfile.vue'
  import { useRoute } from 'vue-router'

  const route = useRoute();
  const firstName = route.query.firstname;
  const lastName = route.query.lastname;
</script>

<template>
  <div>
    <h1>User Detail Page</h1>
    <p>User ID: {{ route.params.id }}</p>
    <MyProfile :first-name="firstName" :last-name="lastName"/>
  </div>
</template>
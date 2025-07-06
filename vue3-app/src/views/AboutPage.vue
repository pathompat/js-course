<script setup>
  import MyProfile from '@/components/MyProfile.vue'
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useUser } from '@/composables/useUser';

  const user = useUser();

  const firstName = ref(user.value)
  const lastName = ref('')

  onMounted(() => {
    console.log('AboutPage mounted');
  });

  onUnmounted(() => {
    console.log('AboutPage unmounted');
  });
</script>

<template>
  <MyProfile :first-name="firstName" :last-name="lastName"/>
</template>
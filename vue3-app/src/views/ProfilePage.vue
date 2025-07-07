<script setup>
import MyProfile from '@/components/MyProfile.vue'
import { useUser } from '@/composables/useUser'

const user = useUser()
</script>

<template>
  <div>
    <MyProfile :first-name="user" last-name="" />
  </div>
</template>

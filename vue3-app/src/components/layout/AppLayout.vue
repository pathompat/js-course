<script setup>
  import { ref } from 'vue'

  const drawer = ref(false)
  function toggleDrawer() {
    drawer.value = !drawer.value
  }
</script>

<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="toggleDrawer" />

      <v-toolbar-title>My Website</v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item to="/">
          <v-list-item-title>News</v-list-item-title>
        </v-list-item>
        <v-list-item to="/market">
          <v-list-item-title>Market</v-list-item-title>
        </v-list-item>
        <v-list-item to="/exchanges">
          <v-list-item-title>Exchanges</v-list-item-title>
        </v-list-item>
        <v-list-item to="/profile">
          <v-list-item-title>Profile</v-list-item-title>
        </v-list-item>
        <v-list-item to="/login">
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
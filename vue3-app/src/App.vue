<script setup>
  import ClickCounter from './components/ClickCounter.vue'
  import MyProfile from './components/MyProfile.vue'
  import ShowWeather from './components/ShowWeather.vue'
  import AppLayout from './components/AppLayout.vue'

  const firstName = 'Pathompat'
  const lastName = 'Sungpankhao'

  const showClick = (count) => {
    console.log(`App.vue: You clicked ${count} times!`)
    // alert(`You clicked ${count} times!`)
  }
</script>

<template>
  <AppLayout>
    <MyProfile :first-name="firstName" :last-name="lastName">
      <p>Welcome to my profile page!</p>
      <p>Feel free to explore and learn more about me.</p>
      <a href="" target="_blank" rel="noopener noreferrer">Learn more about me</a>
    </MyProfile>

    <MyProfile first-name="Test" last-name="Test">
    </MyProfile>
    <ClickCounter @increment="showClick" />
    <ShowWeather />
  </AppLayout>
</template>
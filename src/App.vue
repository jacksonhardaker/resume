<template>
  <md-app id="app">
    <md-app-content>
      <Header/>
    </md-app-content>
  </md-app>
</template>

<script>

import Header from './components/Header'

export default {
  name: 'App',
  store: {
    store: 'store'
  },
  components: {
    Header
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>

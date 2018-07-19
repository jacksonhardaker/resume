<template>
  <md-app id="app">
    <md-app-content>
      <Header/>
      <img src="./assets/logo.png">
      <HelloWorld/>
    </md-app-content>
  </md-app>
</template>

<script>

import HelloWorld from './components/HelloWorld'
import Header from './components/Header'

export default {
  name: 'App',
  store: {
    store: 'store'
  },
  components: {
    Header,
    HelloWorld
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>

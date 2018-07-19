<template>
  <md-app id="app">
    <md-app-content>
      <Header v-bind="resume.basics"/>
      <img src="./assets/logo.png">
      <HelloWorld/>
    </md-app-content>
  </md-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'
import resumeJson from './assets/json/resume.json'

export default {
  name: 'App',
  components: {
    Header,
    HelloWorld
  },
  data: function () {
    return {
      resume: {
        basics: null
      }
    }
  },
  created: function () {
    fetch(resumeJson)
      .then(r => r.json())
      .then(json => { this.resume = json })
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>

<template>
    <md-content md-tag="header">
        <md-avatar class="md-large">
            <img src="../assets/jackson-hardaker-headshot-600x600.png" :alt="$attrs.name">
        </md-avatar>
        <h1>{{ basics.name }}</h1>
        <h2>{{ basics.label }}</h2>
        <address>
            <p>{{ basics.location.city }}, {{basics.location.region}}</p>
            <p><PhoneNumber v-bind:phone="basics.phone"/></p>
            <p><EmailAddress v-bind:email="basics.email" /></p>
        </address>
        <md-icon src="../assets/svg/github-mark.svg"></md-icon>
    </md-content>
</template>

<script>

import EmailAddress from './EmailAddress'
import PhoneNumber from './PhoneNumber'

export default {
  name: 'Header',
  store: {
    person: 'person'
  },
  components: {
    EmailAddress,
    PhoneNumber
  },
  data: () => {
    return {
      basics: {
        location: {}
      }
    }
  },
  created: function () {
    this.person.get()
      .then(data => { this.basics = data })
  }
}
</script>

<style>
</style>

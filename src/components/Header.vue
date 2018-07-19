<template>
    <md-content md-tag="header">
        <md-avatar class="md-large">
            <img src="../assets/jackson-hardaker-headshot-600x600.png" :alt="$attrs.name">
        </md-avatar>
        <h1>{{ person.name }}</h1>
        <h2>{{ person.label }}</h2>
        <address>
            <p>{{ person.location.city }}, {{person.location.region}}</p>
            <p><PhoneNumber v-bind:phone="person.phone"/></p>
            <p><EmailAddress v-bind:email="person.email" /></p>
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
  }
}
</script>

<style>
</style>

<template>
    <md-content md-tag="header">
        <md-avatar class="md-large">
            <img src="../assets/jackson-hardaker-headshot-600x600.png" :alt="$attrs.name">
        </md-avatar>
        <h1>{{ $attrs.name }}</h1>
        <h2>{{ $attrs.label }}</h2>
        <address>
            <p>{{ `${$attrs.location ? $attrs.location.city : ''}, ${$attrs.location ? $attrs.location.region : ''}` }}</p>
            <a :href="`tel:${$attrs.phone}`">{{ $attrs.phone }}</a>
            <a :href="`mailto:${$attrs.phone}`">{{ $attrs.email }}</a>
        </address>
        <md-icon src="../assets/svg/github-mark.svg"></md-icon>
    </md-content>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  }
}
</script>

<style>
</style>

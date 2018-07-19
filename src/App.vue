<template>
  <md-content><Header/></md-content>
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
  },
  data: () => ({
    menuVisible: false
  })
}
</script>

<style lang="scss" scoped>

</style>

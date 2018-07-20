<template>
  <md-content>
    <Header/>
    <!-- <div class="md-layout">
      <div class="md-layout-item">
        {{ basics.summary }}
      </div>
    </div> -->
    <Skills/>
    <Tools/>
    <Projects/>
    <Education/>
  </md-content>
</template>

<script>

import Header from './components/Header'
import Skills from './components/Skills'
import Tools from './components/Tools'
import Projects from './components/Projects'
import Education from './components/Education'

export default {
  name: 'App',
  store: {
    person: 'person'
  },
  components: {
    Header,
    Skills,
    Tools,
    Projects,
    Education
  },
  data: () => ({
    menuVisible: false,
    basics: {}
  }),
  created: function () {
    this.person.get()
      .then(data => { this.basics = data })
  }
}
</script>

<style lang="scss" scoped>

</style>

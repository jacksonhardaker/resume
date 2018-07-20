<template>
  <md-content class="section md-layout" md-tag="section">
    <h3 class="section-heading md-display-1 md-layout-item md-size-20">skills</h3>
    <div class="section-body md-layout-item">
      <HorizontalList v-bind:list="skills" />
    </div>
  </md-content>
</template>

<script>
import HorizontalList from './HorizontalList'

export default {
  name: 'Skills',
  store: {
    resume: 'resume'
  },
  components: {
    HorizontalList
  },
  data: () => {
    return {
      skills: []
    }
  },
  created: function () {
    this.resume.getSkills()
      .then(data => { this.skills = data })
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/colors.scss';

  .skills-section-list {
    padding:0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
  }
</style>

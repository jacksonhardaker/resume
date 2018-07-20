<template>
  <md-content class="section md-layout" md-tag="section">
    <h3 class="section-heading md-display-1 md-layout-item md-size-20">education</h3>
    <ul class="md-layout-item skills-section-list">
      <li :key="item.studyType" v-for="item in education">
        <h4 class="title">{{ item.institution }}</h4>
        <p>{{ item.studyType }}</p>
      </li>
    </ul>
  </md-content>
</template>

<script>
export default {
  name: 'Education',
  store: {
    resume: 'resume'
  },
  data: () => {
    return {
      education: []
    }
  },
  created: function () {
    this.resume.getEducation()
      .then(data => { this.education = data })
  }
}
</script>

<style lang="scss" scoped>

</style>

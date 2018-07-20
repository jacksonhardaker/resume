<template>
  <md-content class="section md-layout" md-tag="section">
    <h3 class="section-heading md-display-1 md-layout-item md-size-20 md-xsmall-size-100">education</h3>
    <div class="md-layout-item section-body">
      <ul class="education-list">
        <li class="education-list-item" :key="item.studyType" v-for="item in education">
          <div class="education-headline">
            <h4 class="title education-name">{{ item.institution }}</h4>
            <p class="education-type">{{ item.studyType }}</p>
          </div>
        </li>
      </ul>
    </div>
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
.education-list {
    padding:0;
    margin: 0;
    list-style-type: none;
  }
  .education-list-item {
    margin: 0 0 1.65rem 0;
  }
  .education-headline {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin: 0 0 1.15rem 0;
  }
  .education-name {
    margin: 0 1ch 0 0;
  }
  .education-type {
    margin: 0;
  }
</style>

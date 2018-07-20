<template>
  <md-content class="section md-layout" md-tag="section">
    <h3 class="section-heading md-display-1 md-layout-item md-size-20">projects</h3>
    <div class="md-layout-item section-body">
      <ul class="md-layout-item project-section-list">
        <li :key="project.name" v-for="project in projects">
          <div class="project-headline">
            <h4 class="md-headline project-name">{{ project.name }}</h4>
            <h5 class="md-subheading project-role" v-if="project.position">{{ project.position }}</h5>
          </div>
          <ul>
            <li :key="highlight" v-for="highlight in project.highlights">
              {{ highlight }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </md-content>
</template>

<script>
export default {
  name: 'Projects',
  store: {
    resume: 'resume'
  },
  data: () => {
    return {
      projects: []
    }
  },
  created: function () {
    this.resume.getWorkAndProjects()
      .then(data => { this.projects = data })
  }
}
</script>

<style lang="scss" scoped>
  .project-section-list {
    padding:0;
    margin: 0;
    list-style-type: none;
  }
  .project-headline {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin: 0 0 1.15rem 0;
  }
  .project-name {
    margin: 0 1ch 0 0;
  }
  .project-role {
    margin: 0 0 0.1rem;
  }
</style>

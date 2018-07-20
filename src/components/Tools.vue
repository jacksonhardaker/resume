<template>
  <md-content class="section md-layout" md-tag="section">
    <h3 class="section-heading md-display-1 md-layout-item md-size-20">tools</h3>
    <div class="md-layout-item section-body">
      <ul class="tools-list">
        <li class="tools-list-item" :key="tool.name" v-for="tool in tools">
          <h4 class="title tools-list-title">{{ tool.name }}</h4>
          <HorizontalList v-bind:list="tool.keywords"/>
        </li>
      </ul>
    </div>
  </md-content>
</template>

<script>
import HorizontalList from './HorizontalList'

export default {
  name: 'Tools',
  store: {
    resume: 'resume'
  },
  components: {
    HorizontalList
  },
  data: () => {
    return {
      tools: []
    }
  },
  created: function () {
    this.resume.getTools()
      .then(data => { this.tools = data })
  }
}
</script>

<style lang="scss" scoped>
  .tools-list {
    padding:0;
    margin: 0;
    list-style-type: none;
  }
  .tools-list-title {
    margin: 0;

    &::after {
      content: '-';
      margin: 0 1ch;
    }
  }
  .tools-list-item {
    display: flex;
    flex-direction: row;
    margin: 1.15rem 0;

    &:first-child {
      margin-top: 0;
    }
  }
</style>

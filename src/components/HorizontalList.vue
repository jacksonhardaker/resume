<template>
    <ul class="horizontal-list">
      <li class="horizontal-list-item" :key="item" v-for="item in $attrs.list">{{ item }}</li>
    </ul>
</template>

<script>
export default {
  name: 'HorizontalList'
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/colors.scss';

  .horizontal-list {
    padding:0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
  }

  .horizontal-list-item {
    &::after {
      display: inline;
      content: ',';
      margin-right: 1ch;
    }

    &:last-child {
      &::after {
        display: none;
        content: '';
      }
    }
  }
</style>

<template>
  <a :href="`mailto:${$attrs.email}`">{{ $attrs.email }}</a>
</template>

<script>
export default {
  name: 'EmailAddress'
}
</script>

<style lang="scss" scoped>

</style>

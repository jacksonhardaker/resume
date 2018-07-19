<template>
  <a :href="`tel:${$attrs.phone}`">{{ $attrs.phone }}</a>
</template>

<script>
export default {
  name: 'PhoneNumber'
}
</script>

<style lang="scss" scoped>

</style>

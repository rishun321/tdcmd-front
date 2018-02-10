<template>
<div>
  my
  <router-view :manager="manager"/>
</div>
</template>

<script>
export default {
  props: ['manager']
}
</script>

<style scoped>

</style>

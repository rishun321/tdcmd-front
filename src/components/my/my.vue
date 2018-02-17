<template>
<div class="app-content-auto-height">
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

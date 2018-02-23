<template>
<div class="app-content-auto-height">
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

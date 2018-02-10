<template>
<div class="page-container">
  <router-view :manager="manager"/>
  <lockScreen :manager="manager"></lockScreen>
  <messageModal :manager="manager"></messageModal>
</div>
</template>

<script>
import lockScreen from '@/components/common/lockScreen'
import messageModal from '@/components/common/messageModal'
export default {
  props: ['manager'],
  components: {
    lockScreen,
    messageModal
  }
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";
@include md-register-theme("default", (
  primary: md-get-palette-color(deeppurple, 400), // The primary color of your application
  accent: md-get-palette-color(red, A200) // The accent or secondary color
));
@import "~vue-material/dist/theme/all";
.page-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.md-select-menu {
  z-index: 10;
}
</style>

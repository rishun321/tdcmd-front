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

@include md-register-theme("green-card", (
  primary: md-get-palette-color(green, 500)
));

@include md-register-theme("black-card", (
  primary: md-get-palette-color(black, 500)
));

@include md-register-theme("purple-card", (
  primary: md-get-palette-color(purple, 500)
));

@include md-register-theme("orange-card", (
  primary: md-get-palette-color(orange, 500)
));

@import "~vue-material/dist/theme/all";
@import "~vue-material/dist/base/theme";
@import "~vue-material/dist/components/MdCard/theme";

.page-container {
  width: 100vw;
  height: 100vh;
}
.md-select-menu {
  z-index: 10;
}
</style>

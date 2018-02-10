<template>
<div class="page-container">
  <router-view :manager="manager"/>
  <lockScreen :manager="manager"></lockScreen>
  <messageDialog :manager="manager"></messageDialog>
</div>
</template>

<script>
import lockScreen from '@/components/common/lockScreen'
import messageDialog from '@/components/common/messageDialog'
export default {
  props: ['manager'],
  components: {
    lockScreen,
    messageDialog
  }
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";
@include md-register-theme("default", (
  primary: md-get-palette-color(deeppurple, 400), // The primary color of your application
  accent: md-get-palette-color(red, A200) // The accent or secondary color
));

@include md-register-theme("pink-card", (
  primary: md-get-palette-color(pink, 500)
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
  position: relative;
}
.md-select-menu {
  z-index: 10;
}
</style>

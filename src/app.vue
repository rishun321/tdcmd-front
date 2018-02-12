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
  primary: md-get-palette-color(deeppurple, 400),
  accent: md-get-palette-color(red, A700)
));
@include md-register-theme("pink", (
  primary: #f1b5c7,
  accent: #e44071
));
@import "~vue-material/dist/theme/all";
@import "~vue-material/dist/base/theme";

.page-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #eee;
}
.md-select-menu {
  z-index: 10;
}
</style>

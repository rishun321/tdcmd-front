<template>
<div class="page-container">
  <router-view :manager="manager"/>
  <lockScreen :manager="manager"/>
  <messageDialog :manager="manager"/>
  <snackBar :manager="manager"/>
</div>
</template>

<script>
import lockScreen from '@/components/common/lockScreen'
import messageDialog from '@/components/common/messageDialog'
import snackBar from '@/components/common/snackBar'
export default {
  props: ['manager'],
  components: {
    lockScreen,
    messageDialog,
    snackBar
  }
}
</script>

<style lang="scss">
@import "~vue-material/dist/theme/engine";
@include md-register-theme("default", (
  primary: #664eae,
  accent: #dc66a0
));
@include md-register-theme("green", (
  primary: #4ea07c,
  accent: #dc66a0
));
@include md-register-theme("yellow", (
  primary: #ebe48b,
  accent: #dc66a0
));
@include md-register-theme("black", (
  primary: #323232,
  accent: #dc66a0
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
.md-table-content {
  max-height: none !important;
}
</style>

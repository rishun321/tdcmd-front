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
@include md-register-theme("warm", (
  primary: #4ea07c,
  accent: #dc66a0
));
@include md-register-theme("light", (
  primary: #ebe48b,
  accent: #dc66a0
));
@include md-register-theme("dark", (
  primary: #323232,
  accent: #dc66a0
));
@import "~vue-material/dist/theme/all";
@import "~vue-material/dist/base/theme";

// @import url('https://fonts.googleapis.com/earlyaccess/notosansjapanese.css');
@import url('https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css');

// common
html, body {
  // font-family: 'Noto Sans Japanese';
  font-family: 'Rounded Mplus 1c';
}
.page-container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.app-content-auto-height {
  width: 100%;
  height: auto;
  padding: 15px;
  overflow: hidden;
}
.app-content-fix-height {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

// dialog selection
.md-select-menu {
  z-index: 10;
}

// contact
.md-table-content {
  max-height: none !important;
}

// chat
@media (max-width: 600px) {
  .md-app-container {
    padding-left: 0px !important;
  }
}
.md-app-content {
  padding: 0px;
  border: none;
}
</style>

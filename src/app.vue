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
  primary: #796e2f,
  accent: md-get-palette-color(red, A200)
));
@include md-register-theme("white", (
  primary: #ffffff,
  accent: #796e2f
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
  // padding: 15px;
  overflow: hidden;
}
.app-content-fix-height {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.md-with-hover {
  cursor: default !important;
}

// button icon
.button-text {
  display: flex;
  justify-content: center;
  align-items: center;
  .md-icon {
    margin-right: 5px;
  }
}

// dialog selection
.md-select-menu {
  z-index: 10;
}

// tabs
.md-tabs-content {
  height: auto !important;
}
</style>

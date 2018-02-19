<template>
<div :class="{'lock-screen-hide': manager.controller.locker === 'unlock', 'lock-screen-show': manager.controller.locker === 'lock'}">
  <div class="load-animation">
    <md-progress-spinner :md-diameter="100" :md-stroke="10" md-mode="indeterminate"></md-progress-spinner>
  </div>
</div>
</template>

<script>
export default {
  props: ['manager']
}
</script>

<style scoped>
.lock-screen-show {
  background-color: rgba(70, 66, 66, 0.45);
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  animation: show .1s linear 0s;
  -webkit-animation: show .1s linear 0s;
}
@-webkit-keyframes show {
  from {opacity: 0;}
  to {opacity: 1;}
}
@keyframes show {
  from {opacity: 0;}
  to {opacity: 1;}
}
.lock-screen-hide {
  display: none;
}
.load-animation {
  position: fixed;
  top: calc(50% - 120px);
  left: calc(50% - 120px);
  padding: 10px;
  width: 120px;
  height: 120px;
}
</style>

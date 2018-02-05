<template>
<div :class="{'lock-screen-hide': manager.controller.locker === 'unlock', 'lock-screen-show': manager.controller.locker === 'lock'}">
  <div class="load-animation">
    <div class="bar bar1"></div>
    <div class="bar bar2"></div>
    <div class="bar bar3"></div>
    <div class="bar bar4"></div>
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

/* loading animation */
.load-animation {
  position: fixed;
  top: calc(50% - 20px);
  left: calc(50% - 25px);
  padding: 27px 0 25px;
  width: 80px;
  text-align: center;
  background: #555299;
}
.load-animation div {
  display: inline-block;
  margin: 0 2px;
  width: 7px;
  height: 20px;
  background-color: #fff;
  -webkit-animation: animation5-bar 1s infinite;
  animation: animation5-bar 1s infinite;
}

.load-animation .bar1 {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.load-animation .bar2 {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.load-animation .bar3 {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.load-animation .bar4 {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}

@keyframes animation5-bar {
  20% { transform: scaleY(2); }
}
</style>

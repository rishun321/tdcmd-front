<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - カレンダー"/>
  <div class="cover">
    <img src="/static/cover1.jpg">
  </div>

  <md-content>
    <!-- <iframe class="google-calendar" src="https://calendar.google.com/calendar/embed?src=m61elhohn1s4n613kgseekgo7o%40group.calendar.google.com&ctz=Asia%2FTokyo" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe> -->
    <iframe class="google-calendar" src="https://calendar.google.com/calendar/embed?src=e69227usonlkiim5hkr3o777pg%40group.calendar.google.com&ctz=Asia%2FTokyo" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
  </md-content>
</div>
</template>

<script>
// import utils from '@/tool/utils.js'
export default {
  props: ['manager']
}
</script>

<style scoped lang="scss">
.cover {
  width: 100%;
  height: auto;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
}

.google-calendar {
  height: 80vw;
  max-height: 600px;
}
</style>

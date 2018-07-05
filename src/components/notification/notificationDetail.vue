<template>
<div class="app-content-auto-height contents" v-if="manager.notificationService.notification">
  <vue-headful title="サンダーコマンドス - お知らせ"/>
  <p class="md-display-1 content-title">{{manager.notificationService.notification.title}}</p>
  <p class="md-caption content-date">{{manager.notificationService.notification.udateText}}</p>
  <div class="content-frame" v-html="manager.notificationService.notification.content">
  </div>
</div>
</template>

<script>
// import utils from '@/tool/utils.js'
// import manager from '@/store/manager.js'
export default {
  props: ['manager']
}
</script>

<style scoped lang="scss">
.contents {
  padding: 16px;
}
.content-title {
  text-align: center;
}
.content-date {
  text-align: right;
  font-size: 20px;
}
.content-frame {
  width: 100%;
}
</style>

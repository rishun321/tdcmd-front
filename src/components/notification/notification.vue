<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - お知らせ"/>
  <div class="cover">
    <img src="/static/cover1.jpg">
  </div>

  <p class="md-display-1 content-title">お知らせ</p>
  <div class="contents">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="notification in manager.notificationService.notifications" :key="notification._id">
        <notificationCard :manager="manager" :notification="notification"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
import manager from '@/store/manager.js'
import notificationCard from '@/components/shared/notificationCard'
export default {
  props: ['manager'],
  components: {
    notificationCard
  },
  data: () => ({
    isProcessing: false
  }),
  mounted () {
    const that = this
    that.isProcessing = false
    utils.event.$on('SCROLL_ON_BOTTOM', () => {
      if (manager.notificationService.notifications.length < manager.notificationService.count && !that.isProcessing) {
        that.isProcessing = true
        manager.notificationService.moreNotifications(() => {
          that.$nextTick(() => {
            that.isProcessing = false
          })
        })
      }
    })
    utils.event.$emit('SCROLL_TO_TOP')
  },
  beforeDestroy () {
    utils.event.$off('SCROLL_ON_BOTTOM')
  }
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
.content-title {
  text-align: center;
}
.contents {
  padding: 16px;
}
</style>

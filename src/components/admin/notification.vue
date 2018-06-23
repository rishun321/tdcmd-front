<template>
<div class="contents">
  <md-button class="md-icon-button md-raised md-primary add-button" to="/admin/notification/new"><md-icon>add</md-icon></md-button>

  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="notification in manager.notificationService.notifications" :key="notification._id">
      <notificationCard :manager="manager" :notification="notification"/>
    </div>
  </div>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
import manager from '@/store/manager.js'
import notificationCard from '@/components/shared/myNotificationCard'
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
.contents {
  padding: 16px;
}
.add-button {
  position: absolute;
  top: 92px;
  right: 16px;
}
</style>

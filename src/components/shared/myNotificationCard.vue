<template>
<md-card md-with-hover>
  <md-card-media>
    <img class="trim-picture" :src="notification.cover" v-if="notification.cover">
    <img class="trim-picture" src="@/assets/noimage.png" v-else>
  </md-card-media>
  <md-card-header>
    <div class="md-title">{{notification.title}}</div>
    <div class="md-subhead">{{notification.udateText}}</div>
  </md-card-header>
  <md-card-actions>
    <md-button class="md-primary" @click="deleteNotification(notification)">削除</md-button>
    <md-button class="md-primary" :to="'/admin/notification/' + notification.id">編集</md-button>
    <md-button class="md-primary" :to="'/notification/' + notification.id">詳細</md-button>
  </md-card-actions>
</md-card>
</template>

<script>
import utils from '@/tool/utils.js'
import manager from '@/store/manager.js'
export default {
  props: ['manager', 'notification'],
  methods: {
    deleteNotification (notification) {
      if (notification.id) {
        utils.event.$emit('SHOW_MESSAGE', {code: 'I004'}, () => {
          manager.notificationService.deleteNotification({_id: notification.id}, () => {
            manager.notificationService.loadNotifications(null, null, () => {
              utils.event.$emit('SCROLL_TO_TOP')
            })
          })
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.md-card {
  margin: 0;
  margin-bottom: 20px;
}
.trim-picture {
  height: 250px;
  object-fit: cover;
}
</style>

<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - 管理"/>
  <div class="actions">
    <md-button class="md-primary md-raised action-button" @click="logout()">
      ログアウト
    </md-button>
    <md-button class="md-primary md-raised action-button" to="/admin/notification">
      お知らせ
    </md-button>
    <md-button class="md-primary md-raised action-button" to="/admin/photo">
      写真
    </md-button>
  </div>
  <router-view :manager="manager"/>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  methods: {
    logout () {
      utils.restGet('/logout').then(
        response => {
          if (response) {
            location.href = location.protocol + '//' + location.host + '/'
          }
        }
      )
    }
  }
}
</script>

<style scoped lang="scss">
.actions {
  padding: 20px;
  .action-button {
    width: 100px;
  }
}
</style>

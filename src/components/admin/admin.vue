<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - 管理"/>
  <md-button class="md-primary md-raised action-button" @click="signout()">
    <div class="icon-text">
      <md-icon>power_settings_new</md-icon><p>ログアウト</p>
    </div>
  </md-button>
  <md-button class="md-primary md-raised action-button" to="/article">
    <div class="icon-text">
      <md-icon>add</md-icon><p>投稿</p>
    </div>
  </md-button>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  methods: {
    signout () {
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

</style>

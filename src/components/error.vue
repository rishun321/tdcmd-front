<template>
<md-empty-state class="md-primary" md-icon="highlight_off" md-label="認証が失敗しました" md-description="">
  <div class="error-content">
    再度<router-link to="/signin">ログイン</router-link>してみてください。
  </div>
  <div class="">
    エラーが解消されない場合は、システム管理者へご連絡くださいませ。
  </div>
</md-empty-state>
</template>

<script>
import manager from '@/store/manager.js'
export default {
  props: ['manager'],
  created () {
    manager.logout()
  }
}
</script>

<style scoped>
.error-content {
  margin: 20px;
}
</style>

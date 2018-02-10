<template>
<md-empty-state
  class="md-accent"
  md-icon="highlight_off"
  md-label="認証が失敗しました"
  md-description="">
  <div class="error-content">
    <p>
      再度<router-link to="/">ブドウさんにログイン</router-link>してみてください。
    </p>
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

</style>

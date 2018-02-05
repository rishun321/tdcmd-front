<template>
<div class="wrapper">
  <vue-headful title="ブドウさん"/>
  <div class="fullscreen">
    <div class="error-page">
      <h2 class="headline text-red">401</h2>
      <div class="error-content">
        <h3><i class="fa fa-warning text-red"></i> 認証が失敗しました！</h3>
        <p>
          アカウント情報が消えています。再度<router-link to="/">ブドウさん</router-link>にログインしてみてください。
        </p>
      </div>
    </div>
  </div>
</div>
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
.fullscreen {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px;
}
</style>

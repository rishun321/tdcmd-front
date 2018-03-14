<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - 記事管理"/>
  <div class="cover">
    <img src="static/cover1.jpg">
  </div>

  <md-content>
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
  height: 400px;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

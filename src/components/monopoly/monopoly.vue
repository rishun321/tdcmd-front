<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - 貸切"/>
  <div class="cover">
    <img src="/static/cover1.jpg">
  </div>

  <div class="contents">
    <p class="md-display-1 content-title">フィールド貸切</p>
    <p>チームの交流戦や親睦会、リーグ戦ゲーム、コスプレ撮影イベント、ショップのイベントなど、フィールドを自由にご利用いただけます。</p>
    <p>※空き状況はカレンダーをご確認ください。</p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
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

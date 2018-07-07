<template>
<div class="app-content-auto-height contents" v-if="manager.photoService.photo">
  <vue-headful title="サンダーコマンドス - お知らせ"/>
  <p class="md-display-1 content-title">{{manager.photoService.photo.title}}</p>
  <p class="md-caption content-date">{{manager.photoService.photo.udateText}}</p>
  <div class="content-frame">
    <div class="html-content" v-html="manager.photoService.photo.content">
    </div>
  </div>
</div>
</template>

<script>
// import utils from '@/tool/utils.js'
// import manager from '@/store/manager.js'
export default {
  props: ['manager']
}
</script>

<style scoped lang="scss">
.contents {
  padding: 16px;
}
.content-title {
  text-align: center;
}
.content-date {
  text-align: right;
  font-size: 20px;
  margin: 40px;
}
.content-frame {
  width: 100%;
  display: flex;
  justify-content: center;
  .html-content {
    width: 100%;
    max-width: 1000px;
    padding: 20px;
    border: 10px solid #e8e8e8;
    border-radius: 5px;
  }
  margin-bottom: 100px;
}
</style>

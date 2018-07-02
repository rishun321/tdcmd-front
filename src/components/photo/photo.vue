<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - お知らせ"/>
  <div class="cover">
    <img src="/static/cover03.jpg">
  </div>

  <p class="md-display-1 content-title">写真</p>
  <div class="contents">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="photo in manager.photoService.photos" :key="photo._id">
        <photoCard :manager="manager" :photo="photo"/>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
import manager from '@/store/manager.js'
import photoCard from '@/components/shared/photoCard'
export default {
  props: ['manager'],
  components: {
    photoCard
  },
  data: () => ({
    isProcessing: false
  }),
  mounted () {
    const that = this
    that.isProcessing = false
    utils.event.$on('SCROLL_ON_BOTTOM', () => {
      if (manager.photoService.photos.length < manager.photoService.count && !that.isProcessing) {
        that.isProcessing = true
        manager.photoService.morePhotos(() => {
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

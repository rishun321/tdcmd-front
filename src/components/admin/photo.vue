<template>
<div class="contents">
  <md-button class="md-icon-button md-raised md-primary add-button" to="/admin/photo/new"><md-icon>add</md-icon></md-button>

  <div class="md-layout md-gutter">
    <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="photo in manager.photoService.photos" :key="photo._id">
      <photoCard :manager="manager" :photo="photo"/>
    </div>
  </div>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
import manager from '@/store/manager.js'
import photoCard from '@/components/shared/myPhotoCard'
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
.contents {
  padding: 16px;
}
.add-button {
  position: absolute;
  top: 92px;
  right: 16px;
}
</style>

<template>
<md-dialog :md-active.sync="showDialog">
  <div class="close-button">
    <md-button class="md-icon-button md-accent" @click="showDialog = false">
      <md-icon>close</md-icon>
    </md-button>
  </div>
  <md-content class="viewer-contaner">
    <photoViewer :manager="manager" :photos="photos"/>
  </md-content>
</md-dialog>
</template>

<script>
import photoViewer from '@/components/common/photoViewer'
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  components: {
    photoViewer
  },
  data: () => ({
    showDialog: false,
    photos: null
  }),
  mounted () {
    const that = this
    utils.event.$on('SHOW_PHOTOVIEWER', (photos) => {
      if (photos && photos.length > 0) {
        that.photos = photos
        that.$nextTick(() => {
          that.showDialog = true
        })
      }
    })
  },
  beforeDestroy () {
    utils.event.$off('SHOW_PHOTOVIEWER')
  }
}
</script>

<style scoped lang="scss">
.md-dialog {
  width: 100%;
  height: 100%;
}
.close-button {
  position: absolute;
  top: 3px;
  right: -3px;
}
.viewer-contaner {
  width: 100%;
  height: 100%;
}
</style>

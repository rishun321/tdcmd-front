<template>
<md-dialog :md-active.sync="showRequestDialog" v-if="request">
  <md-dialog-title>物件情報</md-dialog-title>

  <md-tabs md-dynamic-height>
    <md-tab md-label="物件詳細">
      <p>{{request.name}}</p>
      <p>{{request.text}}</p>
    </md-tab>

    <md-tab md-label="物件写真">
      <img src="../../../../static/sample1.jpg" alt="People">
    </md-tab>

    <md-tab md-label="業者情報">
      <img src="../../../../static/user.jpg" alt="People">
    </md-tab>
  </md-tabs>

  <md-dialog-actions>
    <md-button class="md-primary" @click="showRequestDialog = false">閉じる</md-button>
  </md-dialog-actions>
</md-dialog>
</template>

<script>
import utils from '@/tool/utils.js'
export default {
  data: () => ({
    showRequestDialog: false,
    request: null
  }),
  created () {
    let self = this
    utils.event.$on('SHOW_REQUEST_DIALOG_BUY', request => {
      self.request = request
      self.showRequestDialog = true
    })
  },
  beforeDestroy () {
    utils.event.$off('SHOW_REQUEST_DIALOG_BUY')
  }
}
</script>

<style lang="scss" scoped>

</style>

<template>
<md-dialog :md-active.sync="showPieceDialog" v-if="piece">
  <md-dialog-title>物件情報</md-dialog-title>

  <md-tabs md-dynamic-height>
    <md-tab md-label="物件詳細">
      <p>{{piece.name}}</p>
      <p>{{piece.text}}</p>
    </md-tab>

    <md-tab md-label="物件写真">
      <img src="../../../static/sample1.jpg">
    </md-tab>

    <md-tab md-label="業者情報">
      <img src="../../../static/user.jpg">
    </md-tab>
  </md-tabs>

  <md-dialog-actions>
    <md-button class="md-primary" @click="showPieceDialog = false">閉じる</md-button>
  </md-dialog-actions>
</md-dialog>
</template>

<script>
import utils from '@/tool/utils.js'
export default {
  data: () => ({
    showPieceDialog: false,
    piece: null
  }),
  created () {
    let self = this
    utils.event.$on('SHOW_PIECE_DIALOG_BUY', piece => {
      self.piece = piece
      self.showPieceDialog = true
    })
  },
  beforeDestroy () {
    utils.event.$off('SHOW_PIECE_DIALOG_BUY')
  }
}
</script>

<style lang="scss" scoped>

</style>

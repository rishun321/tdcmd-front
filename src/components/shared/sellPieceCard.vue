<template>
  <md-card md-with-hover @click.native="showPieceDetail(piece)">
    <md-ripple>
        <md-card-header>
          <md-avatar>
            <img src="../../../static/user.jpg" alt="Avatar">
          </md-avatar>

          <div class="md-title">住友不動産株式会社</div>
          <div class="md-subhead">売買担当：{{piece.name}}</div>
        </md-card-header>

        <md-card-media>
          <img src="../../../static/sample1.jpg" alt="People">
        </md-card-media>

        <md-card-content>
          {{piece.text}}
        </md-card-content>

        <md-card-actions>
          <md-button @click.stop="contact(piece)">連絡</md-button>
          <md-button>詳細</md-button>
          <md-button @click.stop="preview(piece)">内覧</md-button>
        </md-card-actions>
    </md-ripple>
  </md-card>
</template>

<script>
import utils from '@/tool/utils.js'
export default {
  props: ['manager', 'piece'],
  methods: {
    contact (piece) {
      this.$router.push({name: 'chat'})
    },
    showPieceDetail (piece) {
      utils.event.$emit('SHOW_PIECE_DIALOG_BUY', piece)
    },
    preview (piece) {
      this.$router.push({path: '/preview/' + piece.preview})
    }
  }
}
</script>

<style scoped>
.md-card {
  margin: 0px;
}
.md-title {
  opacity: 0.7;
  font-size: 12px;
}
.md-subhead {
  font-size: 12px;
  opacity: 1;
  color: #111;
}
</style>

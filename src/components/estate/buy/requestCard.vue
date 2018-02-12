<template>
  <md-card md-with-hover @click.native="showRequestDetail(request)">
    <md-ripple>
        <md-card-header>
          <md-avatar>
            <img src="../../../../static/user.jpg" alt="Avatar">
          </md-avatar>

          <div class="md-title">住友不動産株式会社</div>
          <div class="md-subhead">売買担当：五十嵐</div>
        </md-card-header>

        <md-card-media>
          <img src="../../../../static/sample1.jpg" alt="People">
        </md-card-media>

        <md-card-content>
          亀戸富士マンション,ＪＲ総武線 / 亀戸駅 徒歩10分、4階、南向き、２５００万、専有面積、25.51m²
        </md-card-content>

        <md-card-actions>
          <md-button @click.stop="contact(request)">連絡</md-button>
          <md-button>詳細</md-button>
        </md-card-actions>
    </md-ripple>
  </md-card>
</template>

<script>
import utils from '@/tool/utils.js'
export default {
  props: ['manager', 'request'],
  methods: {
    contact (request) {
      this.$router.push({name: 'chat'})
    },
    showRequestDetail (request) {
      utils.event.$emit('SHOW_REQUEST_DIALOG_BUY', request)
    }
  }
}
</script>

<style scoped>
.md-title {
  opacity: 0.7;
  font-size: 12px;
}
.md-subhead {
  font-size: 12px;
  opacity: 1;
  color: #111;
  display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
</style>

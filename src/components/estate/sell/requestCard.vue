<template>
<md-card class="md-primary" md-theme="yellow" md-with-hover @click.native="showRequestDetail(request)">
  <md-ripple>
    <md-card-header>
      <md-avatar>
        <img src="../../../../static/user.jpg" alt="Avatar">
      </md-avatar>
      <div class="md-title">住友不動産株式会社</div>
      <div class="md-subhead">売買担当：{{request.user}}</div>
    </md-card-header>

    <md-card-content>
      {{request.houseComment}}
    </md-card-content>

    <md-card-actions>
      <md-button @click.stop="contact(request)">連絡</md-button>
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
      utils.event.$emit('SHOW_REQUEST_DIALOG_SELL', request)
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
.md-card-content {
  height: 60px;
}
</style>

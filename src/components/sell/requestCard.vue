<template>
<md-card md-with-hover @click.native="showRequestDetail(request)">
  <md-ripple>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{request.name}}</div>
        <div class="md-subhead">{{request.text}}</div>
      </md-card-header-text>

      <md-card-media md-medium>
        <img src="../../../static/user.jpg" alt="People">
      </md-card-media>
    </md-card-header>

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
      utils.event.$emit('SHOW_REQUEST_DIALOG', request)
    }
  }
}
</script>

<style scoped>
.md-title {
  font-size: 12px;
}
.md-subhead {
  font-size: 12px;
  color: #111;
}
</style>

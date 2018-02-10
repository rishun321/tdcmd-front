<template>
<md-card class="md-primary" md-theme="purple-card" md-with-hover @click.native="showRequestDetail(request)">
  <md-ripple>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{contact.name}}</div>
        <div class="md-subhead">{{contact.text}}</div>
      </md-card-header-text>

      <md-card-media md-medium>
        <img src="../../../static/user.jpg" alt="People">
      </md-card-media>
    </md-card-header>
  </md-ripple>
</md-card>
</template>

<script>
// import utils from '@/tool/utils.js'
export default {
  props: ['manager', 'contact'],
  methods: {
    // contact (contact) {
    //   this.$router.push({name: 'chat'})
    // },
    // showRequestDetail (contact) {
    //   utils.event.$emit('SHOW_REQUEST_DIALOG', contact)
    // }
  }
}
</script>

<style scoped>

</style>

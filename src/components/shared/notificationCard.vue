<template>
<md-card md-with-hover>
  <md-card-media>
    <img class="trim-picture" :src="notification.cover">
  </md-card-media>
  <md-card-header>
    <div class="md-title">{{notification.title}}</div>
    <div class="md-subhead">{{notification.udateText}}</div>
  </md-card-header>
  <md-card-actions>
    <md-button class="md-primary">詳細</md-button>
  </md-card-actions>
</md-card>
</template>

<script>
// import utils from '@/tool/utils.js'
export default {
  props: ['manager', 'notification']
}
</script>

<style lang="scss" scoped>
.md-card {
  margin: 0;
  margin-bottom: 20px;
}
.trim-picture {
  height: 250px;
  object-fit: cover;
}
</style>

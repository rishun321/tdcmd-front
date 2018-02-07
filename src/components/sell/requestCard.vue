<template>
<md-card md-with-hover>
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
      <md-button>連絡</md-button>
      <md-button>詳細</md-button>
    </md-card-actions>
  </md-ripple>
</md-card>
</template>

<script>
export default {
  props: ['manager', 'request']
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

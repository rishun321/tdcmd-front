<template>
<div>
  estate
  <div class="md-layout md-gutter">
    <div class="md-layout-item subclassify"><md-button class="md-raised" md-theme="pink-card">買う</md-button></div>
    <div class="md-layout-item subclassify"><md-button class="md-raised" md-theme="pink-card">売る</md-button></div>
    <div class="md-layout-item subclassify"><md-button class="md-raised" md-theme="pink-card">貸す</md-button></div>
    <div class="md-layout-item subclassify"><md-button class="md-raised" md-theme="pink-card">借り</md-button></div>
  </div>
  <router-view :manager="manager"/>
</div>
</template>

<script>
export default {
  props: ['manager'],
  methods: {
    rep () {
      this.$router.push({name: 'sell'})
    }
  }
}
</script>

<style scoped>
.subclassify{
  margin: 10px 10px;
  height: 40px;
}
.md-button{
  width: 100%;
  height: 100%;
}
</style>

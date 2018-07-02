<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - フィールド"/>
  <div class="cover">
    <img src="/static/cover.jpg">
  </div>

  <div class="cover">
    <img class="map-pic" src="/static/field.jpg">
  </div>

  <md-content class="content-block">
    <div class="md-display-1 tdcmd-header">フィールド紹介</div>
  </md-content>

  <md-content>
    <md-tabs class="md-primary">
      <md-tab md-label="Aフィールド">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-20 md-medium-size-25 md-small-size-33 md-xsmall-size-50" v-for="i in 16" :key="i">
            <img class="demo-picture" :src="'static/A/' + i + '.JPG'">
          </div>
        </div>
      </md-tab>

      <md-tab md-label="Bフィールド">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-20 md-medium-size-25 md-small-size-33 md-xsmall-size-50" v-for="i in 16" :key="i">
            <img class="demo-picture" :src="'static/B/' + i + '.JPG'">
          </div>
        </div>
      </md-tab>
    </md-tabs>
  </md-content>
</div>
</template>

<script>
// import utils from '@/tool/utils.js'
export default {
  props: ['manager']
}
</script>

<style scoped lang="scss">
.cover {
  width: 100%;
  height: auto;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
  .map-pic {
    width: auto;
    max-height: 700px;
    height: 100%;
    margin: 20px 0;
  }
}
.content-block {
  margin-top: 30px;
  padding: 20px;
}
.tdcmd-header {
  width: 100%;
  text-align: center;
}
.tdcmd-sub-header {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.demo-picture {
  margin-bottom: 20px;
}
</style>

<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - フィールド"/>
  <div class="cover">
    <img src="/static/field.png">
  </div>

  <md-content class="content-block">
    <div class="md-display-1 tdcmd-header">フィールド紹介</div>
  </md-content>

  <md-content>
    <md-tabs class="md-primary">
      <md-tab md-label="軍営">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-20 md-medium-size-25 md-small-size-33 md-xsmall-size-50" v-for="i in 10" :key="i">
            <img class="demo-picture" :src="'static/camp/' + i + '.JPG'">
          </div>
        </div>
        <p>フィールド紹介文章をここに1111</p>
      </md-tab>

      <md-tab md-label="高台">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-20 md-medium-size-25 md-small-size-33 md-xsmall-size-50" v-for="i in 10" :key="i">
            <img class="demo-picture" :src="'static/highground/' + i + '.JPG'">
          </div>
        </div>
      </md-tab>

      <md-tab md-label="森林">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-20 md-medium-size-25 md-small-size-33 md-xsmall-size-50" v-for="i in 10" :key="i">
            <img class="demo-picture" :src="'static/forest/' + i + '.JPG'">
          </div>
        </div>
      </md-tab>

      <md-tab md-label="倉庫">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-20 md-medium-size-25 md-small-size-33 md-xsmall-size-50" v-for="i in 10" :key="i">
            <img class="demo-picture" :src="'static/warehouse/' + i + '.JPG'">
          </div>
        </div>
      </md-tab>

      <md-tab md-label="村落">
        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-20 md-medium-size-25 md-small-size-33 md-xsmall-size-50" v-for="i in 10" :key="i">
            <img class="demo-picture" :src="'static/village/' + i + '.JPG'">
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

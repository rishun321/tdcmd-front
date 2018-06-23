<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - アクセス"/>
  <div class="cover">
    <img src="/static/cover1.jpg">
  </div>

  <md-content class="content-block">
    <div class="md-display-1 tdcmd-header">アクセス</div>
  </md-content>

  <md-content class="content-block">
    <div class="md-headline tdcmd-header"><md-icon class="md-primary">directions_subway</md-icon>公共交通機関でお越しの方</div>
  </md-content>
  <div class="md-layout content-block">
    <div class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="(route, i) in routes" :key="route.start">
      <md-card class="access-block">
        <md-content class="md-primary access-start">
          {{route.start}}
        </md-content>
        <template  v-for="(line, j) in route.lines">
          <md-content class="access md-elevation-2" :key="line.name + i + '-' + j">
            <md-icon class="md-primary" v-if="line.name.indexOf('車') >= 0">directions_car</md-icon>
            <md-icon class="md-primary" v-else-if="line.name.indexOf('徒歩') >= 0">directions_run</md-icon>
            <md-icon class="md-primary" v-else-if="line.name.indexOf('バス') >= 0">directions_bus</md-icon>
            <md-icon class="md-primary" v-else>directions_railway</md-icon>
            {{line.name}}
          </md-content>
          <div class="vertical-line" :key="'up' + i + '-' + j"></div>
          <md-content class="md-accent access md-elevation-2" :key="line.station + i + '-' + j">
            {{line.station}}
          </md-content>
          <div class="vertical-line" :key="'down' + i + '-' + j" v-if="line.station !== 'サンダーコマンドス'"></div>
        </template>
      </md-card>
    </div>
  </div>
  <p class="md-subheading info">※サンダーコマンドスは「袖ケ浦バスターミナル」バス停、JR袖ヶ浦駅（南口）、JR姉ヶ崎駅（東口）にて、無料送迎車を用意しております。また、蒲田、川崎、品川、秋葉原、市川の有料送迎車を派遣することもできます。送迎車のご予約は、<router-link to="/reserve">「予約」フォーム</router-link>にてお問合わせください。</p>

  <md-content class="content-block">
    <div class="md-headline tdcmd-header"><md-icon class="md-primary">directions_car</md-icon>車でお越しの方</div>
  </md-content>
  <p class="md-subheading info">アドレス：〒299-0231 千葉県袖ケ浦市上泉字下鎌田1135−1</p>
  <p class="md-subheading info">経緯：35.416565, 140.042137</p>
  <div style="position: relative;">
    <googleMap class="gmap animate" :manager="manager" :config="position"></googleMap>
  </div>
</div>
</template>

<script>
// import utils from '@/tool/utils.js'
import googleMap from '@/components/common/googleMap'
export default {
  props: ['manager'],
  components: {
    googleMap
  },
  data: () => ({
    routes: [
      {start: '姉ヶ崎駅発', lines: [{name: 'JR内房線、総武線、京葉線', station: '姉ヶ崎駅'}, {name: '「茅野」行バス', station: '「滝ケ沢団地」バス停'}, {name: '徒歩1分', station: 'サンダーコマンドス'}]},
      {start: '東京駅発', lines: [{name: 'JR総武線、京葉線', station: '姉ヶ崎駅'}, {name: '「茅野」行バス', station: '「滝ケ沢団地」バス停'}, {name: '徒歩1分', station: 'サンダーコマンドス'}]},
      {start: '千葉駅発', lines: [{name: 'JR総武線、京葉線', station: '千葉駅'}, {name: '「亀田病院」行バス', station: '「滝ケ沢団地」バス停'}, {name: '徒歩1分', station: 'サンダーコマンドス'}]},
      {start: '姉ヶ崎駅発(送迎車予約)', lines: [{name: 'JR内房線、総武線、京葉線', station: '姉ヶ崎駅（東口）'}, {name: '送迎車', station: 'サンダーコマンドス'}]},
      {start: '東京駅発(送迎車予約)', lines: [{name: 'JR総武線、京葉線', station: '姉ヶ崎駅（東口）'}, {name: '送迎車', station: 'サンダーコマンドス'}]},
      {start: '品川駅東口発(送迎車予約)', lines: [{name: '「木更津駅東口」行バス', station: '「袖ケ浦バスターミナル」バス停'}, {name: '送迎車', station: 'サンダーコマンドス'}]},
      {start: '横浜駅東口発(送迎車予約)', lines: [{name: '「木更津駅東口」行バス', station: '「袖ケ浦バスターミナル」バス停'}, {name: '送迎車', station: 'サンダーコマンドス'}]},
      {start: '川崎駅東口発(送迎車予約)', lines: [{name: '「木更津駅東口」行バス', station: '「袖ケ浦バスターミナル」バス停'}, {name: '送迎車', station: 'サンダーコマンドス'}]}
    ],
    position: {latitude: 35.416565, longitude: 140.042137}
  })
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
  display: flex;
  justify-content: center;
  align-items: center;
  .md-icon {
    margin: 0 8px 0 0;
  }
}
.tdcmd-sub-header {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.md-layout-item {
  margin-bottom: 30px;
}
.access-block {
  padding: 20px;
  height: 100%;
}
.access-start {
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 3px;
}
.access {
  margin: 0 20px;
  padding: 10px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  .md-icon {
    margin: 0 5px 0 0;
  }
}
.vertical-line {
  width: 50%;
  height: 15px;
  margin: 8px 0;
  border-right: 1px solid #aaa;
}
.info {
  margin: 0;
  padding: 0 20px;
}
.gmap {
  width: 100%;
  height: 400px
}
</style>

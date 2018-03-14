<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - アクセス"/>

  <md-content>
    <div class="md-display-1 home-header">アクセス</div>
  </md-content>

  <md-content>
    <div class="md-headline home-header"><md-icon class="md-primary">directions_subway</md-icon>公共交通機関でお越しの方</div>
  </md-content>
  <md-content>
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-25" v-for="route in routes" :key="route.start">
        <md-content class="md-primary">
          {{route.start}}
        </md-content>
      </div>
    </div>
  </md-content>

  <md-content>
    <div class="md-headline home-header"><md-icon class="md-primary">directions_car</md-icon>車でお越しの方</div>
  </md-content>
  <md-content class="pic-container">
    <img src="static/map.png">
  </md-content>
</div>
</template>

<script>
// import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  data: () => ({
    routes: [
      {start: '姉ヶ崎駅発', lines: [{name: 'JR内房線、総武線、京葉線', station: '姉ヶ崎駅'}, {name: '「茅野」行バス', station: '「滝ケ沢団地」バス停'}, {name: '徒歩1分', station: 'サンダーコマンドス'}]},
      {start: '東京駅発', lines: [{name: '総武線、京葉線', station: '姉ヶ崎駅'}, {name: '「茅野」行バス', station: '「滝ケ沢団地」バス停'}, {name: '徒歩1分', station: 'サンダーコマンドス'}]},
      {start: '千葉駅発', lines: [{name: '総武線、京葉線', station: '千葉駅'}, {name: '「亀田病院」行バス', station: '「滝ケ沢団地」バス停'}, {name: '徒歩1分', station: 'サンダーコマンドス'}]},
      {start: '姉ヶ崎駅発(送迎車予約)', lines: [{name: 'JR内房線、総武線、京葉線', station: '姉ヶ崎駅（東口）'}, {name: '送迎車', station: 'サンダーコマンドス'}]},
      {start: '東京駅発(送迎車予約)', lines: [{name: '総武線、京葉線', station: '姉ヶ崎駅（東口）'}, {name: '送迎車', station: 'サンダーコマンドス'}]},
      {start: '品川駅東口発(送迎車予約)', lines: [{name: '「木更津駅東口」行バス', station: '「袖ケ浦バスターミナル」バス停'}, {name: '送迎車', station: 'サンダーコマンドス'}]},
      {start: '横浜駅東口発(送迎車予約)', lines: [{name: '「木更津駅東口」行バス', station: '「袖ケ浦バスターミナル」バス停'}, {name: '送迎車', station: 'サンダーコマンドス'}]},
      {start: '川崎駅東口発(送迎車予約)', lines: [{name: '「木更津駅東口」行バス', station: '「袖ケ浦バスターミナル」バス停'}, {name: '送迎車', station: 'サンダーコマンドス'}]}
    ]
  })
}
</script>

<style scoped lang="scss">
.md-content {
  margin-top: 30px;
  padding: 20px;
}
.home-header {
  width: 100%;
  text-align: center;
}
.home-sub-header {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.pic-container {
  display: flex;
  justify-content: center;
}
.home-header {
  display: flex;
  justify-content: center;
  align-items: center;
  .md-icon {
    margin: 0 8px 0 0;
  }
}
</style>

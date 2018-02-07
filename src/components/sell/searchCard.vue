<template>
<md-card>
  <md-card-header>
    <div class="md-title">需要を探す</div>
  </md-card-header>

  <md-card-content>
    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label for="stations">最寄り駅</label>
          <md-select v-model="stations" name="stations" id="stations" multiple>
            <md-option value="1">東京</md-option>
            <md-option value="2">銀座</md-option>
            <md-option value="3">新宿</md-option>
            <md-option value="4">渋谷</md-option>
            <md-option value="5">横浜</md-option>
            <md-option value="6">亀戸</md-option>
            <md-option value="7">船橋</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>徒歩時間（分間）</label>
          <md-input v-model="minute" type="number"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label for="layout">間取り</label>
          <md-select v-model="layout" name="layout" id="layout">
            <md-option value="0">1R</md-option>
            <md-option value="1">1DK</md-option>
            <md-option value="2">2DK</md-option>
            <md-option value="3">2LDK</md-option>
            <md-option value="4">3DK</md-option>
            <md-option value="5">3LDK</md-option>
            <md-option value="6">4DK以上</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-medium-size-25 md-small-size-50 md-xsmall-size-100">
        <label>金額{{percent * amount}}万円以下</label>
        <input id="amount" type="range" v-model.number="percent">
      </div>
    </div>
  </md-card-content>

  <md-card-actions>
    <md-switch v-model="isLatest" class="give-space">直近のみ</md-switch>
    <md-button class="md-raised md-primary">検索</md-button>
  </md-card-actions>
</md-card>
</template>

<script>
export default {
  props: ['manager'],
  data: () => ({
    stations: [],
    minute: 0,
    layout: null,
    percent: 0,
    amount: 500,
    isLatest: true
  })
}
</script>

<style scoped>
.give-space {
  margin-right: 50px;
}
</style>

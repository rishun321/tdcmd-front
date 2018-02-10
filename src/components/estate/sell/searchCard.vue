<template>
<md-card>
  <md-card-header>
    <div class="md-title">お客様を探す</div>
  </md-card-header>

  <md-card-content>
    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>最寄り駅</label>
          <md-select v-model="stations" multiple>
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
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field :class="{'md-invalid': !isMinuteValid}">
          <label>徒歩時間</label>
          <md-input v-model="minute" type="number"></md-input>
          <span class="md-error">1以上の整数を入力してください。</span>
          <span class="md-helper-text">駅から物件までの徒歩時間（分）</span>
        </md-field>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>間取り</label>
          <md-select v-model="layout">
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
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <label>金額{{percent * amount}}万円以下</label>
        <input type="range" v-model.number="percent">
      </div>
    </div>
  </md-card-content>

  <md-card-actions>
    <md-button class="md-raised md-accent give-space" @click="showPublishDetail()">物件公開</md-button>
    <md-switch v-model="isLatest" class="give-space">直近のみ</md-switch>
    <md-button class="md-raised md-primary">検索</md-button>
  </md-card-actions>
</md-card>
</template>

<script>
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  data: () => ({
    stations: [],
    minute: null,
    layout: null,
    percent: 16,
    amount: 500,
    isLatest: true
  }),
  methods: {
    showPublishDetail () {
      utils.event.$emit('SHOW_PUBLISH_DIALOG')
    }
  },
  computed: {
    isMinuteValid () {
      if (this.minute === null || this.minute === '') return true
      if (parseFloat(this.minute) <= 0) return false
      if (Math.round(parseFloat(this.minute)) === parseFloat(this.minute)) return true
      return false
    }
  }
}
</script>

<style scoped>
.give-space {
  margin-right: 50px;
  margin-left: 50px;
}
</style>

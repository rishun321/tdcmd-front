<template>
<md-card>
  <md-card-header>
    <div class="md-title give-space">お客様を探す</div>
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
        <md-field>
          <label>面積</label>
          <md-select v-model="area">
            <md-option value="0">20m²以上</md-option>
            <md-option value="1">30m²以上</md-option>
            <md-option value="2">40m²以上</md-option>
            <md-option value="3">50m²以上</md-option>
            <md-option value="4">60m²以上</md-option>
            <md-option value="5">70m²以上</md-option>
            <md-option value="6">80m²以上</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>建物種類</label>
          <md-select v-model="housetype">
            <md-option value="0">マンション</md-option>
            <md-option value="1">一戸建</md-option>
            <md-option value="2">アパート</md-option>
            <md-option value="3">その他</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>建物構造</label>
          <md-select v-model="structure">
            <md-option value="0">鉄筋系</md-option>
            <md-option value="1">鉄骨系</md-option>
            <md-option value="2">木造</md-option>
            <md-option value="3">その他</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>築年数</label>
          <md-input v-model="Age" type="number"></md-input>
          <span class="md-helper-text">単位・年</span>
        </md-field>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <div class="item-lable">金額{{percent * amount}}万円以下</div>
        <input class="item-input" type="range" v-model.number="percent">
      </div>
    </div>
  </md-card-content>

  <md-card-actions>
    <div class="md-layout md-gutter md-alignment-center" style="width: 100%;">
      <div class="md-layout-item md-size-60 md-small-size-100">
        <md-button class="md-raised md-accent" @click="showPublishDetail()">売出希望を掲載</md-button>
      </div>
      <div class="md-layout-item md-size-20 md-small-size-50">
        <md-switch v-model="isLatest">1週間以内</md-switch>
      </div>
      <div class="md-layout-item md-size-20 md-small-size-50">
        <md-button class="md-raised md-primary">買取希望を検索</md-button>
      </div>
    </div>
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
    area: null,
    housetype: null,
    structure: null,
    Age: null,
    percent: 16,
    amount: 500,
    isLatest: true
  }),
  methods: {
    showPublishDetail () {
      utils.event.$emit('SHOW_PUBLISH_DIALOG_SELL')
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
.md-card {
  margin-bottom: 10px;
}
.give-space {
  margin-left: 50px;
}
.item-lable {
  opacity: 0.54;
  font-size: 16px;
}
.item-input {
  width: 100%;
}
</style>

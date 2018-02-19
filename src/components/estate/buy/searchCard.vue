<template>
<md-card>
  <md-card-header>
    <div class="md-title give-space">物件を探す</div>
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
        <md-field>
          <label>徒歩時間</label>
          <md-select v-model="minute">
            <md-option value="0">指定なし</md-option>
            <md-option value="1">1分以内</md-option>
            <md-option value="2">5分以内</md-option>
            <md-option value="3">10分以内</md-option>
            <md-option value="4">15分以内</md-option>
            <md-option value="5">20分以内</md-option>
            <md-option value="6">30分以内</md-option>
            <md-option value="7">30分以上</md-option>
          </md-select>
          <span class="md-helper-text">駅から物件までの徒歩時間</span>
        </md-field>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>間取り</label>
          <md-select v-model="layout">
            <md-option value="0">指定なし</md-option>
            <md-option value="1">1R</md-option>
            <md-option value="2">1DK</md-option>
            <md-option value="3">2DK</md-option>
            <md-option value="4">2LDK</md-option>
            <md-option value="5">3DK</md-option>
            <md-option value="6">3LDK</md-option>
            <md-option value="7">4DK以上</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>面積</label>
          <md-select v-model="area">
            <md-option value="0">指定なし</md-option>
            <md-option value="1">20m²以上</md-option>
            <md-option value="2">30m²以上</md-option>
            <md-option value="3">40m²以上</md-option>
            <md-option value="4">50m²以上</md-option>
            <md-option value="5">60m²以上</md-option>
            <md-option value="6">70m²以上</md-option>
            <md-option value="7">80m²以上</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>建物種類</label>
          <md-select v-model="housetype">
            <md-option value="0">指定なし</md-option>
            <md-option value="1">マンション</md-option>
            <md-option value="2">一戸建</md-option>
            <md-option value="3">アパート</md-option>
            <md-option value="4">その他</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>建物構造</label>
          <md-select v-model="structure">
            <md-option value="0">指定なし</md-option>
            <md-option value="1">鉄筋系</md-option>
            <md-option value="2">鉄骨系</md-option>
            <md-option value="3">木造</md-option>
            <md-option value="4">その他</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>築年数</label>
          <md-select v-model="Age">
            <md-option value="0">指定なし</md-option>
            <md-option value="1">1年以内</md-option>
            <md-option value="2">3年以内</md-option>
            <md-option value="3">5年以内</md-option>
            <md-option value="4">7年以内</md-option>
            <md-option value="5">10年以内</md-option>
            <md-option value="6">15年以内</md-option>
            <md-option value="7">20年以内</md-option>
            <md-option value="8">25年以内</md-option>
            <md-option value="9">30年以内</md-option>
            <md-option value="10">30年以上</md-option>
          </md-select>
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
        <md-button class="md-raised md-accent" @click="showPublishDetail()">希望公開</md-button>
      </div>
      <div class="md-layout-item md-size-20 md-small-size-50">
        <md-switch v-model="isLatest">1週間以内</md-switch>
      </div>
      <div class="md-layout-item md-size-20 md-small-size-50">
        <md-button class="md-raised md-primary">検索</md-button>
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
      utils.event.$emit('SHOW_PUBLISH_DIALOG_BUY')
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

<template>
<md-card>
  <md-card-header>
    <div class="md-title give-space">お客様を探す</div>
  </md-card-header>

  <md-card-content>
    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-size-100">
        <bdsMdChips v-model="stations" :md-format="filterStation" :mdSelections="selections" mdHelper="最寄り駅(線路名もしくは駅名で検索)"></bdsMdChips>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>徒歩時間</label>
          <md-select v-model="minute">
            <md-option value="">指定なし</md-option>
            <md-option value="1">1分以内</md-option>
            <md-option value="5">5分以内</md-option>
            <md-option value="10">10分以内</md-option>
            <md-option value="15">15分以内</md-option>
            <md-option value="20">20分以内</md-option>
            <md-option value="30">30分以内</md-option>
          </md-select>
          <span class="md-helper-text">駅から物件までの徒歩時間</span>
        </md-field>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>間取り</label>
          <md-select v-model="layout">
            <md-option value="">指定なし</md-option>
            <md-option value="1R">1R</md-option>
            <md-option value="1DK">1DK</md-option>
            <md-option value="2DK">2DK</md-option>
            <md-option value="2LDK">2LDK</md-option>
            <md-option value="3DK">3DK</md-option>
            <md-option value="3LDK">3LDK</md-option>
            <md-option value="LARGE">4DK以上</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-size-25 md-small-size-50 md-xsmall-size-100">
        <md-field>
          <label>面積</label>
          <md-select v-model="area">
            <md-option value="">指定なし</md-option>
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
          <label>建物種別</label>
          <md-select v-model="housetype">
            <md-option value="">指定なし</md-option>
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
            <md-option value="">指定なし</md-option>
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
            <md-option value="">指定なし</md-option>
            <md-option value="1">1年以内</md-option>
            <md-option value="3">3年以内</md-option>
            <md-option value="5">5年以内</md-option>
            <md-option value="7">7年以内</md-option>
            <md-option value="10">10年以内</md-option>
            <md-option value="15">15年以内</md-option>
            <md-option value="20">20年以内</md-option>
            <md-option value="25">25年以内</md-option>
            <md-option value="30">30年以内</md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item md-size-50 md-xsmall-size-100">
        <div class="item-lable">金額：{{min * scale}}万円〜{{max * scale}}万円</div>
        <div class="range-frame">
          <input class="item-input" type="range" v-model.number="min">
          <input class="item-input" type="range" v-model.number="max">
        </div>
      </div>
    </div>
  </md-card-content>

  <md-card-actions>
    <div class="md-layout md-gutter md-alignment-center" style="width: 100%;">
      <div class="md-layout-item md-size-60 md-small-size-100">
        <md-button class="md-raised md-accent" @click="showPublishDetail()">物件公開</md-button>
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
import manager from '@/store/manager.js'
import bdsMdChips from '@/components/common/vue-material/bdsMdChips'
export default {
  props: ['manager'],
  components: {
    bdsMdChips
  },
  data: () => ({
    selections: [
      {value: '東京', name: '東京-東京'},
      {value: '横浜', name: '横浜-横浜'},
      {value: '千葉', name: '千葉-千葉'},
      {value: '東京2', name: '東京2-東京'}
    ],
    stations: [],
    minute: null,
    layout: null,
    area: null,
    housetype: null,
    structure: null,
    Age: null,
    min: 0,
    max: 10,
    scale: 500,
    isLatest: true
  }),
  created () {
    this.selections.splice(0, this.selections.length)
    for (let line in manager.const.stations) {
      manager.const.stations[line].forEach(station => {
        this.selections.push({value: station.sn, name: line + '-' + station.sn})
      })
    }
  },
  watch: {
    min () {
      if (this.min > this.max) this.max = this.min
    },
    max () {
      if (this.max < this.min) this.min = this.max
    }
  },
  methods: {
    filterStation (input) {
      if (!input) return
      let selection = null
      this.selections.some(one => {
        const isAdded = this.stations.some(station => {
          if (station === one.value) return true
        })
        if (!isAdded && one.name.indexOf(input) >= 0) {
          selection = one.value
          return true
        }
      })
      return selection
    },
    showPublishDetail () {
      utils.event.$emit('SHOW_CREATE_BUY_REQUEST_DIALOG')
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
.range-frame {
  width: 100%;
}
.item-input {
  width: 100%;
}
</style>

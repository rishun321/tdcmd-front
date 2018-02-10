<template>
<md-dialog :md-active.sync="showPublishDialog">
  <md-dialog-title>物件公開</md-dialog-title>

  <md-dialog-content md-dynamic-height>

    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-size-50 md-small-size-100">
        <md-field>
          <label for="station">最寄り駅</label>
          <md-select v-model="station" name="station" id="station">
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
      <div class="md-layout-item md-size-50 md-small-size-100">
        <md-field :class="{'md-invalid': !isMinuteValid}">
          <label>徒歩時間</label>
          <md-input v-model="minute" type="number"></md-input>
          <span class="md-error">1以上の整数</span>
          <span class="md-helper-text">物件までかかる時間（分）</span>
        </md-field>
      </div>
      <div class="md-layout-item md-size-50 md-small-size-100">
        <md-field>
          <label for="layout">間取り</label>
          <md-select v-model="layout" name="layout" id="layout" class="frontier">
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
      <div class="md-layout-item md-size-50 md-small-size-100">
        <label>金額{{percent * amount}}万円以下</label>
        <input id="amount" type="range" v-model.number="percent">
      </div>
      <div class="md-layout-item md-size-100">
        <md-field>
          <label>コメント</label>
          <md-textarea v-model="comment"></md-textarea>
          <span class="md-helper-text">要望に関する補足情報</span>
        </md-field>
      </div>
      <div class="md-layout-item md-size-100">
        <md-field>
          <label>物件写真</label>
          <md-file v-model="photos" multiple />
        </md-field>
      </div>
    </div>

  </md-dialog-content>

  <md-dialog-actions>
    <md-button class="md-primary" @click="publish()">公開</md-button>
    <md-button class="md-primary" @click="showPublishDialog = false">取消</md-button>
  </md-dialog-actions>
</md-dialog>
</template>

<script>
import utils from '@/tool/utils.js'
export default {
  data: () => ({
    showPublishDialog: false,
    photos: null,
    station: null,
    minute: null,
    layout: null,
    percent: 0,
    amount: 500,
    comment: null
  }),
  created () {
    let self = this
    utils.event.$on('SHOW_PUBLISH_DIALOG', () => {
      self.showPublishDialog = true
    })
  },
  computed: {
    isMinuteValid () {
      if (this.minute === null || this.minute === '') return true
      if (parseFloat(this.minute) <= 0) return false
      if (Math.round(parseFloat(this.minute)) === parseFloat(this.minute)) return true
      return false
    }
  },
  methods: {
    publish () {
      this.$router.push({name: 'buy'})
    }
  },
  beforeDestroy () {
    utils.event.$off('SHOW_PUBLISH_DIALOG')
  }
}
</script>

<style lang="scss" scoped>

</style>

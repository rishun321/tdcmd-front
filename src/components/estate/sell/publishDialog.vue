<template>
<md-dialog :md-active.sync="showPublishDialog">
  <md-dialog-content md-dynamic-height>

    <md-tabs md-dynamic-height>
      <md-tab md-label="物件情報">
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
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field :class="{'md-invalid': !isMinuteValid}">
              <label>面積</label>
              <md-input v-model="area" type="number"></md-input>
              <span class="md-helper-text">単位・m²</span>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label for="houseType">建物種別</label>
              <md-select v-model="houseType" name="houseType" id="houseType">
                <md-option value="0">マンション</md-option>
                <md-option value="1">一戸建</md-option>
                <md-option value="2">アパート</md-option>
                <md-option value="3">その他</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label for="structure">建物構造</label>
              <md-select v-model="structure" name="structure" id="structure">
                <md-option value="0">鉄筋系</md-option>
                <md-option value="1">鉄骨系</md-option>
                <md-option value="2">木造</md-option>
                <md-option value="3">その他</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field :class="{'md-invalid': !isMinuteValid}">
              <label>築年月</label>
              <md-input v-model="houseAge" type="number"></md-input>
              <span class="md-helper-text">例：199901</span>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field :class="{'md-invalid': !isMinuteValid}">
              <label>価格</label>
              <md-input v-model="price" type="number"></md-input>
              <span class="md-helper-text">単位・万</span>
            </md-field>
          </div>
          <div class="md-layout-item md-size-95">
            <md-field>
              <label>コメント</label>
              <md-textarea v-model="comment"></md-textarea>
              <span class="md-helper-text">要望に関する補足情報</span>
            </md-field>
          </div>
        </div>
      </md-tab>

      <md-tab md-label="物件写真">
        <img src="../../../../static/user.jpg" alt="People">
      </md-tab>

      <md-tab md-label="業者情報">
        <p>会社員</p>
        <p>30代</p>
        <p>年収700万円</p>
      </md-tab>
    </md-tabs>
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
    area: null,
    houseType: null,
    structure: null,
    houseAge: null,
    price: null,
    percent: 0,
    amount: 500,
    comment: null
  }),
  created () {
    let self = this
    utils.event.$on('SHOW_SELL_PUBLISH_DIALOG', () => {
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
    utils.event.$off('SHOW_SELL_PUBLISH_DIALOG')
  }
}
</script>

<style lang="scss" scoped>
textarea {
  resize: none !important;
}
</style>

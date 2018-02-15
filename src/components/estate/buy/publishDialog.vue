<template>
<md-dialog :md-active.sync="showPublishDialog">
  <md-dialog-content md-dynamic-height>
    <md-tabs md-dynamic-height>
      <md-tab md-label="希望物件条件">
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
            <md-field>
              <label for="area">面積</label>
              <md-select v-model="area" name="area" id="area" class="frontier">
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
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label for="housetype">建物種別</label>
              <md-select v-model="housetype" name="housetype" id="housetype" class="frontier">
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
              <md-select v-model="structure" name="structure" id="structure" class="frontier">
                <md-option value="0">鉄筋系</md-option>
                <md-option value="1">鉄骨系</md-option>
                <md-option value="2">木造</md-option>
                <md-option value="3">その他</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field :class="{'md-invalid': !isMinuteValid}">
              <label>築年数</label>
              <md-input v-model="houseage" type="number"></md-input>
              <span class="md-helper-text">単位・年</span>
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
              <md-textarea v-model="housecomment"></md-textarea>
              <span class="md-helper-text">要望に関する補足情報</span>
            </md-field>
          </div>
        </div>
      </md-tab>
      <md-tab md-label="お客様属性">
        <div class="md-layout md-gutter md-alignment-center">
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label for="sex">性別</label>
              <md-select v-model="sex" name="sex" id="sex">
                <md-option value="1">男性</md-option>
                <md-option value="2">女性</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label for="customerage">年齢</label>
              <md-select v-model="customerage" name="customerage" id="customerage">
                <md-option value="1">２０代</md-option>
                <md-option value="2">３０代</md-option>
                <md-option value="3">４０代</md-option>
                <md-option value="4">５０代</md-option>
                <md-option value="5">６０代以上</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label>国籍</label>
              <md-input v-model="country" type="text"></md-input>
              <span class="md-error">１０文字以内</span>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label>職業</label>
              <md-input v-model="occupation" type="text"></md-input>
              <span class="md-error">１０文字以内</span>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label for="employment_status">雇用形態</label>
              <md-select v-model="employment_status" name="employment_status" id="employment_status" class="frontier">
                <md-option value="0">正社員</md-option>
                <md-option value="1">契約社員</md-option>
                <md-option value="2">派遣</md-option>
                <md-option value="3">アルバイト</md-option>
                <md-option value="4">業務委託</md-option>
                <md-option value="5">法人</md-option>
                <md-option value="6">その他</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label for="income">収入</label>
              <md-select v-model="income" name="income" id="income">
                <md-option value="1">２００万以上</md-option>
                <md-option value="2">３００万以上</md-option>
                <md-option value="3">４００万以上</md-option>
                <md-option value="4">５００万以上</md-option>
                <md-option value="5">６００万以上</md-option>
                <md-option value="6">その他</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-95">
            <md-field>
              <label>コメント</label>
              <md-textarea v-model="customercomment"></md-textarea>
              <span class="md-helper-text">要望に関する補足情報</span>
            </md-field>
          </div>
        </div>
      </md-tab>
      <md-tab md-label="業者情報">
        <img src="../../../../static/user.jpg" alt="People">
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
    housetype: null,
    structure: null,
    houseage: null,
    price: null,
    percent: 0,
    amount: 500,
    housecomment: null,
    sex: null,
    customerage: null,
    country: null,
    occupation: null,
    employment_status: null,
    income: null,
    customercomment: null
  }),
  created () {
    let self = this
    utils.event.$on('SHOW_PUBLISH_DIALOG_BUY', () => {
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
    utils.event.$off('SHOW_PUBLISH_DIALOG_BUY')
  }
}
</script>

<style lang="scss" scoped>
textarea {
  resize: none !important;
}
</style>

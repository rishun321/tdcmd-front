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
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label for="layout">間取り</label>
              <md-select v-model="layout" name="layout" id="layout">
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
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label for="area">面積</label>
              <md-select v-model="area" name="area" id="area">
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
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label for="houseType">建物種別</label>
              <md-select v-model="houseType" name="houseType" id="houseType">
                <md-option value="0">指定なし</md-option>
                <md-option value="1">マンション</md-option>
                <md-option value="2">一戸建</md-option>
                <md-option value="3">アパート</md-option>
                <md-option value="4">その他</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label for="structure">建物構造</label>
              <md-select v-model="structure" name="structure" id="structure">
                <md-option value="0">指定なし</md-option>
                <md-option value="1">鉄筋系</md-option>
                <md-option value="2">鉄骨系</md-option>
                <md-option value="3">木造</md-option>
                <md-option value="4">その他</md-option>
              </md-select>
            </md-field>
          </div>
          <div class="md-layout-item md-size-50 md-small-size-100">
            <md-field>
              <label>築年数</label>
              <md-select v-model="pieceAge">
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
              <md-textarea v-model="houseComment"></md-textarea>
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
              <label for="customerAge">年齢</label>
              <md-select v-model="customerAge" name="customerAge" id="customerAge">
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
              <label for="employmentStatus">雇用形態</label>
              <md-select v-model="employmentStatus" name="employmentStatus" id="employmentStatus">
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
              <md-textarea v-model="customerComment"></md-textarea>
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
import manager from '@/store/manager.js'
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
    pieceAge: null,
    price: null,
    percent: 0,
    amount: 500,
    houseComment: null,
    sex: null,
    customerAge: null,
    country: null,
    occupation: null,
    employmentStatus: null,
    income: null,
    customerComment: null
  }),
  created () {
    const self = this
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
      const self = this
      manager.buyRequestService.sendBuyRequest({
        user: manager.user._id,
        houseComment: this.houseComment
      }).then(
        () => {
          self.$router.push({name: 'sell'})
        }
      )
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

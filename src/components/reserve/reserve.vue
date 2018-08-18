<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - 予約"/>
  <div class="cover">
    <img src="/static/cover.jpg">
  </div>

  <div class="component-wrapper">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-100">
        <md-radio v-model="type" value="土曜日定例会">土曜日定例会</md-radio>
        <md-radio v-model="type" value="日曜日定例会">日曜日定例会</md-radio>
        <md-radio v-model="type" value="特別定例会">特別イベント</md-radio>
        <md-radio v-model="type" value="平日貸切">平日貸切</md-radio>
        <md-radio v-model="type" value="土曜日貸切">土曜日貸切</md-radio>
        <md-radio v-model="type" value="日曜日貸切">日曜日貸切</md-radio>
        <md-radio v-model="type" value="祝日貸切">祝日貸切</md-radio>
      </div>
      <div class="md-layout-item md-size-33 md-xsmall-size-100">
        <md-field md-clearable :class="{'md-invalid': !isNameValid}">
          <label for="name">お名前</label>
          <md-input v-model="name" required></md-input>
          <span class="md-error" v-if="name === '' || (name && !name.trim())">入力してください</span>
          <span class="md-error" v-else>20文字以内</span>
        </md-field>
      </div>
      <div class="md-layout-item md-size-33 md-xsmall-size-100">
        <md-field md-clearable :class="{'md-invalid': !isContactValid}">
          <label for="contact">メールアドレス</label>
          <md-input v-model="contact" required></md-input>
          <span class="md-error" v-if="contact === '' || (contact && !contact.trim())">入力してください</span>
          <span class="md-error" v-else>40文字以内</span>
        </md-field>
      </div>
      <div class="md-layout-item md-size-33 md-xsmall-size-100">
        <md-field md-clearable :class="{'md-invalid': !isContact2Valid}">
          <label for="contact2">電話番号</label>
          <md-input v-model="contact2" required></md-input>
          <span class="md-error" v-if="contact2 === '' || (contact2 && !contact2.trim())">入力してください</span>
          <span class="md-error" v-else>40文字以内</span>
        </md-field>
      </div>
      <div class="md-layout-item md-size-33 md-xsmall-size-100">
        <md-field type="number">
          <label for="count">人数</label>
          <md-input v-model="count"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-size-33 md-xsmall-size-100 date-input">
        <label>予約日</label>
        <md-datepicker v-model="rdate" />
      </div>
      <div class="md-layout-item md-size-33 md-xsmall-size-100">
        <md-field md-clearable>
          <label for="team">チーム／団体名</label>
          <md-input v-model="team"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-size-100">
        <md-field md-clearable>
          <label for="team">住所</label>
          <md-input v-model="live"></md-input>
        </md-field>
      </div>
      <div class="md-layout-item md-size-100">
        <md-field :class="{'md-invalid': !isContentValid}">
          <label>テキスト</label>
          <md-textarea v-model="content" required></md-textarea>
          <span class="md-error" v-if="content === '' || (content && !content.trim())">入力してください</span>
          <span class="md-error" v-else>200文字以内</span>
        </md-field>
      </div>
    </div>
    <div class="action-container">
      <md-button class="md-primary md-raised action-button" :disabled="!isNameValid || !isContactValid || !isContact2Valid || !isContentValid" @click="send">
        <div class="icon-text">
          <md-icon class="animate-icon">send</md-icon><p>送信</p>
        </div>
      </md-button>
    </div>
  </div>
</div>
</template>

<script>
import utils from '@/tool/utils.js'
import moment from 'moment'
export default {
  props: ['manager'],
  data: () => ({
    type: '定例会',
    name: null,
    contact: null,
    contact2: null,
    count: null,
    rdate: null,
    team: null,
    live: null,
    content: null
  }),
  mounted () {
    this.$material.locale.firstDayOfAWeek = 1
    this.$material.locale.days = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
    this.$material.locale.shortDays = ['日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜']
    this.$material.locale.shorterDays = ['日', '月', '火', '水', '木', '金', '土']
    this.$material.locale.months = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    this.$material.locale.shortMonths = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    this.$material.locale.shorterMonths = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    this.rdate = moment(new Date()).add(7, 'days').toDate()
  },
  computed: {
    isNameValid () {
      if (this.name === null) return true
      if (!this.name || !this.name.trim()) return false
      if (this.name && this.name.trim().length > 20) return false
      return true
    },
    isContactValid () {
      if (this.contact === null) return true
      if (!this.contact || !this.contact.trim()) return false
      if (this.contact && this.contact.trim().length > 40) return false
      return true
    },
    isContact2Valid () {
      if (this.contact2 === null) return true
      if (!this.contact2 || !this.contact2.trim()) return false
      if (this.contact2 && this.contact2.trim().length > 40) return false
      return true
    },
    isContentValid () {
      if (this.content === null) return true
      if (!this.content || !this.content.trim()) return false
      if (this.content && this.content.trim().length > 200) return false
      return true
    }
  },
  methods: {
    send () {
      let isValid = true
      if (!this.name) {
        this.name = ''
        isValid = false
      }
      if (!this.contact) {
        this.contact = ''
        isValid = false
      }
      if (!this.contact2) {
        this.contact2 = ''
        isValid = false
      }
      if (!this.content) {
        this.content = ''
        isValid = false
      }
      if (!isValid) return
      let message = {
        type: this.type,
        name: this.name,
        contact: this.contact,
        contact2: this.contact2,
        count: this.count,
        rdate: this.rdate.valueOf(),
        team: this.team,
        live: this.live,
        content: this.content,
        mail: 'info@amone.jp'
      }
      this.manager.inquiryService.sendInquiry(message, () => {
        utils.event.$emit('SHOW_MESSAGE', {code: 'I001'}, () => {
          utils.router.push({path: '/'})
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.cover {
  width: 100%;
  height: auto;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
}
.md-layout-item {
  margin-top: 30px;
}
.action-container {
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  .action-button {
    width: 150px;
  }
}
.date-input {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  label {
    width: 90px;
  }
}
</style>

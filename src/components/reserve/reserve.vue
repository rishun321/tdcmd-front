<template>
<div class="app-content-auto-height">
  <vue-headful title="サンダーコマンドス - 予約"/>
  <div class="cover">
    <img src="/static/cover.jpg">
  </div>

  <div class="component-wrapper">
    <div class="md-layout md-gutter">
      <div class="md-layout-item md-size-100">
        <md-radio v-model="type" value="定例会">定例会</md-radio>
        <md-radio v-model="type" value="平日貸切">平日貸切</md-radio>
        <md-radio v-model="type" value="土日祝貸切">土日祝貸切</md-radio>
      </div>
      <div class="md-layout-item md-size-33 md-xsmall-size-100">
        <md-field md-clearable :class="{'md-invalid': !isNameValid}">
          <label for="name">お名前</label>
          <md-input v-model="name" required></md-input>
          <span class="md-error" v-if="name === '' || (name && !name.trim())">入力してください</span>
          <span class="md-error" v-else>20文字以内</span>
        </md-field>
      </div>
      <div class="md-layout-item md-size-66 md-xsmall-size-100">
        <md-field md-clearable :class="{'md-invalid': !isContactValid}">
          <label for="name">ご連絡方法</label>
          <md-input v-model="contact" required></md-input>
          <span class="md-error" v-if="contact === '' || (contact && !contact.trim())">入力してください</span>
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
        <md-field :class="{'md-invalid': !isContentValid}">
          <label>テキスト</label>
          <md-textarea v-model="content" required></md-textarea>
          <span class="md-error" v-if="content === '' || (contact && !contact.trim())">入力してください</span>
          <span class="md-error" v-else>200文字以内</span>
        </md-field>
      </div>
    </div>
    <div class="action-container">
      <md-button class="md-primary md-raised action-button" :disabled="!isNameValid || !isContactValid || !isContentValid" @click="send">
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
    count: null,
    rdate: null,
    team: null,
    content: null
  }),
  mounted () {
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
      if (!this.content) {
        this.content = ''
        isValid = false
      }
      if (!isValid) return
      let message = {
        type: this.type,
        name: this.name,
        contact: this.contact,
        count: this.count,
        rdate: this.rdate,
        team: this.team,
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

<template>
<div class="wrapper">
  <md-card class=" md-elevation-8">
    <md-card-header>
      <div class="md-title">ブドウさん</div>
    </md-card-header>

    <md-card-content>
      <md-field md-clearable :class="{'md-invalid': !isAccountValid}">
        <label>アカウント名</label>
        <md-input ref="login_user" v-model="account" @keyup.tab.native="foucusPassword()"></md-input>
        <span class="md-error">4〜20文字にしてください。</span>
        <span class="md-helper-text">※4〜20文字</span>
      </md-field>
      <md-field md-clearable :class="{'md-invalid': !isPasswordValid}" :md-toggle-password="false">
        <label>パスワード</label>
        <md-input ref="login_password" v-model="password" type="password" @keyup.enter.native="login()"></md-input>
        <span class="md-error">英数字6〜20文字にしてください。</span>
        <span class="md-helper-text">※英数字6〜20文字</span>
      </md-field>
    </md-card-content>

    <md-card-actions>
      <md-button class="md-primary" @click.native="createAcount()">アカウント作成</md-button>
      <md-button class="md-primary" @click.native="login()">ログイン</md-button>
    </md-card-actions>
  </md-card>
</div>
</template>

<script>
import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  data: () => ({
    account: null,
    password: null,
    isAccountValid: true,
    isPasswordValid: true
  }),
  created () {
    manager.logout()
    this.account = null
    this.password = null
    this.isAccountValid = true
    this.isPasswordValid = true
  },
  watch: {
    account () {
      if (this.account !== null && (this.account.length < 4 || this.account.length > 20)) {
        this.isAccountValid = false
      } else {
        this.isAccountValid = true
      }
    },
    password () {
      if (this.password !== null && (this.password.length < 6 || this.password.length > 20)) {
        this.isPasswordValid = false
      } else if (this.password !== null && this.password.match(/[^A-Za-z0-9]+/)) {
        this.isPasswordValid = false
      } else {
        this.isPasswordValid = true
      }
    }
  },
  methods: {
    foucusPassword () {
      const self = this
      if (self.account !== '') {
        self.$refs.login_password.$el.focus()
      }
    },
    createAcount () {
      const self = this
      self.$router.push({name: 'register'})
    },
    login () {
      const self = this
      const path = self.$route.query.path
      if (self.account === '' || self.password === '') {
        utils.event.$emit('SHOW_MESSAGE', {code: 'B004'}, () => {
          if (self.account === '') {
            this.$refs.login_user.$el.focus()
          } else {
            this.$refs.login_password.$el.focus()
          }
        })
        return
      }
      utils.restPost('/authenticate', {username: self.account, password: self.password}).then(
        response => {
          if (response) {
            manager.login(response, () => {
              if (path) {
                self.$router.push({path: path})
              } else {
                self.$router.push({path: '/'})
              }
            })
          }
        }
      )
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.md-card {
  width: 320px;
  height: 320px;
  padding: 10px;
}
.md-card-header {
  text-align: center;
}
</style>

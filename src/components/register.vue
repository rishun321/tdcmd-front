<template>
<div class="wrapper">
  <md-card class=" md-elevation-8">
    <md-card-header>
      <div class="md-title">アカウント作成</div>
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
        <md-input ref="login_password" v-model="password" type="password" @keyup.tab.native="foucusRetype()"></md-input>
        <span class="md-error">英数字6〜20文字にしてください。</span>
        <span class="md-helper-text">※英数字6〜20文字</span>
      </md-field>
      <md-field md-clearable :class="{'md-invalid': !isRetypeValid}" :md-toggle-password="false">
        <label>パスワード再入力</label>
        <md-input ref="retype" v-model="retype" type="password" @keyup.enter.native="register()"></md-input>
        <span class="md-error">英数字6〜20文字にしてください。</span>
        <span class="md-helper-text">※英数字6〜20文字</span>
      </md-field>
    </md-card-content>

    <md-card-actions>
      <md-button class="md-primary" @click.native="toLogin()">既存アカウントでログイン</md-button>
      <md-button class="md-primary" @click.native="register()">作成</md-button>
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
    retype: null,
    isAccountValid: true,
    isPasswordValid: true,
    isRetypeValid: true
  }),
  created () {
    manager.logout()
    this.account = null
    this.password = null
    this.retype = null
    this.isAccountValid = true
    this.isPasswordValid = true
    this.isRetypeValid = true
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
    },
    retype () {
      if (this.retype !== null && (this.retype.length < 6 || this.retype.length > 20)) {
        this.isRetypeValid = false
      } else if (this.retype !== null && this.retype.match(/[^A-Za-z0-9]+/)) {
        this.isRetypeValid = false
      } else {
        this.isRetypeValid = true
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
    foucusRetype () {
      const self = this
      if (self.password !== '') {
        self.$refs.retype.$el.focus()
      } else if (self.account === '') {
        self.$refs.login_user.$el.focus()
      }
    },
    toLogin () {
      const self = this
      self.$router.push({name: 'login'})
    },
    register () {
      const self = this
      if (self.account === '' || self.password === '' || self.password !== this.retype) {
        utils.event.$emit('SHOW_MESSAGE', {code: 'B004'}, () => {
          if (self.account === '') {
            self.$refs.login_user.$el.focus()
          } else if (self.password === '') {
            self.$refs.login_password.$el.focus()
          } else if (self.password !== this.retype) {
            self.$refs.retype.$el.focus()
          }
        })
        return
      }
      utils.restPost('/register', {_id: self.account, password: self.password}).then(
        response => {
          if (response) {
            utils.restPost('/authenticate', {username: self.account, password: self.password}).then(
              response => {
                if (response) {
                  manager.login(response, () => {
                    self.$router.push({path: '/'})
                  })
                }
              }
            )
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
  height: 400px;
  padding: 10px;
}
.md-card-header {
  text-align: center;
}

.md-field{
  margin: 0 0 30px 0;
}
</style>

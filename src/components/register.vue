<template>
<div class="wrapper">
  <md-content class="md-primary app-title md-elevation-8">
    ブドウさん
  </md-content>
  <md-card class=" md-elevation-8">
    <md-card-header>
      <div class="md-title">アカウント作成</div>
    </md-card-header>

    <md-card-content>
      <md-field md-clearable :class="{'md-invalid': !isAccountValid}">
        <label>アカウント名</label>
        <md-input ref="register_user" v-model="account"></md-input>
        <span class="md-error">4〜10文字</span>
      </md-field>
      <md-field md-clearable :class="{'md-invalid': !isPasswordValid}" :md-toggle-password="false">
        <label>パスワード</label>
        <md-input ref="register_password" v-model="password" type="password"></md-input>
        <span class="md-error">英数字6〜20文字</span>
      </md-field>
      <md-field md-clearable :class="{'md-invalid': !isRetypeValid}" :md-toggle-password="false">
        <label>パスワード再入力</label>
        <md-input ref="retype" v-model="retype" type="password" @keyup.enter.native="register()"></md-input>
        <span class="md-error">英数字6〜20文字</span>
      </md-field>
    </md-card-content>

    <md-card-actions>
      <md-button class="md-primary" to="/login">既存アカウントでログイン</md-button>
      <md-button class="md-primary md-raised" @click.native="register()" :disabled="!isAccountValid || !isPasswordValid || !isRetypeValid">作成</md-button>
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
      if (this.account !== null && (this.account.length < 4 || this.account.length > 10)) {
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
      } else if (this.retype && this.password && (this.password !== this.retype)) {
        this.isRetypeValid = false
      } else {
        this.isRetypeValid = true
      }
    }
  },
  methods: {
    register () {
      const self = this
      if (!self.account || !self.password || self.password !== this.retype) {
        utils.event.$emit('SHOW_MESSAGE', {code: 'B004'}, () => {
          if (!self.account) {
            self.$refs.register_user.$el.focus()
          } else if (!self.password) {
            self.$refs.register_password.$el.focus()
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

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.md-card {
  width: 350px;
  padding: 10px;
}
.md-card-header {
  text-align: center;
}

.app-title {
  position: absolute;
  left: -500px;
  top: -500px;
  left: calc(50% - 140px);
  top: calc(50% - 215px);
  padding: 30px 80px;
  z-index: 10;
  border-radius: 8px;
  font-weight: 600;
  font-size:24px;
  background: -webkit-linear-gradient(bottom, #563e9e, #7e71ab);
  background: linear-gradient(to top right, #563e9e, #7e71ab);
  background: -ms-linear-gradient(bottom, #563e9e, #7e71ab) !important;
  background: -moz-linear-gradient(center bottom, #563e9e 0%, #7e71ab 100%) !important;
  background: -o-linear-gradient(#563e9e, #7e71ab) !important;
}

.md-field + .md-field {
  margin-top: 40px;
}
.md-button + .md-button {
  margin-left: 20px;
}
</style>

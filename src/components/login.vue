<template>
<div class="wrapper">
  <md-content class="md-primary app-title md-elevation-8">
    ブドウさん
  </md-content>
  <md-card class=" md-elevation-8">
    <md-card-header>
      <div class="md-title">ブドウさん</div>
    </md-card-header>

    <md-card-content>
      <md-field md-clearable :class="{'md-invalid': !isAccountValid}">
        <label>アカウント名</label>
        <md-input ref="login_user" v-model="account"></md-input>
        <span class="md-error">4〜10文字</span>
      </md-field>
      <md-field md-clearable :class="{'md-invalid': !isPasswordValid}" :md-toggle-password="false">
        <label>パスワード</label>
        <md-input ref="login_password" v-model="password" type="password" @keyup.enter.native="login()"></md-input>
        <span class="md-error">英数字6〜20文字</span>
      </md-field>
    </md-card-content>

    <md-card-actions>
      <md-button class="md-primary" to="/register">アカウント作成</md-button>
      <md-button class="md-primary md-raised" @click.native="login()" :disabled="!isAccountValid || !isPasswordValid">ログイン</md-button>
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
    }
  },
  methods: {
    login () {
      const self = this
      const path = self.$route.query.path
      if (!self.account || !self.password) {
        utils.event.$emit('SHOW_MESSAGE', {code: 'B004'}, () => {
          if (!self.account) {
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
  top: calc(50% - 175px);
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

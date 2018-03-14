<template>
<div class="wrapper">
  <md-card class="md-elevation-8">
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
      <md-button class="md-primary md-raised" to="/">匿名訪問</md-button>
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
      const that = this
      const path = that.$route.query.path
      if (!that.account || !that.password) {
        utils.event.$emit('SHOW_MESSAGE', {code: 'B004'}, () => {
          if (!that.account) {
            this.$refs.login_user.$el.focus()
          } else {
            this.$refs.login_password.$el.focus()
          }
        })
        return
      }
      utils.restPost('/authenticate', {username: that.account, password: that.password}).then(
        response => {
          if (response) {
            manager.login(response, () => {
              if (path) {
                that.$router.push({path: path})
              } else {
                that.$router.push({path: '/admin'})
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
.md-field + .md-field {
  margin-top: 40px;
}
.md-button + .md-button {
  margin-left: 20px;
}
</style>

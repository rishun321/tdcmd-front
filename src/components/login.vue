<template>
<div class="fullscreen">
  <md-card class=" md-elevation-8">
    <md-card-header>
      <div class="md-title">ブドウさん</div>
    </md-card-header>

    <md-card-content>
      <md-field md-clearable>
        <label>アカウント名</label>
        <md-input ref="login_user" v-model="manager.user._id" @keyup.enter.native="foucusPassword()"></md-input>
      </md-field>
      <md-field md-clearable>
        <label>パスワード</label>
        <md-input ref="login_password" v-model="manager.user.password" type="password" @keyup.enter.native="login()"></md-input>
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
  created () {
    manager.logout()
  },
  methods: {
    foucusPassword () {
      const self = this
      if (manager.user._id !== '') {
        self.$refs.login_password.$el.focus()
      }
    },
    createAcount () {
      const self = this
      self.$router.push({path: '/register'})
    },
    login () {
      const self = this
      const path = self.$route.query.path
      if (manager.user._id === '' || manager.user.password === '') {
        utils.event.$emit('SHOW_MESSAGE', {code: 'B004'}, () => {
          $('#message-modal').on('hidden.bs.modal', () => {
            if (manager.user._id === '') {
              this.$refs.login_user.$el.focus()
            } else {
              this.$refs.login_password.$el.focus()
            }
          })
        })
        return
      }
      utils.restPost('/authenticate', {username: manager.user._id, password: manager.user.password}).then(
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
.fullscreen {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
}

.md-card {
  top: 100px;
  width: 320px;
  height: 320px;
  padding: 10px;
  /* border: 1px dashed #ccc; */
  }
</style>

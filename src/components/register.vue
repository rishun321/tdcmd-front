<template>
<div class="fullscreen">
  <md-card class=" md-elevation-8">
    <md-card-header>
      <div class="md-title">ブドウさん</div>
      <div class="md-title sub-title">アカウント作成</div>
    </md-card-header>

    <md-card-content>
      <md-field md-clearable>
        <label>アカウント名</label>
        <md-input ref="login_user" v-model="manager.user._id" @keyup.enter.native="foucusPassword()"></md-input>
      </md-field>
      <md-field md-clearable>
        <label>パスワード</label>
        <md-input ref="login_password" v-model="manager.user.password" type="password" @keyup.enter.native="foucusRetype()"></md-input>
      </md-field>
      <md-field md-clearable>
        <label>パスワード再入力</label>
        <md-input ref="retype" v-model="retype" type="password" @keyup.enter.native="register()"></md-input>
      </md-field>
    </md-card-content>

    <md-card-actions>
      <md-button class="md-primary" @click.native="returnToBack()">戻る</md-button>
      <md-button class="md-primary" @click.native="register()">作成</md-button>
    </md-card-actions>
  </md-card>
</div>

<!-- <div class="wrapper">
  <vue-headful title="ブドウさん"/>
  <div class="fullscreen">
    <div class="login-box">
      <div class="login-logo">
        ブドウさん
      </div>
      <div class="login-box-body">
        <p class="login-box-msg">アカウント作成</p>
        <div class="form-group has-feedback">
          <input id="register-user" v-model="manager.user._id" type="text" class="form-control" placeholder="アカウント" @keyup.tab="foucusPassword()">
          <span class="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input id="register-password" v-model="manager.user.password" type="password" class="form-control" placeholder="パスワード" @keyup.tab="foucusRetype()">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input id="register-retype" v-model="retype" type="password" class="form-control" placeholder="パスワード再入力" @keyup.enter="register()">
          <span class="glyphicon glyphicon-log-in form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8 middle-padding">
            <router-link to="/login">すでにアカウントをお持ちの場合はこちらへ</router-link>
          </div>
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat" v-on:click="register()">作成</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> -->
</template>

<script>
import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  data () {
    return {
      retype: ''
    }
  },
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
    foucusRetype () {
      const self = this
      if (manager.user.password !== '') {
        self.$refs.retype.$el.focus()
      } else if (manager.user._id === '') {
        self.$refs.login_user.$el.focus()
      }
    },
    returnToBack () {
      const self = this
      self.$router.push({path: '/login'})
    },
    register () {
      const self = this
      if (manager.user._id === '' || manager.user.password === '' || manager.user.password !== this.retype) {
        utils.event.$emit('SHOW_MESSAGE', {code: 'B004'}, () => {
          $('#message-modal').on('hidden.bs.modal', () => {
            if (manager.user._id === '') {
              self.$refs.login_user.$el.focus()
            } else if (manager.user.password === '') {
              self.$refs.login_password.$el.focus()
            } else if (manager.user.password !== this.retype) {
              // $('#register-retype').select()
              self.$refs.retype.$el.focus()
            }
          })
        })
        return
      }
      utils.restPost('/register', {_id: manager.user._id, password: manager.user.password}).then(
        response => {
          if (response) {
            utils.restPost('/authenticate', {username: manager.user._id, password: manager.user.password}).then(
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
  height: 450px;
  padding: 10px;
  /* border: 1px dashed #ccc; */
  }

.sub-title {
  font-size: 12pt;
}
</style>

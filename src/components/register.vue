<template>
<div class="wrapper">
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
  <lockScreen :manager="manager"></lockScreen>
  <messageModal :manager="manager"></messageModal>
</div>
</template>

<script>
import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'

import lockScreen from '@/components/common/lockScreen'
import messageModal from '@/components/common/messageModal'
export default {
  props: ['manager'],
  components: {
    lockScreen,
    messageModal
  },
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
      if (manager.user._id !== '') {
        $('#register-password').focus()
      }
    },
    foucusRetype () {
      if (manager.user.password !== '') {
        $('#register-retype').focus()
      } else if (manager.user._id === '') {
        $('#register-user').focus()
      }
    },
    register () {
      const self = this
      if (manager.user._id === '' || manager.user.password === '' || manager.user.password !== this.retype) {
        utils.event.$emit('SHOW_MESSAGE', {code: 'B004'}, () => {
          $('#message-modal').on('hidden.bs.modal', () => {
            if (manager.user._id === '') {
              $('#register-user').focus()
            } else if (manager.user.password === '') {
              $('#register-password').focus()
            } else if (manager.user.password !== this.retype) {
              $('#register-retype').select()
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
  background: #d2d6de;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.middle-padding {
  padding: 7px 5px 7px 16px;
}
</style>

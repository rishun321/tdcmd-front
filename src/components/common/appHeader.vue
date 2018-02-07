<template>
<header class="main-header">
  <router-link to="/" class="logo">
    <span class="logo-lg">ブドウさん</span>
  </router-link>
  <nav class="navbar navbar-static-top">
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </a>
    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">
        <li>
          <a href="#" v-on:click="logout()"><i class="glyphicon glyphicon-log-out"></i> ログアウト</a>
        </li>
        <li>
          <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</header>
</template>

<script>
import utils from '@/tool/utils.js'

export default {
  props: ['manager'],
  methods: {
    logout () {
      utils.restGet('/logout').then(
        response => {
          if (response) {
            utils.router.push({name: 'login'})
          }
        }
      )
    }
  }
}
</script>

<style scoped>

</style>

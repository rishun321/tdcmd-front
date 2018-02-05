<template>
<aside class="main-sidebar">
  <section class="sidebar">
    <div class="user-panel">
      <div class="pull-left image" v-on:click="toHome()">
        <img src="../../../static/avatar.png" class="img-circle" alt="User Image">
      </div>
      <div class="pull-left info">
        <p>{{manager.user._id}}</p>
        <!-- <a v-if="manager.socket && manager.socket.connected" v-on:click="disconnect()"><i class="fa fa-circle text-success"></i> Online</a>
        <a v-else v-on:click="connect()"><i class="fa fa-circle text-red"></i> Offline</a> -->
      </div>
    </div>
    <ul id='side-menu-tree' class="sidebar-menu" data-widget="tree">
      <li class="header">ナビゲーション</li>
      <li :class="{'active': manager.controller.currentApp === 'home'}">
        <router-link to="/">
          <i class="fa fa-home"></i>
          <span>ホーム</span>
        </router-link>
      </li>
      <li :class="{'active': manager.controller.currentApp === 'chat'}">
        <router-link to="/chat">
          <i class="fa fa-comments"></i> <span>チャット</span>
        </router-link>
      </li>
      <li :class="{'active': manager.controller.currentApp === 'contact'}">
        <router-link to="/contact">
          <i class="fa fa-users"></i> <span>連絡先</span>
        </router-link>
      </li>
      <li :class="{'active': manager.controller.currentApp === 'favorite'}">
        <router-link to="/favorite">
          <i class="fa fa-heart"></i> <span>お気に入り</span>
        </router-link>
      </li>
      <li :class="{'treeview': true, 'active': isTrade, 'menu-open': isTrade}">
        <a href="#">
          <i class="glyphicon glyphicon-home"></i> <span>物件取引</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
          </span>
        </a>
        <ul class="treeview-menu" :style="{'display': isTrade ? 'block' : 'none'}">
          <li :class="{'active': manager.controller.currentApp === 'sell'}">
            <router-link to="/sell">
              <i class="fa fa-circle-o"></i> <span>物件を売る</span>
            </router-link>
          </li>
          <li :class="{'active': manager.controller.currentApp === 'buy'}">
            <router-link to="/buy">
              <i class="fa fa-circle-o"></i> <span>物件を買う</span>
            </router-link>
          </li>
          <li :class="{'active': manager.controller.currentApp === 'rent'}">
            <router-link to="/rent">
              <i class="fa fa-circle-o"></i> <span>物件を貸す</span>
            </router-link>
          </li>
          <li :class="{'active': manager.controller.currentApp === 'lend'}">
            <router-link to="/lend">
              <i class="fa fa-circle-o"></i> <span>物件を借りる</span>
            </router-link>
          </li>
        </ul>
      </li>
      <li :class="{'treeview': true, 'active': isManage, 'menu-open': isManage}">
        <a href="#">
          <i class="glyphicon glyphicon-king"></i> <span>物件管理</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
          </span>
        </a>
        <ul class="treeview-menu" :style="{'display': isManage ? 'block' : 'none'}">
          <li :class="{'active': manager.controller.currentApp === 'manage'}">
            <router-link to="/manage">
              <i class="fa fa-circle-o"></i> <span>賃貸管理</span>
            </router-link>
          </li>
          <li :class="{'active': manager.controller.currentApp === 'publish'}">
            <router-link to="/publish">
              <i class="fa fa-circle-o"></i> <span>海外公開</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</aside>
</template>

<script>
import manager from '@/store/manager.js'

export default {
  props: ['manager'],
  mounted () {
    $('#side-menu-tree').tree({accordion: false})
  },
  updated () {
    this.$nextTick(() => {
      $('#side-menu-tree').tree({accordion: false})
    })
  },
  computed: {
    isTrade () {
      return manager.controller.currentApp === 'sell' || manager.controller.currentApp === 'buy' || manager.controller.currentApp === 'rent' || manager.controller.currentApp === 'lend'
    },
    isManage () {
      return manager.controller.currentApp === 'manage' || manager.controller.currentApp === 'publish'
    }
  },
  methods: {
    connect () {
      manager.initSocket(() => {})
    },
    disconnect () {
      manager.socket.disconnect()
    },
    toHome () {
      this.$router.push({name: 'home'})
    }
  }
}
</script>

<style scoped>
a {
  cursor: pointer;
}
.image {
  cursor: pointer;
}
</style>

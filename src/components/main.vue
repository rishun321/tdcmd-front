<template>
<md-app md-waterfall md-mode="fixed">
  <vue-headful title="ブドウさん"/>

  <md-app-toolbar class="md-primary">
    <div class="md-toolbar-row">

      <div class="md-toolbar-section-start">
        <md-tabs class="md-primary" :md-active-tab="route">
          <md-tab id="route-home" md-icon="home" md-label="HOME" to="/"></md-tab>
          <md-tab id="route-contact" md-icon="recent_actors" md-label="CONTACT" to="/contact"></md-tab>
          <md-tab id="route-chat" md-icon="chat" md-label="CHAT" to="/chat"></md-tab>
          <md-tab id="route-estate" md-icon="account_balance" md-label="ESTATE" to="/estate"></md-tab>
          <md-tab id="route-my" md-icon="accessibility" md-label="MY" to="/my"></md-tab>
        </md-tabs>
      </div>

      <md-autocomplete class="search md-xsmall-hide custom-search" v-model="selected" :md-options="selections" md-layout="box" :md-selected="search()" @keyup.enter.native="search()">
        <label>Search...</label>
      </md-autocomplete>

      <div class="md-toolbar-section-end">
        <span class="md-title md-small-hide">ブドウさん</span>
        <md-button class="md-icon-button" @click="logout()">
          <md-icon>power_settings_new</md-icon>
        </md-button>
      </div>

    </div>
  </md-app-toolbar>

  <md-app-content>
    <router-view :manager="manager"/>
  </md-app-content>

</md-app>
</template>

<script>
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  computed: {
    route () {
      if (this.$route.name === 'home') {
        return 'route-home'
      } else if (this.$route.name === 'contact') {
        return 'route-contact'
      } else if (this.$route.name === 'chat') {
        return 'route-chat'
      } else if (this.$route.name === 'estate' || this.$route.name === 'sell' || this.$route.name === 'buy' || this.$route.name === 'rent' || this.$route.name === 'lend') {
        return 'route-estate'
      } else if (this.$route.name === 'my') {
        return 'route-my'
      }
    }
  },
  data: () => ({
    selected: null,
    selections: [
      '安い物件',
      '都内',
      'シェアハウス',
      '一軒家',
      '中古物件'
    ]
  }),
  methods: {
    search () {
    },
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
.md-app {
  width: 100%;
  height: 100%;
  position: relative;
}
.md-title {
  margin-left: 30px;
  margin-right: 30px;
}
.custom-search {
  max-width: 350px;
  margin-left: 30px !important;
}
</style>

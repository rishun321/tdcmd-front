<template>
<md-app md-waterfall md-mode="fixed">
  <vue-headful title="サンダーコマンドス"/>

  <md-app-toolbar md-theme="white" class="md-dense md-primary">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <md-button class="md-icon-button show-lt-large" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <img class="resize-picture" src="@/assets/THUNDERCOMMANDOS.png">
      </div>
      <div class="md-toolbar-section-end">
        <md-tabs class="md-primary show-gt-large">
          <md-tab id="route-home" md-icon="home" md-label="ホーム" to="/"></md-tab>
          <md-tab id="route-field" md-icon="filter_hdr" md-label="フィールド" to="/field"></md-tab>
          <md-tab id="route-rental" md-icon="build" md-label="レンタル" to="/rental"></md-tab>
          <md-tab id="route-event" md-icon="whatshot" md-label="定例会" to="/event"></md-tab>
          <md-tab id="route-lend" md-icon="lock_outline" md-label="貸切" to="/reserveField"></md-tab>
          <md-tab id="route-photo" md-icon="burst_mode" md-label="写真" to="/photo"></md-tab>
          <md-tab id="route-calendar" md-icon="date_range" md-label="カレンダー" to="/calendar"></md-tab>
          <md-tab id="route-reserve" md-icon="live_help" md-label="予約" to="/reserve"></md-tab>
          <md-tab id="route-access" md-icon="directions_car" md-label="アクセス" to="/access"></md-tab>
        </md-tabs>
      </div>
    </div>
  </md-app-toolbar>

  <md-app-drawer :md-active.sync="menuVisible">
    <md-toolbar class="md-transparent" md-elevation="0">サンダーコマンドス</md-toolbar>
    <md-list>
      <md-list-item to="/">
        <md-icon>home</md-icon>
        <span class="md-list-item-text">ホーム</span>
      </md-list-item>
      <md-list-item to="/field">
        <md-icon>filter_hdr</md-icon>
        <span class="md-list-item-text">フィールド</span>
      </md-list-item>
      <md-list-item to="/rental">
        <md-icon>build</md-icon>
        <span class="md-list-item-text">レンタル</span>
      </md-list-item>
      <md-list-item to="/event">
        <md-icon>whatshot</md-icon>
        <span class="md-list-item-text">定例会</span>
      </md-list-item>
      <md-list-item to="/reserveField">
        <md-icon>lock_outline</md-icon>
        <span class="md-list-item-text">貸切</span>
      </md-list-item>
      <md-list-item to="/photo">
        <md-icon>burst_mode</md-icon>
        <span class="md-list-item-text">写真</span>
      </md-list-item>
      <md-list-item to="/calendar">
        <md-icon>date_range</md-icon>
        <span class="md-list-item-text">カレンダー</span>
      </md-list-item>
      <md-list-item to="/reserve">
        <md-icon>live_help</md-icon>
        <span class="md-list-item-text">予約</span>
      </md-list-item>
      <md-list-item to="/access">
        <md-icon>directions_car</md-icon>
        <span class="md-list-item-text">アクセス</span>
      </md-list-item>
    </md-list>
  </md-app-drawer>

  <md-app-content>
    <router-view :manager="manager"/>
  </md-app-content>

</md-app>
</template>

<script>
// import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  data: () => ({
    menuVisible: false
  }),
  methods: {
    // logout () {
    //   utils.restGet('/logout').then(
    //     response => {
    //       if (response) {
    //         utils.router.push({name: 'login'})
    //       }
    //     }
    //   )
    // }
  }
}
</script>

<style scoped>
.md-app {
  width: 100%;
  height: 100%;
  position: relative;
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.resize-picture {
  width: auto;
  height: 72px;
}
.md-app-content {
  padding: 0;
}
.show-lt-large {
  display: none;
}
.show-gt-large {
  display: block;
}
@media (max-width: 1100px) {
  .show-lt-large {
    display: block;
  }
  .show-gt-large {
    display: none;
  }
}
</style>

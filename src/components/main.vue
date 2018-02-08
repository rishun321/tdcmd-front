<template>
<md-app md-waterfall md-mode="fixed-last">
  <vue-headful title="ブドウさん"/>

  <md-app-toolbar class="md-large md-dense md-primary">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">ブドウさん</span>
      </div>
      <!-- <div class="md-toolbar-section-end">
        <md-button class="md-icon-button">
          <md-icon>more_vert</md-icon>
        </md-button>
      </div> -->
    </div>
    <div class="md-toolbar-row">
      <md-tabs class="md-primary" md-sync-route>
        <md-tab md-label="物件を売る" to="/sell"></md-tab>
        <md-tab md-label="物件を買う" to="/buy"></md-tab>
        <md-tab md-label="物件を貸す" to="/rent"></md-tab>
        <md-tab md-label="物件を借りる" to="/lend"></md-tab>
      </md-tabs>
    </div>
  </md-app-toolbar>

  <md-app-drawer :md-active.sync="menuVisible">
    <md-toolbar class="md-transparent" md-elevation="0">
      ナビゲーション
    </md-toolbar>

    <md-list md-sync-route>
      <md-list-item to="/">
        <md-icon>move_to_inbox</md-icon>
        <span class="md-list-item-text">ホーム</span>
      </md-list-item>
      <md-list-item to="/contact">
        <md-icon>send</md-icon>
        <span class="md-list-item-text">連絡帳</span>
      </md-list-item>
      <md-list-item to="/chat">
        <md-icon>delete</md-icon>
        <span class="md-list-item-text">チャット</span>
      </md-list-item>
      <md-list-item to="/favorite">
        <md-icon>error</md-icon>
        <span class="md-list-item-text">お気に入り</span>
      </md-list-item>
      <md-list-item to="/manage">
        <md-icon>error</md-icon>
        <span class="md-list-item-text">物件管理</span>
      </md-list-item>
      <md-list-item to="/publish">
        <md-icon>error</md-icon>
        <span class="md-list-item-text">海外公開</span>
      </md-list-item>
    </md-list>
  </md-app-drawer>

  <md-app-content>
    <router-view :manager="manager"/>
  </md-app-content>
</md-app>
</template>

<script>
export default {
  props: ['manager'],
  data: () => ({
    menuVisible: false
  })
}
</script>

<style scoped>
.md-app {
  height: 100%;
  border: 1px solid rgba(#000, .12);
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

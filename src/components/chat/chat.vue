<template>
<md-app class="app-content-fix-height">
  <md-app-toolbar class="md-dense" md-elevation="0">
    <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
      <md-icon>keyboard_arrow_right</md-icon>
    </md-button>
    <md-menu class="absolute-bar" md-align-trigger v-if="manager.chatService.room">
      <md-button md-menu-trigger>
        五十嵐東海林太郎, ナースカリスマ, リリナー <md-icon>keyboard_arrow_down</md-icon>
      </md-button>

      <md-menu-content>
        <md-menu-item>五十嵐東海林太郎</md-menu-item>
        <md-menu-item>ナースカリスマ</md-menu-item>
        <md-menu-item>リリナー</md-menu-item>
      </md-menu-content>
    </md-menu>
  </md-app-toolbar>

  <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
    <md-toolbar class="md-transparent md-dense" md-elevation="0">
      <span>チャット</span>
      <div class="md-toolbar-section-end">
        <md-button class="md-icon-button md-dense" @click="toggleMenu">
          <md-icon>keyboard_arrow_left</md-icon>
        </md-button>
      </div>
    </md-toolbar>
    <roomList :manager="manager"/>
  </md-app-drawer>

  <md-app-content>
    <chatMessages :manager="manager"/>
    <chatActions :manager="manager"/>
  </md-app-content>
</md-app>
</template>

<script>
import roomList from './roomList'
import chatMessages from './chatMessages'
import chatActions from './chatActions'
export default {
  props: ['manager'],
  components: {
    roomList,
    chatMessages,
    chatActions
  },
  data: () => ({
    menuVisible: true
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style scoped>
.md-drawer {
  width: 230px;
  height: 100%;
  max-width: calc(100vw - 125px);
}
.md-app-drawer {
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, .12);
}
.md-app-toolbar {
  border-bottom: 1px solid rgba(0, 0, 0, .12);
}
.md-toolbar {
  background: #f5f5f5 !important;
  border-bottom: 1px solid rgba(0, 0, 0, .12);
}
.absolute-bar {
  position: absolute;
  left: 66px;
}
@media (max-width: 944px) {
  .absolute-bar {
    left: 46px;
  }
}
.room-list {
  height: calc(100% - 48px);
  overflow-y: scroll;
}
</style>

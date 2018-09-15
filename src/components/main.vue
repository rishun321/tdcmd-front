<template>
<md-app md-mode="fixed">
  <vue-headful title="サンダーコマンドス"/>

  <md-app-toolbar md-theme="white" class="md-dense md-primary">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <router-link to="/"><img class="resize-picture" src="@/assets/THUNDERCOMMANDOS.png"></router-link>
      </div>
      <div class="md-toolbar-section-end">
        <md-tabs class="md-primary show-gt-large" :md-active-tab="route">
          <md-tab id="route-home" md-icon="home" md-label="ホーム" to="/"></md-tab>
          <md-tab id="route-field" md-icon="filter_hdr" md-label="フィールド" to="/field"></md-tab>
          <md-tab id="route-rental" md-icon="build" md-label="レンタル" to="/rental"></md-tab>
          <md-tab id="route-event" md-icon="whatshot" md-label="定例会" to="/event"></md-tab>
          <md-tab id="route-monopoly" md-icon="lock_outline" md-label="貸切" to="/monopoly"></md-tab>
          <md-tab id="route-notification" md-icon="notification_important" md-label="お知らせ" to="/notification"></md-tab>
          <md-tab id="route-photo" md-icon="burst_mode" md-label="写真" to="/photo"></md-tab>
          <md-tab id="route-reserve" md-icon="live_help" md-label="予約" to="/reserve"></md-tab>
          <md-tab id="route-access" md-icon="directions_car" md-label="アクセス" to="/access"></md-tab>
        </md-tabs>
        <md-button class="md-icon-button show-lt-large" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
      </div>
    </div>
  </md-app-toolbar>

  <md-app-drawer class="md-right" :md-active.sync="menuVisible">
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
      <md-list-item to="/monopoly">
        <md-icon>lock_outline</md-icon>
        <span class="md-list-item-text">貸切</span>
      </md-list-item>
      <md-list-item to="/notification">
        <md-icon>notification_important</md-icon>
        <span class="md-list-item-text">お知らせ</span>
      </md-list-item>
      <md-list-item to="/photo">
        <md-icon>burst_mode</md-icon>
        <span class="md-list-item-text">写真</span>
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
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  data: () => ({
    menuVisible: false
  }),
  computed: {
    route () {
      if (this.$route.name === 'home' || this.$route.name === 'company') {
        return 'route-home'
      } else if (this.$route.name === 'field') {
        return 'route-field'
      } else if (this.$route.name === 'rental') {
        return 'route-rental'
      } else if (this.$route.name === 'event') {
        return 'route-event'
      } else if (this.$route.name === 'monopoly') {
        return 'route-monopoly'
      } else if (this.$route.name === 'photo' || this.$route.name === 'photoDetail') {
        return 'route-photo'
      } else if (this.$route.name === 'notification' || this.$route.name === 'notificationDetail') {
        return 'route-notification'
      } else if (this.$route.name === 'reserve') {
        return 'route-reserve'
      } else if (this.$route.name === 'access') {
        return 'route-access'
      } else {
        return 'route-home'
      }
    }
  },
  mounted () {
    const that = this
    utils.event.$on('SCROLL_TO_TOP', () => {
      that.$nextTick(() => {
        that.scrollTo(0, 300)
      })
    })
    that.scrollTop = 0
    let scrollElement = document.getElementsByClassName('md-app-scroller')[0]
    scrollElement.addEventListener('scroll', this.handleScroll)

    utils.event.$emit('SCROLL_AT', scrollElement.scrollTop + scrollElement.clientHeight + that.headerHeight)
    utils.event.$on('FIRE_SCROLL_AT', () => {
      utils.event.$emit('SCROLL_AT', scrollElement.scrollTop + scrollElement.clientHeight + that.headerHeight)
    })
  },
  beforeDestroy () {
    utils.event.$off('SCROLL_TO_TOP')
    utils.event.$off('FIRE_SCROLL_AT')
    let scrollElement = document.getElementsByClassName('md-app-scroller')[0]
    if (scrollElement) scrollElement.removeEventListener('scroll', this.handleScroll)
  },
  updated () {
    let that = this
    let scrollElement = document.getElementsByClassName('md-app-scroller')[0]
    if (scrollElement) utils.event.$emit('SCROLL_AT', scrollElement.scrollTop + scrollElement.clientHeight + that.headerHeight)
  },
  methods: {
    handleScroll () {
      let scrollElement = document.getElementsByClassName('md-app-scroller')[0]
      if (this.scrollTop < scrollElement.scrollTop && (scrollElement.scrollHeight - scrollElement.scrollTop - scrollElement.clientHeight) < 600) {
        if (this.timmer) clearTimeout(this.timmer)
        this.timmer = setTimeout(() => {
          utils.event.$emit('SCROLL_ON_BOTTOM')
        }, 100)
      }
      if (this.scrollTop < scrollElement.scrollTop) {
        utils.event.$emit('SCROLL_AT', scrollElement.scrollTop + scrollElement.clientHeight + this.headerHeight)
      }
      this.scrollTop = scrollElement.scrollTop
    },
    scrollTo (to, duration) {
      const that = this
      if (duration <= 0) return
      if (!document.getElementsByClassName('md-app-scroller') || document.getElementsByClassName('md-app-scroller').length <= 0) return
      let element = document.getElementsByClassName('md-app-scroller')[0]
      let difference = to - element.scrollTop - element.clientHeight
      let perTick = difference / duration * 10

      setTimeout(() => {
        element.scrollTop = element.scrollTop + perTick
        if (element.scrollTop === to) return
        that.scrollTo(to, duration - 10)
      }, 10)
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

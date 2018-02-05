<template>
<div class="wrapper">
  <vue-headful title="ブドウさん"/>
  <appHeader :manager="manager"/>
  <appSideMenu :manager="manager"/>
  <div class="content-wrapper" v-on:click="showBody">
    <section class="content">
      <router-view :manager="manager"/>
    </section>
  </div>
  <appControlPanel :manager="manager"/>
  <lockScreen :manager="manager"></lockScreen>
  <messageModal :manager="manager"></messageModal>
</div>
</template>

<script>
import appHeader from '@/components/common/appHeader'
import appSideMenu from '@/components/common/appSideMenu'
import appControlPanel from '@/components/common/appControlPanel'
import lockScreen from '@/components/common/lockScreen'
import messageModal from '@/components/common/messageModal'
export default {
  props: ['manager'],
  components: {
    appHeader,
    appSideMenu,
    appControlPanel,
    lockScreen,
    messageModal
  },
  mounted () {
    $('body').layout('fix')
    $('html, body').animate({scrollTop: 0}, 'fast')
  },
  updated () {
    $('body').layout('fix')
    $('html, body').animate({scrollTop: 0}, 'fast')
  },
  methods: {
    showBody () {
      if ($('.control-sidebar').hasClass('control-sidebar-open')) {
        $('.control-sidebar').removeClass('control-sidebar-open')
      }
    }
  }
}
</script>

<style scoped>

</style>

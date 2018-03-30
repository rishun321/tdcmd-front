<template>
<md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
  <span>{{message}}</span>
  <md-button class="md-accent" @click="excute()">OK</md-button>
</md-snackbar>
</template>

<script>
import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  data: () => ({
    showSnackbar: false,
    position: 'left',
    duration: 4000,
    isInfinity: false,
    message: null,
    ok: null
  }),
  mounted () {
    const that = this
    utils.event.$on('SHOW_SNACKBAR', (code, duration, ok) => {
      const info = manager.const.message[code] || manager.const.message['I001']
      that.message = info.message
      if (duration && parseInt(duration) >= 1000 && parseInt(duration) <= 10000) {
        that.isInfinity = false
        that.duration = parseInt(duration)
      } else {
        that.isInfinity = true
        that.duration = 4000
      }
      that.ok = ok || null
      that.showSnackbar = true
    })
    utils.event.$on('HIDE_SNACKBAR', () => {
      that.message = ''
      that.isInfinity = true
      that.duration = 4000
      that.ok = null
      that.showSnackbar = false
    })
  },
  beforeDestroy () {
    utils.event.$off('SHOW_SNACKBAR')
    utils.event.$off('HIDE_SNACKBAR')
  },
  methods: {
    excute () {
      this.showSnackbar = false
      if (this.ok) {
        this.ok()
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>

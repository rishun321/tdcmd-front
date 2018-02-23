<template>
<md-dialog :md-active.sync="showDialog" :md-fullscreen="false">
  <contactCard :manager="manager" :contact="contact"/>
</md-dialog>
</template>

<script>
import contactCard from '@/components/shared/contactCard'
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  components: {
    contactCard
  },
  data: () => ({
    contact: null,
    showDialog: false
  }),
  mounted () {
    const self = this
    utils.event.$on('SHOW_CONTACT', (contact) => {
      if (!contact) return
      self.contact = contact
      self.showDialog = true
    })
  },
  beforeDestroy () {
    utils.event.$off('SHOW_CONTACT')
  }
}
</script>

<style scoped lang="scss">
.md-dialog {
  min-width: 337px;
}
</style>

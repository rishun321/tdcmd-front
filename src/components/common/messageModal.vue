<template>
<div class="fullscreen">
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>{{title}}</md-dialog-title>
    <md-tabs md-dynamic-height>
      <md-tab md-label="Message">
        <p>{{message}}</p>
      </md-tab>
      <md-tab md-label="Detail">
        <p>{{detail}}</p>
      </md-tab>
    </md-tabs>
    <md-dialog-actions>
      <md-button class="md-primary md-raised" @click="showDialog = false" v-show="type != 'select'">OK</md-button>
      <md-button class="md-primary md-raised" @click="showDialog = false" v-show="type == 'select'">YES</md-button>
      <md-button class="md-accent md-raised" @click="showDialog = false" v-show="type == 'select'">NO</md-button>
    </md-dialog-actions>
  </md-dialog>
</div>
</template>

<script>
import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'

export default {
  props: ['manager'],
  data () {
    return {
      type: '',
      title: '',
      message: '',
      detail: '',
      yes: null,
      no: null,
      showDialog: false
    }
  },
  mounted () {
    const self = this
    utils.event.$on('SHOW_MESSAGE', (error, yes, no) => {
      const info = manager.const.messages[error.code] || manager.const.messages['S001']
      self.type = info.type
      self.title = info.title
      self.message = info.message
      self.detail = error.detail || ''
      self.yes = yes
      self.no = no
      self.showDialog = true
    })
  },
  beforeDestroy () {
    utils.event.$off('SHOW_MESSAGE')
  },
  methods: {
    excuteYes () {
      if (this.yes) {
        this.yes()
      }
    },
    excuteNo () {
      if (this.no) {
        this.no()
      }
    }
  }
}
</script>

<style scoped lang="scss">

.fullscreen {
  width: 100%;
  height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: center;
  justify-content: center;
  text-align: center;
}
.md-dialog {
  max-width: 768px;
}
</style>

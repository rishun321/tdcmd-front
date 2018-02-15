<template>
<md-dialog :md-active.sync="showDialog" :md-click-outside-to-close="false">
  <md-dialog-title>
    {{title}}
  </md-dialog-title>
  <md-content>
    <div class="message-content">
      {{message}}
    </div>
    <div class="message-detail" v-if="detail !== ''">
      {{detail}}
    </div>
  </md-content>
  <md-dialog-actions>
    <md-button :class="{'md-primary': type !== 'error', 'md-accent': type === 'error', 'md-raised': true}" @click="excuteYes()" v-show="type !== 'select'">OK</md-button>
    <md-button :class="{'md-primary': type !== 'error', 'md-accent': type === 'error', 'md-raised': true}" @click="excuteYes()" v-show="type === 'select'">YES</md-button>
    <md-button :class="{'md-primary': type !== 'error', 'md-accent': type === 'error', 'md-raised': true}" @click="excuteNo()" v-show="type === 'select'">NO</md-button>
  </md-dialog-actions>
</md-dialog>
</template>

<script>
import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  data: () => ({
    type: '',
    title: '',
    message: '',
    detail: '',
    yes: null,
    no: null,
    showDialog: false
  }),
  mounted () {
    const self = this
    utils.event.$on('SHOW_MESSAGE', (error, yes, no) => {
      const code = error ? (error.code ? error.code : 'S000') : 'S000'
      const info = manager.const.messages[code]
      self.type = info.type
      self.title = info.title
      self.message = info.message
      self.detail = error.detail || ''
      self.yes = yes || null
      self.no = no || null
      self.showDialog = true
    })
  },
  beforeDestroy () {
    utils.event.$off('SHOW_MESSAGE')
  },
  methods: {
    excuteYes () {
      this.showDialog = false
      if (this.yes) {
        this.yes()
      }
    },
    excuteNo () {
      this.showDialog = false
      if (this.no) {
        this.no()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.message-content {
  padding: 30px;
}
.message-detail {
  margin: 15px;
  padding: 15px;
  font-size: 12px;
  color: #666;
  word-break: break-all;
  background: #eee;
  border-radius: 8px;
  min-height: 100px;
}
</style>

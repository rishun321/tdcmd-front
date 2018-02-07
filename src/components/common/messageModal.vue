<template>
<div class="modal fade in" id="message-modal" tabindex="-1" role="dialog" aria-labelledby="messageModalLabel" aria-hidden="true" data-show="true" data-keyboard="false" data-backdrop="static">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title"><i :class="{'fa': true, 'fa-info-circle': type === 'info', 'fa-question-circle': type === 'select', 'fa-warning': type === 'warn'}" style="margin-right: 3px"></i>{{title}}</h4>
      </div>
      <div :class="{'modal-body': true, 'text-blue': (type === 'info') || (type === 'select'), 'text-danger': type === 'warn'}">
        <div class="message-content">
          {{message}}
        </div>
        <div class="message-detail text-muted bg-gray" v-if="detail !== ''">
          {{detail}}
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" :class="{'btn': true, 'btn-primary': type === 'info', 'btn-danger': type === 'warn', 'pull-right': true}" data-dismiss="modal" v-show="type != 'select'">OK</button>
        <button type="button" :class="{'btn': true, 'btn-primary': type === 'select', 'btn-danger': type === 'warn'}" data-dismiss="modal" v-show="type === 'select'" v-on:click="excuteYes">YES</button>
        <button type="button" :class="{'btn': true, 'btn-primary': type === 'select', 'btn-danger': type === 'warn'}" data-dismiss="modal" v-show="type === 'select'" v-on:click="excuteNo">NO</button>
      </div>
    </div>
  </div>
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
      no: null
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
      $('#message-modal').modal('show')
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
#message-modal {
  z-index: 9999;
}
.modal-header {
  position: relative;
  padding: 12px 22px 10px;
  background: #555299;
  h4 {
    color: #fff;
    font-size: 22px;
    font-weight: 700;
  }
  .close {
    position: absolute;
    top: 12px;
    right: 17px;
    margin: 0 auto;
    color: #fff;
    font-size: 30px;
    text-shadow: none;
    opacity: 1;
    &:focus {
      outline: none;
    }
  }
}
.modal-body {
  min-height: 200px;
  padding: 10px;
}
.message-content {
  font-size: 16px;
  padding: 20px;
  min-height: 40px;
}
.message-detail {
  font-size: 12px;
  margin: 20px;
  padding: 20px;
  min-height: 140px;
  word-break: break-all;
}
.btn {
  width: 120px;
}
</style>

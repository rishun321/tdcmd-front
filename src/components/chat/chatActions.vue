<template>
<div class="chat-actions" v-if="manager.chatService.room">
  <div class="chat-text-input">
    <md-field>
      <label>チャット本文</label>
      <md-textarea v-model="text" @keydown.enter="isSend = true" @keyup.enter="send" @keydown.ctrl="ctrl = true" @keyup.ctrl="ctrl = false"></md-textarea>
      <span class="md-helper-text">Ctrl + Enter で改行</span>
    </md-field>
  </div>
  <div class="chat-button">
    <div class="chat-tools">
      <div>
        <md-button class="md-primary md-elevation-5">
          <div class="button-text">
            <md-icon>attachment</md-icon>
          </div>
        </md-button>
      </div>
      <div>
        <md-button class="md-primary md-elevation-5">
          <md-icon>insert_emoticon</md-icon>
        </md-button>
      </div>
    </div>
    <div class="chat-send">
      <md-button class="md-primary md-raised" @click="send">
        <div class="button-text">
          <md-icon>send</md-icon><p>送信</p>
        </div>
      </md-button>
    </div>
  </div>
</div>
</template>

<script>
import manager from '@/store/manager.js'
export default {
  props: ['manager'],
  data: () => ({
    text: null,
    ctrl: false,
    isSend: false
  }),
  methods: {
    send () {
      if (this.ctrl) {
        this.isSend = false
        this.text = this.text + '\n'
        return
      }
      if (this.text) this.text = this.text.trim()
      if (!this.text || this.text === '') return
      if (!this.isSend) return
      let now = new Date()
      manager.socketService.emit('sendChat', {
        _id: '' + (manager.chatService.room.chats.length + 1),
        text: this.text,
        chatTime: now.valueOf(),
        user: 'rrrr'
      })
      this.text = ''
      this.isSend = false
    }
  }
}
</script>

<style scoped lang="scss">
.chat-actions {
  width: 100%;
  height: 168px;
  padding: 10px;
  overflow-y: hidden;
  display: flex;
  justify-content: flex-start;
}
.chat-text-input {
  width: calc(100% - 104px);
}
textarea {
  resize: none !important;
}
.md-helper-text {
  width: 100%;
  text-align: right;
  padding-right: 5px;
}
.chat-button {
  width: 104px;
  height: 100%;
}
.chat-send {
  height: 48px;
}
.chat-tools {
  height: calc(100% - 48px);
}
.button-text {
  display: flex;
  justify-content: center;
  align-items: center;
  .md-icon {
    margin-right: 5px;
  }
}
</style>

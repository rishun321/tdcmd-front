<template>
<div class="chat-actions">
  <div class="chat-text-input">
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
      <md-button class="md-primary md-raised">
        <div class="button-text">
          <md-icon>send</md-icon><p>送信</p>
        </div>
      </md-button>
    </div>
  </div>
</div>
</template>

<script>
// import manager from '@/store/manager.js'
// import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  mounted () {
    // const self = this
    // this.$refs.directChatMessages.scrollTop = this.$refs.directChatMessages.scrollHeight
    // utils.event.$on('SCROLL_CHAT', () => {
    //   self.$nextTick(() => {
    //     self.$refs.directChatMessages.scrollTop = self.$refs.directChatMessages.scrollHeight
    //   })
    // })
  },
  methods: {
    sendChat () {
      // manager.socketService.emit('sendChat', {_id: '' + (manager.chatService.getChats().length + 1), text: this.chatText, chatTime: 1518241737198})
      // this.chatText = ''
    }
  }
}
</script>

<style scoped lang="scss">
.chat-actions {
  width: 100%;
  height: 180px;
  padding: 10px;
  overflow-y: hidden;
  display: flex;
  justify-content: flex-start;
}
.chat-text-input {
  width: calc(100% - 104px);
  background: #f00;
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

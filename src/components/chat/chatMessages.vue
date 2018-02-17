<template>
<div class="chat-messages md-scrollbar">
  <div class="messages-containner" ref="chatMessages">
    <template v-if="manager.chatService.room">
      <chatMessage :manager="manager" :chat="chat" v-for="chat in manager.chatService.room.chats" :key="chat._id"/>
    </template>
  </div>
</div>
</template>

<script>
import chatMessage from './chatMessage'
// import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  components: {
    chatMessage
  },
  mounted () {
    const self = this
    utils.event.$on('SCROLL_CHAT', () => {
      self.$nextTick(() => {
        self.$refs.chatMessages.scrollTop = self.$refs.chatMessages.scrollHeight
      })
    })
  },
  beforeDestroy () {
    utils.event.$off('SCROLL_CHAT')
  }
}
</script>

<style scoped>
.chat-messages {
  margin-left: 20px;
  margin-right: 20px;
  height: calc(100% - 180px);
  overflow-y: scroll;
  border-bottom: 1px solid rgba(0, 0, 0, .12);
}
.messages-containner {
  padding: 10px;
  height: auto;
}
</style>

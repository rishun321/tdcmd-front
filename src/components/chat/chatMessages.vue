<template>
<md-content class="chat-messages md-scrollbar" ref="chatMessages">
  <div class="messages-containner" v-if="manager.chatService.room">
    <template v-for="chat in manager.chatService.room.chats">
      <div class="chat-time-container" :key="chat._id + '-time'" v-if="chat.chatTime">
        <div class="chat-time">
          {{chat.chatTime}}
        </div>
      </div>
      <chatMessage :manager="manager" :chat="chat" :key="chat._id"/>
    </template>
  </div>
</md-content>
</template>

<script>
import chatMessage from './chatMessage'
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
        self.scrollTo(self.$refs.chatMessages.$el.scrollHeight, 100)
      })
    })
  },
  beforeDestroy () {
    utils.event.$off('SCROLL_CHAT')
  },
  methods: {
    scrollTo (to, duration) {
      const self = this
      if (duration <= 0) return
      let element = this.$refs.chatMessages.$el
      let difference = to - element.scrollTop - element.clientHeight
      let perTick = difference / duration * 10

      setTimeout(() => {
        element.scrollTop = element.scrollTop + perTick
        if (element.scrollTop === to) return
        self.scrollTo(to, duration - 10)
      }, 10)
    }
  }
}
</script>

<style scoped lang="scss">
.chat-messages {
  height: calc(100% - 168px);
  overflow: auto;
  border-bottom: 1px solid rgba(0, 0, 0, .12);
}
.messages-containner {
  margin-left: 20px;
  margin-right: 20px;
  padding: 10px;
  height: auto;
}
.chat-message + .chat-time-container {
  margin-top: 30px;
}
.chat-time-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}
.chat-time {
  border-radius: 5px;
  background: #ddd;
  padding: 5px;
  color: #fff;
}
</style>

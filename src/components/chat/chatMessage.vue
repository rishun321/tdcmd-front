<template>
<div :class="{'chat-message': true, 'pull-left': chat.user !== manager.user._id, 'pull-right': chat.user === manager.user._id}">
  <div v-if="chat.user !== manager.user._id">
    <md-avatar>
      <img :src="chat.avatar" alt="Avatar">
    </md-avatar>
  </div>
  <div class="chat-message-container">
    <md-content md-theme="warm" :class="{'md-primary': chat.user === manager.user._id, 'chat-message-text': true, 'chat-balloon-left': chat.user !== manager.user._id, 'chat-balloon-right': chat.user === manager.user._id, 'md-elevation-5': true}">
      {{chat.text}}
    </md-content>
  </div>
  <div v-if="chat.user === manager.user._id">
    <md-avatar>
      <img :src="chat.avatar" alt="Avatar">
    </md-avatar>
  </div>
</div>
</template>

<script>
export default {
  props: ['manager', 'chat']
}
</script>

<style scoped lang="scss">
.chat-message + .chat-message {
  width: 100%;
  padding-top: 20px;
}
.pull-left {
  display: flex;
  justify-content: flex-start;
}
.pull-right {
  display: flex;
  justify-content: flex-end;
}
.chat-message-container {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.chat-message-text {
  position: relative;
  transform-style: preserve-3d;
  min-height: 40px;
  padding: 10px;
  border-radius: 5px;
}

.chat-balloon-left {
  margin-left: 20px;
  margin-right: 61px;
}
.chat-balloon-left::before,
.chat-balloon-left::after {
  content: '';
  position: absolute;
  width: 10px; height: 10px;
  left: -5px; top: 15px;
}
.chat-balloon-left::after {
  background: linear-gradient(45deg, #fff 51%, transparent 51%);
  transform: rotate(45deg) skew(-10deg, -10deg) translateZ(1px);
  box-shadow: 0 5px 5px -1px rgba(0, 0, 0, .2);
}

.chat-balloon-right {
  margin-right: 20px;
  margin-left: 61px;
}
.chat-balloon-right::before,
.chat-balloon-right::after {
  content: '';
  position: absolute;
  width: 10px; height: 10px;
  right: -5px; top: 15px;
  transform: rotate(45deg) skew(-10deg, -10deg) translateZ(1px);
}
.chat-balloon-right::after {
  background: linear-gradient(225deg, #4ea07c 51%, transparent 51%);
  transform: rotate(45deg) skew(-10deg, -10deg) translateZ(1px);
  box-shadow: 6px 2px 6px -2px rgba(0, 0, 0, .3);
}
</style>

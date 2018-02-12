<template>
<div class="chat-app md-elevation-10">
  <vue-headful title="ブドウさん - チャット"/>
  <div class="chat-left">
    <div class="chat-user">
      <md-avatar>
        <img src="../../../static/user.jpg" alt="People">
      </md-avatar>
      {{manager.user._id}}
    </div>
    <div class="chat-tabs md-layout">
      <div class="md-layout-item">
        <div class="one-tab">
          <md-icon class="md-accent">forum</md-icon>
        </div>
      </div>
      <div class="md-layout-item">
        <div class="one-tab right-tab">
          <md-icon class="icon-color">recent_actors</md-icon>
        </div>
      </div>
    </div>
    <div class="chat-rooms">
      <md-list>
        <md-list-item :class="{'room-list-item': true, 'active': selected && room._id === selected._id}" @click="joinRoom(room)" v-for="room in rooms" :key="room._id">
          <md-icon class="icon-color">forum</md-icon>
          <div class="room-info">
          <span class="md-list-item-text">{{room.name}}</span>
          <span class="md-list-item-text sub-info">sub title</span>
          </div>
        </md-list-item>
      </md-list>
    </div>
  </div>
  <div class="chat-right">
    <div class="chat-users">
      <md-menu md-align-trigger>
        <md-button md-menu-trigger>
          {{selected ? selected.name : ''}} <md-icon>keyboard_arrow_down</md-icon>
        </md-button>

        <md-menu-content>
          <md-menu-item>五十嵐東海林太郎</md-menu-item>
          <md-menu-item>ナースカリスマ</md-menu-item>
          <md-menu-item>リリナー</md-menu-item>
        </md-menu-content>
      </md-menu>
    </div>
    <div class="chat-messages direct-chat">

      <div class="direct-chat-messages" ref="directChatMessages">

        <div :class="{'direct-chat-msg': true, 'right': chat.user === manager.user._id}" v-for="chat in manager.chatService.getChats()" :key="chat._id">
          <div class="direct-chat-info">
            <span class="direct-chat-name">{{chat.user}}</span>
            <!-- <span class="direct-chat-timestamp">{{chat.chatTime}}</span> -->
          </div>
          <img class="direct-chat-img" src="../../../static/user.jpg" alt="message user image">
          <md-content :class="{'md-primary': chat.user === manager.user._id, 'direct-chat-text': true}">
            {{chat.text}}
          </md-content>
        </div>

      </div>
      <div class="chat-input">
        <div class="chat-tools">
          <div>
            <md-icon>burst_mode</md-icon>
          </div>
        </div>
        <div class="chat-text">
          <md-field>
            <md-textarea v-model="chatText" @keyup.enter.native="sendChat()" md-textarea></md-textarea>
          </md-field>
        </div>
        <div class="chat-send">
          <md-button class="md-raised md-primary" @click="sendChat()"><md-icon>send</md-icon> Send</md-button>
        </div>
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
  data: () => ({
    selected: null,
    rooms: [
      {_id: '1', name: 'ロマンチックアップルロマンチックアップルロマンチックアップルロマンチックアップル'},
      {_id: '2', name: 'リリナー'},
      {_id: '3', name: '田中竜'},
      {_id: '4', name: '中田龍'},
      {_id: '5', name: 'ナースカリスマ'},
      {_id: '6', name: 'おたくの神'},
      {_id: '7', name: '五十嵐東海林太郎'},
      {_id: '8', name: 'ハウスマン'},
      {_id: '10', name: '五十嵐東海林太郎'},
      {_id: '11', name: '五十嵐東海林太郎'},
      {_id: '12', name: '五十嵐東海林太郎'},
      {_id: '13', name: '五十嵐東海林太郎'},
      {_id: '14', name: '五十嵐東海林太郎'},
      {_id: '15', name: '五十嵐東海林太郎'},
      {_id: '16', name: '五十嵐東海林太郎'},
      {_id: '17', name: '五十嵐東海林太郎'},
      {_id: '18', name: '五十嵐東海林太郎'},
      {_id: '19', name: '五十嵐東海林太郎'},
      {_id: '20', name: '五十嵐東海林太郎'}
    ],
    chatText: ''
  }),
  mounted () {
    const self = this
    this.$refs.directChatMessages.scrollTop = this.$refs.directChatMessages.scrollHeight
    utils.event.$on('SCROLL_CHAT', () => {
      self.$nextTick(() => {
        self.$refs.directChatMessages.scrollTop = self.$refs.directChatMessages.scrollHeight
      })
    })
  },
  beforeDestroy () {
    utils.event.$off('SCROLL_CHAT')
  },
  methods: {
    joinRoom (room) {
      this.selected = room
    },
    sendChat () {
      manager.socketer.emit('sendChat', {_id: '' + (manager.chatService.getChats().length + 1), text: this.chatText, chatTime: 1518241737198})
      this.chatText = ''
    }
  }
}
</script>

<style scoped>
.chat-app {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  min-width: 600px;
  max-width: 1000px;
  min-height: 700px;
  display: flex;
  justify-content: flex-start;
}
.chat-left {
  width: 280px;
  height: 100%;
  background: #111;
  color: #fff;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.chat-right {
  width: 100%;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.chat-user {
  height: 76px;
  padding: 18px;
}
.chat-tabs {
  height: 40px;
}
.chat-rooms {
  height: calc(100% - 76px - 40px);
}
.chat-users {
  height: 50px;
  padding: 10px 0px 10px 0px;
  margin: 0px 19px 0px 19px;
  border-bottom: #d6d6d6 solid 1px;
  display: flex;
  justify-content: center;
}
.chat-messages {
  height: calc(100% - 50px);
}

.md-avatar {
  margin-right: 5px;
}
.one-tab {
  margin: 5px 0 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.right-tab {
  border-left: solid 1px #333;
}
.room-info {
  width: 100%;
}
.sub-info {
  color: #888 !important;
}
.md-list {
  padding: 0px;
  border-top: #000 1px solid;
  border-bottom: #000 1px solid;
  height: 100%;
  overflow-y: auto;
}
.room-list-item {
  background: #111;
  border-bottom: #111 1px solid;
}
.icon-color {
  color: #fff !important;
}
.md-list-item-text {
  color: #fff;
  font-size: 12px;
}
.active {
  opacity: 0.95;
}

.chat-input {
  height: 180px;
  margin: 0px 19px 0px 19px;
  border-top: #d6d6d6 1px solid;
}
.chat-tools {
  height: 40px;
  display: flex;
  justify-content: flex-start;
}
.md-field {
  padding: 5px 0 5px 0;
  margin: 0;
  margin-bottom: 10px;
}
textarea {
  resize: none !important;
  min-height: 60px !important;
}
.chat-send {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.direct-chat {
  position: relative;
  overflow-x: hidden;
}
.direct-chat-messages {
  height: calc(100% - 180px);
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
  padding: 10px;
  overflow: auto;
}
.direct-chat-msg,
.direct-chat-text {
  display: block;
}
.direct-chat-msg {
  margin-bottom: 10px;
}
.direct-chat-msg:before,
.direct-chat-msg:after {
  content: " ";
  display: table;
}
.direct-chat-msg:after {
  clear: both;
}
.direct-chat-msg:before,
.direct-chat-msg:after {
  content: " ";
  display: table;
}
.direct-chat-msg:after {
  clear: both;
}
.direct-chat-messages {
  -webkit-transition: -webkit-transform 0.5s ease-in-out;
  -moz-transition: -moz-transform 0.5s ease-in-out;
  -o-transition: -o-transform 0.5s ease-in-out;
  transition: transform 0.5s ease-in-out;
}
.direct-chat-text {
  border-radius: 5px;
  position: relative;
  padding: 5px 10px;
  background: #d2d6de;
  border: 1px solid #d2d6de;
  margin: 5px 0 0 50px;
  color: #444444;
}
.direct-chat-text:after,
.direct-chat-text:before {
  position: absolute;
  right: 100%;
  top: 15px;
  border: solid transparent;
  border-right-color: #d2d6de;
  content: ' ';
  height: 0;
  width: 0;
  pointer-events: none;
}
.direct-chat-text:after {
  border-width: 5px;
  margin-top: -5px;
}
.direct-chat-text:before {
  border-width: 6px;
  margin-top: -6px;
}
.right .direct-chat-text {
  margin-right: 50px;
  margin-left: 0;
}
.right .direct-chat-text:after,
.right .direct-chat-text:before {
  right: auto;
  left: 100%;
  border-right-color: transparent;
  border-left-color: #7e57c2;
}
.direct-chat-img {
  border-radius: 50%;
  float: left;
  width: 40px;
  height: 40px;
}
.right .direct-chat-img {
  float: right;
}
.direct-chat-info {
  display: flex;
  margin: 0 10px 2px 10px;
  font-size: 12px;
  justify-content: flex-start;
}
.right .direct-chat-info {
  justify-content: flex-end;
}
.direct-chat-name {
  font-weight: 600;
}
.direct-chat-timestamp {
  color: #999;
}
</style>

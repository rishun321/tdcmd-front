<template>
<div class="chat-app md-elevation-10">
  <vue-headful title="ブドウさん - チャット"/>
  <div class="chat-left">
    <div class="chat-user">
      <md-avatar>
        <img src="static/user.jpg" alt="People">
      </md-avatar>
      {{manager.user._id}}
    </div>
    <div class="chat-rooms">
      rooms
    </div>
  </div>
  <div class="chat-right">
    <div class="chat-users">
      users
    </div>
    <div class="chat-messages">
      rooms
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['manager']
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
.chat-rooms {
  height: calc(100% - 76px);
}
.chat-users {
  height: 50px;
  padding: 10px 0px 10px 0px;
  margin: 0px 19px 0px 19px;
  border-bottom: #d6d6d6 solid 1px;
}
.chat-messages {
  height: calc(100% - 50px);
}

.md-avatar {
  margin-right: 5px;
}
</style>

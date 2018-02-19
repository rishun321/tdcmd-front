<template>
<md-content class="room-list md-scrollbar">
  <md-list>
    <md-list-item v-for="room in manager.chatService.rooms" :key="room._id" :class="{'active': manager.chatService.room && room._id === manager.chatService.room._id}" @click="joinRoom(room)">
      <md-avatar>
        <img :src="room.avatar" alt="Avatar">
      </md-avatar>
      <span class="md-list-item-text">{{room.name}}</span>
    </md-list-item>
  </md-list>
</md-content>
</template>

<script>
import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'
export default {
  props: ['manager'],
  methods: {
    joinRoom (room) {
      manager.chatService.room = room
      utils.event.$emit('SCROLL_CHAT')
    }
  }
}
</script>

<style scoped>
.room-list {
  height: calc(100% - 48px);
  overflow-y: auto;
}
.active {
  background: #ddd;
}
</style>

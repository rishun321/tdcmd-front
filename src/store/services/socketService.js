import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'
import io from 'socket.io-client/dist/socket.io.js'

class SocketService {
  constructor () {
    this.socket = null
    this.oldSocketID = null
  }
  emit (event, params) {
    if (!this.isOnline()) {
      return
    }
    this.socket.emit(event, params)
  }
  isOnline () {
    return this.socket !== null && this.socket.connected
  }
  on (next) {
    const self = this
    self.socket = io(process.env.API_URL)

    self.socket.on('connect', () => {
      if (self.oldSocketID) {
        this.emit('reinit', {oldSocketID: self.oldSocketID, user: manager.user._id})
      }
      self.oldSocketID = self.socket.id
      next()
    })
    self.socket.on('disconnect', () => {
      // utils.event.$emit('SHOW_MESSAGE', {code: 'S005'})
    })
    self.socket.on('processError', (error) => {
      utils.event.$emit('SHOW_MESSAGE', error)
    })
    self.socket.on('authenticateError', () => {
      utils.router.push({name: 'error'})
    })
    self.socket.on('reinited', () => {
      utils.event.$emit('RECONNECTED')
    })

    self.socket.on('receiveChat', (chat) => {
      manager.chatService.addChat(chat)
      utils.event.$emit('SCROLL_CHAT')
    })
  }
  off () {
    if (this.isOnline()) {
      this.socket.disconnect()
      this.socket = null
      this.oldSocketID = null
    }
  }
}

export default new SocketService()

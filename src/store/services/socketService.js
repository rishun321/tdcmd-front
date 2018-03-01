import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'
import io from 'socket.io-client/dist/socket.io.js'

class SocketService {
  constructor () {
    this.socket = null
    this.oldSocketID = null
  }

  // write all business logic (of socket) here
  business () {
    const self = this
    self.on('receiveChat', (chat) => {
      manager.chatService.room.chat(chat)
      utils.event.$emit('SCROLL_CHAT')
    })
  }

  online (next) {
    const self = this
    self.socket = io(process.env.API_URL)

    self.socket.on('connect', () => {
      if (self.oldSocketID) {
        self.emit('reinit', {oldSocketID: self.oldSocketID, user: manager.user._id})
      }
      self.oldSocketID = self.socket.id
      next()
    })
    self.socket.on('disconnect', () => {
      // utils.event.$emit('SHOW_MESSAGE', {code: 'S005'})
    })

    self.on('processError', (error) => {
      utils.event.$emit('SHOW_MESSAGE', error)
    })
    self.on('authenticateError', () => {
      utils.router.push({name: 'error'})
    })
    self.on('reinited', (data) => {
      utils.event.$emit('RECONNECTED', data)
    })

    self.business()
  }
  offline () {
    if (this.isOnline()) {
      this.socket.disconnect()
      this.socket = null
      this.oldSocketID = null
    }
  }
  isOnline () {
    return this.socket !== null && this.socket.connected
  }
  emit (event, params) {
    if (!this.isOnline()) {
      return
    }
    utils.event.$emit('LOCK_SCREEN', 'lock')
    this.socket.emit(event, params)
  }
  on (event, next) {
    let origin = next
    next = (...args) => {
      utils.event.$emit('LOCK_SCREEN', 'unlock')
      return origin.apply(this, args)
    }
    this.socket.on(event, next)
  }
}

export default new SocketService()

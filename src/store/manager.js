import consts from './consts'
import controller from './controller.js'
import user from './user.js'

import socketService from './services/socketService.js'
import chatService from './services/chatService.js'
import buyRequestService from './services/buyRequestService.js'

class Manager {
  constructor () {
    this.const = consts
    this.controller = controller
    this.user = user

    this.socketService = socketService
    this.chatService = chatService
    this.buyRequestService = buyRequestService
  }
  login (data, next) {
    this.user.login(data.user)
    this.socketService.on(next)
  }
  logout () {
    this.user.logout()
    this.socketService.off()
  }
}

export default new Manager()

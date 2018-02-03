import Const from './consts'
import Controller from './models/controller.js'
import User from './models/user.js'

class Manager {
  constructor () {
    this.const = new Const()
    this.controller = new Controller()
    this.user = new User()
  }
  login (data, next) {
    this.user.login(data.user)
    next()
  }
  logout () {
    this.user.logout()
  }
}

export default new Manager()

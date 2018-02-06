import Const from './consts'
import Controller from './models/controller.js'
import Socketer from './models/socketer.js'
import User from './models/user.js'

class Manager {
  constructor () {
    this.const = new Const()
    this.controller = new Controller()
    this.socketer = new Socketer()
    this.user = new User()
  }
  login (data, next) {
    this.user.login(data.user)
    this.socketer.on(next)
  }
  logout () {
    this.user.logout()
    this.socketer.off()
  }
}

export default new Manager()

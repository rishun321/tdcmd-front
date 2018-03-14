import utils from '@/tool/utils.js'
import consts from './consts'
import user from './user.js'

import pageService from './services/pageService.js'

class Manager {
  constructor () {
    const that = this

    this.const = consts
    this.user = user

    this.pageService = pageService

    this.locker = 'unlock'
    utils.event.$on('LOCK_SCREEN', (locker) => {
      that.locker = locker
    })
  }
  login (data, next) {
    this.user.login(data.user)
    next()
  }
  anonymousLogin () {
    this.user.login({})
  }
  logout () {
    this.user.logout()
  }
  checkAuth (route) {
    const that = this
    if (!that.user || !that.user.isLogin) {
      if (route) {
        utils.router.push({name: 'loading', query: {path: route.fullPath}})
      } else {
        utils.router.push({name: 'loading'})
      }
    } else {
      if (this.const.authority[this.user.role].indexOf(route.name) < 0) {
        utils.router.push({name: 'login', query: {path: route.fullPath}})
      }
    }
    return true
  }
}

export default new Manager()

import utils from '@/tool/utils.js'
import consts from './consts'
import user from './user.js'

import eventService from './services/eventService.js'
import photoService from './services/photoService.js'
import inquiryService from './services/inquiryService.js'

class Manager {
  constructor () {
    const that = this

    this.const = consts
    this.user = user

    this.eventService = eventService
    this.photoService = photoService
    this.inquiryService = inquiryService

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
    this.user.login({
      _id: '匿名',
      role: '0'
    })
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
        utils.router.push({name: 'signin', query: {path: route.fullPath}})
      }
    }
    return true
  }
}

export default new Manager()

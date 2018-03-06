import utils from '@/tool/utils.js'
import consts from './consts'
// import user from './user.js'

import pageService from './services/pageService.js'

class Manager {
  constructor () {
    const self = this

    this.const = consts
    // this.user = user

    this.pageService = pageService

    this.locker = 'unlock'
    utils.event.$on('LOCK_SCREEN', (locker) => {
      self.locker = locker
    })
  }
  // login (data, next) {
  //   this.user.login(data.user)
  //   this.socketService.online(next)
  // }
  // logout () {
  //   this.user.logout()
  //   this.socketService.offline()
  // }
  // checkAuth (route) {
  //   if (!this.user) return false
  //   if (!this.user.isLogin()) {
  //     if (route) {
  //       utils.router.push({name: 'loading', query: {path: route.fullPath}})
  //     } else {
  //       utils.router.push({name: 'loading'})
  //     }
  //   }
  //   return this.user.isLogin()
  // }
}

export default new Manager()

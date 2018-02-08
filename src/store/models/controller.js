import manager from '@/store/manager.js'
import utils from '@/tool/utils.js'

class Controller {
  constructor () {
    const self = this
    this.locker = 'unlock'
    utils.event.$on('LOCK_SCREEN', (locker) => {
      self.locker = locker
    })
    this.currentApp = ''
  }
  setApp (route) {
    const blocks = route.path.replace('/', '').split('/')
    const target = blocks[0] ? blocks[0] : ''
    this.currentApp = target || 'home'
  }
  checkAuth (route) {
    if (!manager.user.isLogin()) {
      if (route) {
        utils.router.push({name: 'loading', query: {path: route.fullPath}})
      } else {
        utils.router.push({name: 'loading'})
      }
    }
    return manager.user.isLogin()
  }
}

export default Controller
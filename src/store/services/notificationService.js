import utils from '@/tool/utils.js'
import Notification from '@/store/models/notification.js'

class NotificationService {
  constructor () {
    this._notifications = []
    this._count = 0
    this._page = 0
    this._notification = null
  }
  get notifications () {
    return this._notifications
  }
  set notifications (notifications) {
    if (notifications) {
      notifications.forEach(one => {
        // 重複を削除
        this._notifications.filter(notification => {
          return notification._id === one._id
        })
        // リストに追加
        this._notifications.push(new Notification(one))
      })
    }
  }
  get count () {
    return this._count
  }
  set count (data) {
    this._count = parseInt(data)
  }
  get page () {
    return this._page
  }
  set page (data) {
    this._page = parseInt(data)
  }
  get notification () {
    return this._notification
  }
  set notification (notification) {
    if (notification) {
      this._notification = new Notification(notification)
    } else {
      this._notification = null
    }
  }

  init () {
    this._notifications.splice(0, this._notifications.length)
    this.count = 0
    this.page = 0
    this.notification = null
  }

  findNotifications (filter, sort, page, next) {
    let that = this
    utils.restGet('/public/findNotifications', {filter: filter, sort: sort, page: page}).then(
      response => {
        if (response) {
          that.count = response.count
          that.notifications = response.notifications
          if (next) next()
        }
      }
    )
  }

  loadNotifications = (to, from, next) => {
    this.init()
    this.findNotifications(null, null, null, next)
  }

  moreNotifications (next) {
    let that = this
    this.findNotifications(null, null, that.page + 1, () => {
      that.page += 1
      if (next) next()
    })
  }

  loadNotificationForEdit = (to, from, next) => {
    let that = this
    that.init()
    const reg = /[0-9A-Fa-f]{24}/g
    if (to.params.id && to.params.id !== 'new' && reg.test(to.params.id)) {
      that.findNotifications({_id: to.params.id}, null, null, () => {
        if (that.notifications.length > 0) {
          that._notification = that.notifications[0]
          if (next) next()
        } else {
          utils.event.$emit('SHOW_MESSAGE', {code: 'B001', detail: '対象を参照する権限がないか、対象が削除されたか、いくつかの原因が考えられます。'}, () => {
            utils.router.push({path: '/'})
          })
        }
      })
    } else if (to.params.id && to.params.id === 'new') {
      that.notification = {}
      if (next) next()
    } else {
      utils.event.$emit('SHOW_MESSAGE', {code: 'B005', detail: 'IDが間違っています。'}, () => {
        utils.router.push({path: '/'})
      })
    }
  }

  loadNotificationForDetail = (to, from, next) => {
    let that = this
    that.init()
    const reg = /[0-9A-Fa-f]{24}/g
    if (to.params.id && reg.test(to.params.id)) {
      that.findNotifications({_id: to.params.id}, null, null, () => {
        if (that.notifications.length > 0) {
          that._notification = that.notifications[0]
          if (next) next()
        } else {
          utils.event.$emit('SHOW_MESSAGE', {code: 'B001', detail: '対象を参照する権限がないか、対象が削除されたか、いくつかの原因が考えられます。'}, () => {
            utils.router.push({path: '/'})
          })
        }
      })
    } else {
      utils.event.$emit('SHOW_MESSAGE', {code: 'B005', detail: 'IDが間違っています。'}, () => {
        utils.router.push({path: '/'})
      })
    }
  }

  insertNotification (notification, next) {
    utils.restPut('/private/insertNotification', notification).then(savedNotification => {
      if (savedNotification) {
        if (next) next()
      }
    })
  }

  updateNotification (notification, next) {
    utils.restPost('/private/updateNotification', notification).then(savedNotification => {
      if (savedNotification) {
        if (next) next()
      }
    })
  }

  deleteNotification (notification, next) {
    utils.restPost('/private/deleteNotification', {_id: notification._id}).then(savedNotification => {
      if (savedNotification) {
        if (next) next()
        utils.event.$emit('SHOW_MESSAGE', {code: 'I003'})
      }
    })
  }
}

export default new NotificationService()

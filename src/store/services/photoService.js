import utils from '@/tool/utils.js'
import Photo from '@/store/models/photo.js'

class PhotoService {
  constructor () {
    this._photos = []
    this._count = 0
    this._page = 0
    this._photo = null
  }
  get photos () {
    return this._photos
  }
  set photos (photos) {
    if (photos) {
      photos.forEach(one => {
        // 重複を削除
        this._photos.filter(photo => {
          return photo._id === one._id
        })
        // リストに追加
        this._photos.push(new Photo(one))
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
  get photo () {
    return this._photo
  }
  set photo (photo) {
    if (photo) {
      this._photo = new Photo(photo)
    } else {
      this._photo = null
    }
  }

  init () {
    this._photos.splice(0, this._photos.length)
    this.count = 0
    this.page = 0
    this.photo = null
  }

  findPhotos (filter, sort, page, next) {
    let that = this
    utils.restGet('/public/findPhotos', {filter: filter, sort: sort, page: page}).then(
      response => {
        if (response) {
          that.count = response.count
          that.photos = response.photos
          if (next) next()
        }
      }
    )
  }

  loadPhotos = (to, from, next) => {
    this.init()
    this.findPhotos(null, null, null, next)
  }

  morePhotos (next) {
    let that = this
    this.findPhotos(null, null, that.page + 1, () => {
      that.page += 1
      if (next) next()
    })
  }

  loadPhotoForEdit = (to, from, next) => {
    let that = this
    that.init()
    const reg = /[0-9A-Fa-f]{24}/g
    if (to.params.id && to.params.id !== 'new' && reg.test(to.params.id)) {
      that.findPhotos({_id: to.params.id}, null, null, () => {
        if (that.photos.length > 0) {
          that._photo = that.photos[0]
          if (next) next()
        } else {
          utils.event.$emit('SHOW_MESSAGE', {code: 'B001', detail: '対象を参照する権限がないか、対象が削除されたか、いくつかの原因が考えられます。'}, () => {
            utils.router.push({path: '/'})
          })
        }
      })
    } else if (to.params.id && to.params.id === 'new') {
      that.photo = {}
      if (next) next()
    } else {
      utils.event.$emit('SHOW_MESSAGE', {code: 'B005', detail: 'IDが間違っています。'}, () => {
        utils.router.push({path: '/'})
      })
    }
  }

  loadPhotoForDetail = (to, from, next) => {
    let that = this
    that.init()
    const reg = /[0-9A-Fa-f]{24}/g
    if (to.params.id && reg.test(to.params.id)) {
      that.findPhotos({_id: to.params.id}, null, null, () => {
        if (that.photos.length > 0) {
          that._photo = that.photos[0]
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

  insertPhoto (photo, next) {
    utils.restPut('/private/insertPhoto', photo).then(savedPhoto => {
      if (savedPhoto) {
        if (next) next()
      }
    })
  }

  updatePhoto (photo, next) {
    utils.restPost('/private/updatePhoto', photo).then(savedPhoto => {
      if (savedPhoto) {
        if (next) next()
      }
    })
  }

  deletePhoto (photo, next) {
    utils.restPost('/private/deletePhoto', {_id: photo._id}).then(savedPhoto => {
      if (savedPhoto) {
        if (next) next()
        utils.event.$emit('SHOW_MESSAGE', {code: 'I003'})
      }
    })
  }
}

export default new PhotoService()

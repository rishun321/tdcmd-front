// import utils from '@/tool/utils.js'
import Photo from '@/store/models/photo.js'

class PhotoService {
  constructor () {
    this._photos = []
    this._count = 0
    this._page = 0
    this._selectedPhoto = null
  }

  get photos () {
    return this._photos
  }
  set photos (datas) {
    if (datas) {
      datas.forEach(one => {
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
  get selectedPhoto () {
    return this._selectedPhoto
  }
  set selectedPhoto (data) {
    this._selectedPhoto = new Photo(data)
  }

  init () {
    this._photos.splice(0, this._photos.length)
    this._count = 0
    this._page = 0
    this.selectedPhoto = null
  }
}

export default new PhotoService()

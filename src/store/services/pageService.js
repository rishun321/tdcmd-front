import utils from '@/tool/utils.js'
import Page from '@/store/models/page.js'

class PageService {
  constructor () {
    this._pages = []
    this._count = 0
    this._editpage = null
  }
  get pages () {
    return this._pages
  }
  set pages (datas) {
    datas.forEach(one => {
      this._pages.push(new Page(one))
    })

    this.count = this._pages.length
  }
  get count () {
    return this._count
  }
  set count (data) {
    this._count = parseInt(data)
  }
  get editpage () {
    return this._editpage
  }
  set editpage (data) {
    this._editpage = new Page(data)
  }

  init () {
    this._pages.splice(0, this._pages.length)
    this._count = 0
  }

  async publishPage (page) {
    await utils.restPut('/api/insertPage', page)
  }

  async updateSellPiece (param) {
    await utils.restPost('/api/updatePage', param)
  }

  async findPage (param) {
    let that = this
    await utils.restGet('/api/findPages', param).then(pages => {
      that.pages = pages
      return pages
    })
  }

  getPageByID (id) {
    let that = this
    let onePage = that._pages.some(one => {
      if (one.id === id) {
        return one
      }
    })
    return onePage
  }
}

export default new PageService()

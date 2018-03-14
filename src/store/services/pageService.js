import utils from '@/tool/utils.js'
import Page from '@/store/models/page.js'

class PageService {
  constructor () {
    this._pages = []
    this._count = 0
    this._editpage = null
    this._pagesize = 3
    this._pageindex = 1
  }

  get pages () {
    return this._pages
  }
  set pages (datas) {
    datas.forEach(one => {
      this._pages.push(new Page(one))
    })
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

  get pagesize () {
    return this._pagesize
  }
  set pagesize (data) {
    this._pagesize = parseInt(data)
  }

  get pageindex () {
    return this._pageindex
  }
  set pageindex (data) {
    this._pageindex = parseInt(data)
  }

  init () {
    this._pages.splice(0, this._pages.length)
    this._count = 0
    this._lastid = ['']
  }

  async publishPage (page) {
    await utils.restPut('/private/insertPage', page)
  }

  async updatePage (param) {
    await utils.restPost('/private/updatePage', param)
  }

  async findPage (type, page) {
    let that = this

    let param = {}

    console.log('that._lastid.length:' + that._lastid.length)

    if (page === that._lastid.length + 1) {
      that._lastid[page - 1] = that.pages[that.pages.length - 1]._id
    }

    if (page > 1) {
      console.log('page:' + page)
      console.log('that._lastid:')
      console.log(that._lastid)
      console.log('pagedata:' + page)
      param.paging = {_id: that._lastid[page - 1]}
      console.log(param)
    }

    param.filter = {type: type}

    await utils.restGet('/private/findPages', param).then(response => {
      console.log(response)
      that._pages.splice(0, this._pages.length)
      that.pages = response.pages
    })
  }

  async removePage (type, param) {
    await utils.restDelete('/private/removePage', param).then(result => {
      if (result.ok > 0) {
        let i = 0
        for (;i < this._pages.length; i++) {
          if (this._pages[i].id === param.id) {
            break
          }
        }
        this._pages.splice(i, 1)
        this.count = this.count - 1
        // console.log('i:' + i)
        // let page = Math.round(i / this._pagesize)
        console.log('this._pageindex:' + this._pageindex)
        if (this._lastid.length > 1 && this._pageindex > 1) {
          this._lastid.splice(this._pageindex, this._lastid.length - this._pageindex)
          console.log('this._lastid:')
          console.log(this._lastid)
        }
      }
    })

    await this.findPage(type, this._pageindex)
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

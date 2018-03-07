import moment from 'moment'

class Page {
  constructor (data) {
    this._id = data._id
    this._type = data._type // event, photo
    this._createdate = data.createdate
    this._title = data.title
    this._subhead = data.subhead
    this._trimpicture = data.trimpicture
    this._contenthtml = data.contenthtml
  }
  get id () {
    return this._id
  }
  get createDate () {
    return this._createdate ? this._createdate.format('YYYY年MM月DD日') : null
  }
  set residentable (data) {
    this._createdate = moment(data)
  }

  get type () {
    return this._type ? this._type : 'event'
  }
  get typename () {
    return this.type === 'イベント' ? '' : '活動の写真'
  }
  set type (data) {
    this._type = data
  }

  get title () {
    return this._title
  }
  set title (data) {
    this._title = data
  }
  get subhead () {
    return this._subhead
  }
  set subhead (data) {
    this._subhead = data
  }

  get trimpicture () {
    return this._trimpicture
  }
  set trimpicture (data) {
    this._trimpicture = data
  }

  get contenthtml () {
    return this._contenthtml
  }
  set contenthtml (data) {
    this._contenthtml = data
  }
  toJSON () {
    return {
      _id: this._id,
      createdate: this.createdate,
      type: this.type,
      title: this._title,
      subhead: this._subhead,
      trimpicture: this._trimpicture,
      contenthtml: this._contenthtml
    }
  }
}

export default Page

import moment from 'moment'

class Event {
  constructor (data) {
    this._id = data._id
    this.title = data.title
    this.thumbnail = data.thumbnail
    this.contenthtml = data.contenthtml
    this._cdate = null
    if (data.cdate) this.cdate = data.cdate
    this._udate = null
    if (data.udate) this.udate = data.udate
  }
  get id () {
    return this._id
  }
  get cdate () {
    return this._cdate ? this._cdate.valueOf() : null
  }
  get cdateText () {
    return this._cdate != null ? this._cdate.format('YYYY年MM月DD日') : '-'
  }
  set cdate (data) {
    if (data) this._cdate = moment(data)
    else this._cdate = null
  }
  get udate () {
    return this._udate ? this._udate.valueOf() : null
  }
  get udateText () {
    return this._udate != null ? this._udate.format('YYYY年MM月DD日') : '-'
  }
  set udate (data) {
    if (data) this._udate = moment(data)
    else this._udate = null
  }
  toJSON () {
    return {
      _id: this._id,
      title: this.title,
      thumbnail: this.thumbnail,
      contenthtml: this.contenthtml
    }
  }
}

export default Event

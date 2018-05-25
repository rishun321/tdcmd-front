// import utils from '@/tool/utils.js'
import Event from '@/store/models/event.js'

class EventService {
  constructor () {
    this._events = []
    this._count = 0
    this._page = 0
    this._selectedEvent = null
  }

  get events () {
    return this._events
  }
  set events (datas) {
    if (datas) {
      datas.forEach(one => {
        this._events.push(new Event(one))
      })
    }
  }
  get count () {
    return this._count
  }
  set count (data) {
    this._count = parseInt(data)
  }
  get selectedEvent () {
    return this._selectedEvent
  }
  set selectedEvent (data) {
    this._selectedEvent = new Event(data)
  }

  init () {
    this._events.splice(0, this._events.length)
    this._count = 0
    this._page = 0
    this.selectedEvent = null
  }
}

export default new EventService()

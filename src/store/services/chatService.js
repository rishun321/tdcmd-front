// import utils from '@/tool/utils.js'
import ChatRoom from '@/store/models/chatRoom.js'

class ChatService {
  constructor () {
    this._rooms = []
    this.room = null
  }
  get rooms () {
    return this._rooms
  }
  set rooms (rooms) {
    rooms.forEach(one => {
      this._rooms.push(new ChatRoom(one))
    })
  }

  init () {
    this.room = null
    this._rooms.splice(0, this._rooms.length)
  }
}

export default new ChatService()

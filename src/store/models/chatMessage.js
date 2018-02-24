import moment from 'moment'

class ChatMessage {
  constructor (data) {
    this._id = data._id
    this.user = data.user
    this.avatar = 'static/user.jpg'
    this._chatTime = null
    this.chatTime = data.chatTime
    this._texts = []
    this.texts = data.text
  }
  get chatTime () {
    return this._chatTime
  }
  set chatTime (data) {
    this._chatTime = moment(data).format('YYYY/MM/DD HH:mm:ss')
  }
  get texts () {
    return this._texts
  }
  set texts (data) {
    if (data) this._texts = data.split('\n')
  }
}

export default ChatMessage

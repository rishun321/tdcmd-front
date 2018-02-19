import moment from 'moment'

class ChatRoom {
  constructor (data) {
    this._id = data._id
    this.name = data.name
    this.avatar = 'static/user.jpg'
    this.chats = [
      {_id: '1', avatar: 'static/user.jpg', texts: ['これはテストです。'], user: 'rrrr', chatTime: moment(new Date(1518241737198)).format('YYYY/MM/DD HH:mm:ss')},
      {_id: '2', avatar: 'static/user.jpg', texts: ['これはテスト2です。'], user: 'sss'},
      {_id: '3', avatar: 'static/user.jpg', texts: ['これはテスト3です。'], user: 'rrrr', chatTime: moment(new Date(1518241737198)).format('YYYY/MM/DD HH:mm:ss')},
      {_id: '4', avatar: 'static/user.jpg', texts: ['これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。'], user: 'kkkk', chatTime: moment(new Date(1518241737198)).format('YYYY/MM/DD HH:mm:ss')},
      {_id: '5', avatar: 'static/user.jpg', texts: ['これはテスト5です。'], user: 'rrrr'},
      {_id: '6', avatar: 'static/user.jpg', texts: ['これはテスト6です。これはテスト6です。これはテスト6です。これはテスト6です。'], user: 'ttt', chatTime: moment(new Date(1518241737198)).format('YYYY/MM/DD HH:mm:ss')},
      {_id: '7', avatar: 'static/user.jpg', texts: ['これはテスト7です。'], user: 'rrrr', chatTime: moment(new Date(1518241737198)).format('YYYY/MM/DD HH:mm:ss')},
      {_id: '8', avatar: 'static/user.jpg', texts: ['これはテスト8です。これはテスト8です。'], user: 'rrrr', chatTime: moment(new Date(1518241737198)).format('YYYY/MM/DD HH:mm:ss')},
      {_id: '9', avatar: 'static/user.jpg', texts: ['これはテスト9です。'], user: 'mmmm'},
      {_id: '10', avatar: 'static/user.jpg', texts: ['これはテスト10です。'], user: 'rrrr', chatTime: moment(new Date(1518241737198)).format('YYYY/MM/DD HH:mm:ss')},
      {_id: '11', avatar: 'static/user.jpg', texts: ['これはテスト11です。これはテスト11です。これはテスト11です。これはテスト11です。これはテスト11です。これはテスト11です。これはテスト11です。'], user: 'rrrr'}
    ]
  }
  chat (chat) {
    chat.avatar = 'static/user.jpg'
    chat.chatTime = moment(new Date(chat.chatTime)).format('YYYY/MM/DD HH:mm:ss')
    chat.texts = chat.text.split('\n')
    this.chats.push(chat)
  }
}

export default ChatRoom

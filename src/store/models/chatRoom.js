import ChatMessage from './ChatMessage.js'

class ChatRoom {
  constructor (data) {
    this._id = data._id
    this.name = data.name
    this.avatar = 'static/user.jpg'
    this.chats = []

    let tmp = [
      {_id: '1', avatar: 'static/user.jpg', text: 'これはテストです。', user: 'rrrr'},
      {_id: '2', avatar: 'static/user.jpg', text: 'これはテスト2です。', user: 'sss'},
      {_id: '3', avatar: 'static/user.jpg', text: 'これはテスト3です。', user: 'rrrr'},
      {_id: '4', avatar: 'static/user.jpg', text: 'これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。', user: 'kkkk'},
      {_id: '5', avatar: 'static/user.jpg', text: 'これはテスト5です。', user: 'rrrr'},
      {_id: '6', avatar: 'static/user.jpg', text: 'これはテスト6です。これはテスト6です。これはテスト6です。これはテスト6です。', user: 'ttt'},
      {_id: '7', avatar: 'static/user.jpg', text: 'これはテスト7です。', user: 'rrrr'},
      {_id: '8', avatar: 'static/user.jpg', text: 'これはテスト8です。これはテスト8です。', user: 'rrrr'},
      {_id: '9', avatar: 'static/user.jpg', text: 'これはテスト9です。', user: 'mmmm'},
      {_id: '10', avatar: 'static/user.jpg', text: 'これはテスト10です。', user: 'rrrr'},
      {_id: '11', avatar: 'static/user.jpg', text: 'これはテスト11です。これはテスト11です。これはテスト11です。これはテスト11です。これはテスト11です。これはテスト11です。これはテスト11です。', user: 'rrrr'}
    ]
    tmp.forEach(one => {
      this.chat(one)
    })
  }
  chat (chat) {
    chat.chatTime = new Date()
    this.chats.push(new ChatMessage(chat))
  }
}

export default ChatRoom

class ChatRoom {
  constructor (data) {
    this._id = data._id
    this.name = data.name
    this.avatar = 'static/user.jpg'
    this.chats = [
      {_id: '1', avatar: 'static/user.jpg', text: 'これはテストです。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '2', avatar: 'static/user.jpg', text: 'これはテスト2です。', user: 'sss', chatTime: 1518241737198},
      {_id: '3', avatar: 'static/user.jpg', text: 'これはテスト3です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '4', avatar: 'static/user.jpg', text: 'これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。これはテスト4です。', user: 'kkkk', chatTime: 1518241737198},
      {_id: '5', avatar: 'static/user.jpg', text: 'これはテスト5です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '6', avatar: 'static/user.jpg', text: 'これはテスト6です。これはテスト6です。これはテスト6です。これはテスト6です。', user: 'ttt', chatTime: 1518241737198},
      {_id: '7', avatar: 'static/user.jpg', text: 'これはテスト7です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '8', avatar: 'static/user.jpg', text: 'これはテスト8です。これはテスト8です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '9', avatar: 'static/user.jpg', text: 'これはテスト9です。', user: 'mmmm', chatTime: 1518241737198},
      {_id: '10', avatar: 'static/user.jpg', text: 'これはテスト10です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '11', avatar: 'static/user.jpg', text: 'これはテスト11です。これはテスト11です。これはテスト11です。これはテスト11です。これはテスト11です。これはテスト11です。これはテスト11です。', user: 'rrrr', chatTime: 1518241737198}
    ]
  }
}

export default ChatRoom

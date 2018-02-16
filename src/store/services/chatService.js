class ChatService {
  constructor () {
    this.chats = [
      {_id: '1', text: 'これはテストです。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '2', text: 'これはテスト2です。', user: 'sss', chatTime: 1518241737198},
      {_id: '3', text: 'これはテスト3です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '4', text: 'これはテスト3です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '5', text: 'これはテスト3です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '6', text: 'これはテスト3です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '7', text: 'これはテスト3です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '8', text: 'これはテスト3です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '9', text: 'これはテスト3です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '10', text: 'これはテスト3です。', user: 'rrrr', chatTime: 1518241737198},
      {_id: '11', text: 'これはテスト3です。', user: 'rrrr', chatTime: 1518241737198}
    ]
  }
  getChats () {
    return this.chats
  }
  addChat (chat) {
    this.chats.push(chat)
  }
}

export default new ChatService()

class User {
  constructor () {
    this._id = ''
    this.password = ''
    this.avatar = 'static/user.jpg'
    this.nickname = 'オレオレ　だよ'
    this.company = '株式会社未来夢'
    this.phone = '08022227777'
    this.comment = '頑張りま〜す！'
  }
  login (data) {
    this._id = data._id
    this.password = data.password
  }
  logout () {
    this._id = ''
    this.password = ''
  }
  isLogin () {
    return !(this._id === '')
  }
}

export default new User()

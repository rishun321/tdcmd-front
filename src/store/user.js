class User {
  constructor () {
    this._id = ''
    this.password = ''
    this.avatar = 'static/user.jpg'
    this.nickname = 'オレオレ　だよ'
    this.company = '株式会社未来夢'
    this.position = '代表取締役今年度代理'
    this.phone = '08022227777'
    this.email = 'sample.sample.sample@miraimon.com'
    this.comment = '頑張りま〜す！'
    this.address = 'oo〒114-0012 東京都北区田端新町1-7-14ビズフィールド西日暮里107oo'
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

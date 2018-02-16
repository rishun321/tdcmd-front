class User {
  constructor () {
    this._id = ''
    this.password = ''
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

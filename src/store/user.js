class User {
  constructor () {
    this._id = ''
    this.password = ''
    this.role = '0' // 0: 訪問者; 1: 管理者;
  }
  get isLogin () {
    return !(this._id === '') || (this.role === '0')
  }
  get isAdmin () {
    return this._id && this.role === '1'
  }
  login (data) {
    this._id = data._id || ''
    this.password = data.password || ''
    this.role = data.role || '0'
  }
  logout () {
    this._id = ''
    this.password = ''
    this.role = '0'
  }
  toJSON () {
    return {
      _id: this._id,
      password: this.password,
      role: this.role
    }
  }
}

export default new User()

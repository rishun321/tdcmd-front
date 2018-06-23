class User {
  constructor () {
    this._id = ''
    this.password = ''
    this.role = '0' // 0: 匿名; 1: 管理者;
  }
  get isLogin () {
    return !(this._id === '')
  }
  get isAnonymous () {
    return this._id === '匿名'
  }
  get isAdmin () {
    return this._id && this.role === '1'
  }
  login (data) {
    if (data._id != null) this._id = data._id
    if (data.password != null) this.password = data.password
    if (data.role != null) this.role = data.role
  }
  logout () {
    this._id = '匿名'
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

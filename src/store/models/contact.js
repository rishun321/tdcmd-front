class Contact {
  constructor (data) {
    this._id = data._id
    this.avatar = 'static/user.jpg'
    this.nickname = data.nickname
    this.company = data.company
    this.position = data.position
    this.phone = data.phone
    this.email = data.email
    this.comment = data.comment
    this.address = data.address
  }
}

export default new Contact()

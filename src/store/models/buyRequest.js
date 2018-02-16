class BuyRequest {
  constructor (data) {
    this._id = data._id
    this.user = data.user
    this.houseComment = data.houseComment
  }
}

export default BuyRequest

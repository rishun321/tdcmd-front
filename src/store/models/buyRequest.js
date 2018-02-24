class BuyRequest {
  constructor (data) {
    this.user = data.user
    this.houseComment = data.houseComment

    this._id = data._id
    this.agent = data.agent
    this.customer = data.customer
  }
}

export default BuyRequest

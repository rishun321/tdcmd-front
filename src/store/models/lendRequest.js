class LendRequest {
  constructor (data) {
    this._id = data._id
    this.agent = data.agent
    this.customer = data.customer
  }
}

export default LendRequest
import utils from '@/tool/utils.js'
import BuyRequest from '@/store/models/buyRequest.js'

class BuyRequestService {
  constructor () {
    this._buyRequests = []
    this._count = null
  }
  get buyRequests () {
    return this._buyRequests
  }
  set buyRequests (data) {
    this._buyRequests = []
    data.forEach(one => {
      this._buyRequests.push(new BuyRequest(one))
    })
  }
  get count () {
    return this._count
  }
  set count (data) {
    this._count = this._buyRequests.length + parseInt(data)
  }

  async sendBuyRequest (request) {
    const self = this
    await utils.restPut('/api/insertBuyRequest', request).then(
      response => {
        if (response) {
          self.addBuyRequest(response)
        }
      }
    )
  }
  addBuyRequest (request) {
    this._buyRequests.push(new BuyRequest(request))
  }
}

export default new BuyRequestService()

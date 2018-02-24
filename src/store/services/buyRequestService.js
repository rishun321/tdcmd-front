import utils from '@/tool/utils.js'
import BuyRequest from '@/store/models/buyRequest.js'

class BuyRequestService {
  constructor () {
    this._buyRequests = []
    this._count = 0
  }
  get buyRequests () {
    return this._buyRequests
  }
  set buyRequests (requests) {
    requests.forEach(one => {
      this._buyRequests.push(new BuyRequest(one))
    })
  }
  get count () {
    return this._count
  }
  set count (data) {
    this._count = this._buyRequests.length + parseInt(data)
  }

  init () {
    this._buyRequests.splice(0, this._buyRequests.length)
    this._count = 0
  }

  async publishBuyRequest (request) {
    await utils.restPut('/api/insertBuyRequest', request)
  }
}

export default new BuyRequestService()

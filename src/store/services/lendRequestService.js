import utils from '@/tool/utils.js'
import LendRequest from '@/store/models/lendRequest.js'

class LendRequestService {
  constructor () {
    this._lendRequests = []
    this._count = 0
  }
  get lendRequests () {
    return this._lendRequests
  }
  set lendRequests (requests) {
    requests.forEach(one => {
      this._lendRequests.push(new LendRequest(one))
    })
  }
  get count () {
    return this._count
  }
  set count (data) {
    this._count = this._lendRequests.length + parseInt(data)
  }

  init () {
    this._lendRequests.splice(0, this._lendRequests.length)
    this._count = 0
  }

  async publishLendRequest (request) {
    await utils.restPut('/api/insertLendRequest', request)
  }
}

export default new LendRequestService()

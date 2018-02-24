// import utils from '@/tool/utils.js'
import SellPiece from '@/store/models/sellPiece.js'
import BuyRequest from '@/store/models/buyRequest.js'
import RentPiece from '@/store/models/rentPiece.js'
import LendRequest from '@/store/models/lendRequest.js'

class MyService {
  constructor () {
    this._sellPieces = []
    this._buyRequests = []
    this._rentPieces = []
    this._lendRequests = []
  }
  get sellPieces () {
    return this._sellPieces
  }
  set sellPieces (pieces) {
    pieces.forEach(one => {
      this._sellPieces.push(new SellPiece(one))
    })
  }
  get buyRequests () {
    return this._buyRequests
  }
  set buyRequests (requests) {
    requests.forEach(one => {
      this._buyRequests.push(new BuyRequest(one))
    })
  }
  get rentPieces () {
    return this._rentPieces
  }
  set rentPieces (pieces) {
    pieces.forEach(one => {
      this._rentPieces.push(new RentPiece(one))
    })
  }
  get lendRequests () {
    return this._lendRequests
  }
  set lendRequests (requests) {
    requests.forEach(one => {
      this._lendRequests.push(new LendRequest(one))
    })
  }
  get publishedSellPieces () {
    let publishedSellPieces = []
    this._sellPieces.forEach(one => {
      if (one.published) publishedSellPieces.push(one)
    })
    return publishedSellPieces
  }
  get publishedBuyRequests () {
    let publishedBuyRequests = []
    this._buyRequests.forEach(one => {
      if (one.published) publishedBuyRequests.push(one)
    })
    return publishedBuyRequests
  }
  get publishedRentPieces () {
    let publishedRentPieces = []
    this._rentPieces.forEach(one => {
      if (one.published) publishedRentPieces.push(one)
    })
    return publishedRentPieces
  }
  get publishedLendRequests () {
    let publishedLendRequests = []
    this._lendRequests.forEach(one => {
      if (one.published) publishedLendRequests.push(one)
    })
    return publishedLendRequests
  }

  init () {
    this._sellPieces.splice(0, this._sellPieces.length)
    this._buyRequests.splice(0, this._buyRequests.length)
    this._rentPieces.splice(0, this._rentPieces.length)
    this._lendRequests.splice(0, this._lendRequests.length)
  }
}

export default new MyService()

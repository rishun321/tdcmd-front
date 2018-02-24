import utils from '@/tool/utils.js'
import SellPiece from '@/store/models/sellPiece.js'

class SellPieceService {
  constructor () {
    this._sellPieces = []
    this._count = 0
  }
  get sellPieces () {
    return this._sellPieces
  }
  set sellPieces (pieces) {
    pieces.forEach(one => {
      this._sellPieces.push(new SellPiece(one))
    })
  }
  get count () {
    return this._count
  }
  set count (data) {
    this._count = this._sellPieces.length + parseInt(data)
  }

  init () {
    this._sellPieces.splice(0, this._sellPieces.length)
    this._count = 0
  }

  async publishSellPiece (piece) {
    await utils.restPut('/api/insertSellPiece', piece)
  }
}

export default new SellPieceService()

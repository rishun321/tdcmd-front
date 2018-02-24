import utils from '@/tool/utils.js'
import RentPiece from '@/store/models/rentPiece.js'

class RentPieceService {
  constructor () {
    this._rentPieces = []
    this._count = 0
  }
  get rentPieces () {
    return this._rentPieces
  }
  set rentPieces (pieces) {
    pieces.forEach(one => {
      this._rentPieces.push(new RentPiece(one))
    })
  }
  get count () {
    return this._count
  }
  set count (data) {
    this._count = this._rentPieces.length + parseInt(data)
  }

  init () {
    this._rentPieces.splice(0, this._rentPieces.length)
    this._count = 0
  }

  async publishRentPiece (piece) {
    await utils.restPut('/api/insertRentPiece', piece)
  }
}

export default new RentPieceService()

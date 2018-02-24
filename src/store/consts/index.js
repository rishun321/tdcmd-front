import messages from './messages.json'
import stations from './stations.json'

class Const {
  constructor () {
    this.messages = messages
    this.stations = stations
  }
}

export default new Const()

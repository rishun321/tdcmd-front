import authority from './authority.json'
import messages from './messages.json'

class Const {
  constructor () {
    this.authority = authority
    this.messages = messages
  }
}

export default new Const()

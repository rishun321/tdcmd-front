// import utils from '@/tool/utils.js'
import Contact from '@/store/models/contact.js'

class ContactService {
  constructor () {
    this._contacts = []
  }
  get contacts () {
    return this._contacts
  }
  set contacts (contacts) {
    contacts.forEach(one => {
      this._contacts.push(new Contact(one))
    })
  }

  init () {
    this._contacts.splice(0, this._contacts.length)
  }
}

export default new ContactService()

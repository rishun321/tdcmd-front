import axios from 'axios/dist/axios.min.js'
import Vue from 'vue'

class Utils {
  constructor () {
    const options = {
      timeout: 120000,
      withCredentials: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      baseURL: process.env.API_URL
    }
    this.api = axios.create(options)
    this.event = new Vue()
    this.router = null
  }
  setRouter (router) {
    this.router = router
  }
  async restGet (api, params) {
    const self = this
    let responseData = null
    self.event.$emit('LOCK_SCREEN', 'lock')
    await this.api.get(api, {params: params}).then(
      response => {
        responseData = self.processResponse(response)
      }
    ).catch(
      error => {
        self.processError(error)
      }
    )
    return responseData
  }
  async restPost (api, params) {
    const self = this
    let responseData = null
    self.event.$emit('LOCK_SCREEN', 'lock')
    await this.api.post(api, params).then(
      response => {
        responseData = self.processResponse(response)
      }
    ).catch(
      error => {
        self.processError(error)
      }
    )
    return responseData
  }
  async restPut (api, params) {
    const self = this
    let responseData = null
    self.event.$emit('LOCK_SCREEN', 'lock')
    await this.api.put(api, params).then(
      response => {
        responseData = self.processResponse(response)
      }
    ).catch(
      error => {
        self.processError(error)
      }
    )
    return responseData
  }
  async restDelete (api, params) {
    const self = this
    let responseData = null
    self.event.$emit('LOCK_SCREEN', 'lock')
    await this.api.delete(api, {params: params}).then(
      response => {
        responseData = self.processResponse(response)
      }
    ).catch(
      error => {
        self.processError(error)
      }
    )
    return responseData
  }
  processResponse (response) {
    this.event.$emit('LOCK_SCREEN', 'unlock')
    if (response.status === 200 && response.data && response.data.error) {
      if (response.data.error.code === 'B002') {
        this.router.push({name: 'error'})
      } else {
        this.event.$emit('SHOW_MESSAGE', response.data.error)
      }
      return null
    } else if (response.status === 200 && response.data && !response.data.error) {
      return response.data.data || {}
    } else {
      this.processError(response)
      return null
    }
  }
  processError (detail) {
    let error = {
      code: '',
      detail: ''
    }
    const auth = 'authenticate'
    if (detail.config && detail.config.url && detail.config.url.slice(detail.config.url.length - auth.length) === auth) {
      error.code = 'B002'
    } else if (detail.request) {
      error.code = 'S001'
    } else {
      error.code = 'S002'
      let text = ''
      if (detail.response && detail.response.status) {
        text = 'status: ' + detail.response.status
        if (detail.response.statusText) {
          text += ' | statusText: ' + detail.response.statusText
        }
      }
      error.detail = text
    }
    this.event.$emit('LOCK_SCREEN', 'unlock')
    this.event.$emit('SHOW_MESSAGE', error)
  }
}

export default new Utils()

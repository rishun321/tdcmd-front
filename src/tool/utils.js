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
    await this.api.get(api, { params: params }).then(
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
    await this.api.delete(api, { params: params }).then(
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
  async uploadFile (files, fileNames, next) {
    let uploadUrl = '/uploadFiles'

    console.log('files')
    console.log(files)

    let param = new FormData()
    for (let i = 0; i < files.length; i++) {
      param.append('file[' + i + ']', files[i], fileNames[i])
    }

    let config = {
      headers: { 'Content-Type': 'multipart/form-data' }
    }
    await this.api.post(uploadUrl, param, config).then(
      response => {
        if (response.data.error) {
          self.event.$emit('SHOW_MESSAGE', response.data.error)
        } else if (response.data.data && response.data.data.length > 0) {
          next(null, response.data.data)
        }
      }
    ).catch(
      error => {
        self.processError(error)
      }
    )
  }
  processResponse (response) {
    this.event.$emit('LOCK_SCREEN', 'unlock')
    if (response.status === 200 && response.data && response.data.error) {
      if (response.data.error.code === 'B002') {
        this.router.push({ name: 'error' })
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

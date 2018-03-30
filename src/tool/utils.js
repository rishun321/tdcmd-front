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
    const that = this
    let responseData = null
    that.event.$emit('LOCK_SCREEN', 'lock')
    await this.api.get(api, {params: params}).then(
      response => {
        responseData = that.processResponse(response)
      }
    ).catch(
      error => {
        that.processError(error)
      }
    )
    return responseData
  }
  async restPost (api, params) {
    const that = this
    let responseData = null
    that.event.$emit('LOCK_SCREEN', 'lock')
    await this.api.post(api, params).then(
      response => {
        responseData = that.processResponse(response)
      }
    ).catch(
      error => {
        that.processError(error)
      }
    )
    return responseData
  }
  async restPut (api, params) {
    const that = this
    let responseData = null
    that.event.$emit('LOCK_SCREEN', 'lock')
    await this.api.put(api, params).then(
      response => {
        responseData = that.processResponse(response)
      }
    ).catch(
      error => {
        that.processError(error)
      }
    )
    return responseData
  }
  async restDelete (api, params) {
    const that = this
    let responseData = null
    that.event.$emit('LOCK_SCREEN', 'lock')
    await this.api.delete(api, {params: params}).then(
      response => {
        responseData = that.processResponse(response)
      }
    ).catch(
      error => {
        that.processError(error)
      }
    )
    return responseData
  }
  async uploadFile (file, options = {}) {
    const that = this
    const uploadUrl = '/uploadFiles'
    let responseData = null
    let param = new FormData()
    for (let key in options) {
      param.append(key, options[key])
    }
    param.append('file[0]', file.file, file.name)
    let config = {
      headers: {'Content-Type': 'multipart/form-data'},
      onUploadProgress: progressEvent => {
        file.progress = Math.floor((progressEvent.loaded * 100) / progressEvent.total)
      }
    }

    await this.api.post(uploadUrl, param, config).then(
      response => {
        responseData = that.processResponse(response, false)
      }
    ).catch(
      error => {
        that.processError(error)
      }
    )
    return responseData
  }
  processResponse (response, needUnlock = true) {
    if (response.status === 200 && response.data && response.data.error) {
      this.event.$emit('LOCK_SCREEN', 'unlock')
      if (response.data.error.code === 'B002') {
        this.router.push({name: 'error'})
      } else {
        this.event.$emit('SHOW_MESSAGE', response.data.error)
      }
      return null
    } else if (response.status === 200 && response.data && !response.data.error) {
      if (needUnlock) {
        this.event.$emit('LOCK_SCREEN', 'unlock')
      }
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
  openInNewTab (url) {
    let a = document.createElement('a')
    a.target = '_blank'
    a.href = url
    a.click()
  }
  copyToPasteboard (text) {
    let copyFrom = document.createElement('textarea')
    copyFrom.textContent = text
    let bodyElm = document.getElementsByTagName('body')[0]
    bodyElm.appendChild(copyFrom)
    copyFrom.select()
    let result = document.execCommand('copy')
    bodyElm.removeChild(copyFrom)
    return result
  }
  clone (orig) {
    return Object.assign(Object.create(Object.getPrototypeOf(orig)), orig)
  }
  formatPercentage (number) {
    if (number == null) {
      return ''
    }
    let per = Math.round(number * 100) / 100
    return per + '%'
  }
  formatMoney (number) {
    if (number == null) {
      return ''
    }
    let fixed = number.toFixed(0)
    let delimiter = '.'
    let splitedNum = fixed.toString().split(delimiter)
    let replacedNum = splitedNum[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    if (splitedNum[1]) {
      replacedNum = replacedNum + delimiter + splitedNum[1]
    }
    return replacedNum
  }
  formatHugeMoney (number) {
    if (number == null) {
      return ''
    }
    if (number > 0) {
      let tenThousand = Math.floor(number / 10000)
      let hundredMillion = Math.floor(tenThousand / 10000)
      tenThousand = tenThousand % 10000
      let text = ''
      if (hundredMillion > 0) text += hundredMillion + '億'
      if (tenThousand > 0) text += tenThousand + '万'
      let rest = number - hundredMillion * 100000000 - tenThousand * 10000
      if (rest === 0) rest = ''
      text += rest + '円'
      return text
    } else if (number < 0) {
      let tenThousand = Math.ceil(number / 10000)
      let hundredMillion = Math.ceil(tenThousand / 10000)
      tenThousand = tenThousand % 10000
      let text = '-'
      if (hundredMillion < 0) text += Math.abs(hundredMillion) + '億'
      if (tenThousand < 0) text += Math.abs(tenThousand) + '万'
      let rest = number + hundredMillion * 100000000 + tenThousand * 10000
      if (rest === 0) rest = ''
      text += Math.abs(rest) + '円'
      return text
    } else {
      return '0円'
    }
  }
  formatNumber (number) {
    if (number == null) {
      return ''
    }
    let delimiter = '.'
    let splitedNum = number.toString().split(delimiter)
    let replacedNum = splitedNum[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    if (splitedNum[1]) {
      replacedNum = replacedNum + delimiter + splitedNum[1]
    }
    return replacedNum
  }
  formatSize (size) {
    if (size == null) {
      return ''
    }
    if (size < 1000) {
      return size + ' Byte'
    } else if (size < 1024 * 1000) {
      let ksize = size / 1024
      ksize = ksize.toFixed(2)
      let delimiter = '.'
      let splitedNum = ksize.toString().split(delimiter)
      let replacedNum = splitedNum[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')
      return replacedNum + delimiter + splitedNum[1] + ' KB'
    } else if (size < 1024 * 1024 * 1000) {
      let msize = size / 1024 / 1024
      msize = msize.toFixed(2)
      let delimiter = '.'
      let splitedNum = msize.toString().split(delimiter)
      let replacedNum = splitedNum[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')
      return replacedNum + delimiter + splitedNum[1] + ' MB'
    } else {
      let gsize = size / 1024 / 1024 / 1024
      gsize = gsize.toFixed(2)
      let delimiter = '.'
      let splitedNum = gsize.toString().split(delimiter)
      let replacedNum = splitedNum[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,')
      return replacedNum + delimiter + splitedNum[1] + ' GB'
    }
  }
  precise (number) {
    return Math.round(number * 100000) / 100000
  }
  insertAtCursor (myField, originalValue, myValue) {
    let that = this
    let returnValue = ''
    let selectionEnd = 0
    if (document.selection) {
      // IE support
      myField.focus()
      let sel = document.selection.createRange()
      if (sel.startOffset === sel.endOffset) {
        returnValue = that.insertToString(originalValue, sel.startOffset, myValue)
      } else {
        returnValue = that.replaceSelectedString(originalValue, sel.startOffset, sel.endOffset, myValue)
      }
      selectionEnd = sel.endOffset + myValue.length
    } else if (myField.selectionStart || myField.selectionStart === '0') {
      // MOZILLA and others
      let startPos = myField.selectionStart
      let endPos = myField.selectionEnd
      returnValue = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length)
      selectionEnd = endPos + myValue.length
    } else {
      returnValue = myField.value + myValue
      selectionEnd = returnValue.length
    }

    return [returnValue, selectionEnd]
  }
  insertToString (str, index, addstr) {
    return str.substr(0, index) + addstr + str.substr(index)
  }
  replaceSelectedString (str, startOffset, endOffset, addstr) {
    return str.substr(0, startOffset) + addstr + str.substr(endOffset)
  }
  getIcon (type) {
    if (type === 'application/postscript') return '/static/icons/psd.png'
    if (type === 'application/pdf') return '/static/icons/pdf.png'
    if (type === 'video/avi') return '/static/icons/avi.png'
    if (type === 'video/mpeg') return '/static/icons/mpeg.png'
    if (type === 'video/mp4') return '/static/icons/mp4.png'
    if (type === 'video/quicktime') return '/static/icons/mov.png'
    if (type === 'video/x-ms-wmv') return '/static/icons/wmv.png'
    if (type.indexOf('application/vnd.openxmlformats-officedocument.wordprocessingml') >= 0 || type.indexOf('application/vnd.ms-word') >= 0 || type.indexOf('application/vnd.msword') >= 0) return '/static/icons/doc.png'
    if (type.indexOf('application/vnd.openxmlformats-officedocument.spreadsheetml') >= 0 || type.indexOf('application/vnd.ms-excel') >= 0 || type.indexOf('application/vnd.msexcel') >= 0) return '/static/icons/xls.png'
    if (type.indexOf('application/vnd.openxmlformats-officedocument.presentationml') >= 0 || type.indexOf('application/vnd.ms-powerpoint') >= 0 || type.indexOf('application/vnd.mspowerpoint') >= 0) return '/static/icons/ppt.png'
    if (type === 'audio/mid' || type === 'audio/midi') return '/static/icons/midi.png'
    if (type === 'audio/mpeg' || type === 'audio/mp3') return '/static/icons/mp3.png'
    if (type === 'audio/x-wav' || type === 'audio/wav') return '/static/icons/wav.png'
    if (type.indexOf('text/') >= 0) return '/static/icons/txt.png'
    if (type === 'application/zip') return '/static/icons/zip.png'
    if (type === 'image/vnd.adobe.photoshop' || type === 'application/x-photoshop' || type === 'application/photoshop' || type === 'application/psd' || type === 'image/psd') return '/static/icons/psd.png'
    return '/static/icons/other.png'
  }
}

export default new Utils()

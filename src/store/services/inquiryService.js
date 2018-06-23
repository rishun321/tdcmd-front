import utils from '@/tool/utils.js'

class InquiryService {
  sendInquiry (message, next) {
    utils.restPut('/public/insertInquiry', message).then(
      response => {
        if (response) {
          if (next) next(response)
        }
      }
    )
  }
}

export default new InquiryService()

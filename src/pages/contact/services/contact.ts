import { http } from '@/utils'
import { env } from '@/config/env'
import { IContactFormParams, ISubscribeParams } from '../types/contact'

/**
 * Contact 服务接口
 */
export default {
  /**
   * 提交联系表单
   */
  submitForm(params: IContactFormParams) {
    return http(`${env.HOST_API_URL}api/contact/submit`, {
      method: 'POST',
      data: params
    })
  },

  /**
   * 订阅邮件
   */
  subscribe(params: ISubscribeParams) {
    return http(`${env.HOST_API_URL}api/contact/subscribe`, {
      method: 'POST',
      data: params
    })
  },

  /**
   * 获取联系信息
   */
  getContactInfo() {
    return http(`${env.HOST_API_URL}api/contact/info`)
  }
}

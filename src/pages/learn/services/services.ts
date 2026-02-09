import { http } from '@/utils'
import { env } from '@/config/env'
import { IServiceListParams } from '../types/services'

/**
 * Services 服务接口
 */
export default {
  /**
   * 获取服务列表
   */
  getList(params?: IServiceListParams) {
    return http(`${env.HOST_API_URL}api/services/list`, {
      params
    })
  },

  /**
   * 获取服务详情
   */
  getDetail(id: number) {
    return http(`${env.HOST_API_URL}api/services/${id}`)
  },

  /**
   * 获取定价方案
   */
  getPricing() {
    return http(`${env.HOST_API_URL}api/services/pricing`)
  },

  /**
   * 获取客户评价
   */
  getTestimonials() {
    return http(`${env.HOST_API_URL}api/services/testimonials`)
  }
}

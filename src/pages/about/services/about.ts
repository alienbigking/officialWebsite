import { http } from '@/utils'
import { env } from '@/config/env'

/**
 * About 服务接口
 */
export default {
  /**
   * 获取关于信息
   */
  getAboutInfo() {
    return http(`${env.HOST_API_URL}api/about/info`)
  },

  /**
   * 获取服务列表
   */
  getServices() {
    return http(`${env.HOST_API_URL}api/about/services`)
  },

  /**
   * 获取团队成员
   */
  getTeamMembers() {
    return http(`${env.HOST_API_URL}api/about/team`)
  },

  /**
   * 获取客户评价
   */
  getTestimonials() {
    return http(`${env.HOST_API_URL}api/about/testimonials`)
  }
}

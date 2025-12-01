import { http } from '@/utils'
import { env } from '@/config/env'

/**
 * Home 服务接口
 */
export default {
  /**
   * 获取首页轮播图
   */
  getHeroSlides() {
    return http(`${env.HOST_API_URL}api/home/hero-slides`)
  },

  /**
   * 获取画廊图片
   */
  getGallery() {
    return http(`${env.HOST_API_URL}api/home/gallery`)
  },

  /**
   * 获取服务列表
   */
  getServices() {
    return http(`${env.HOST_API_URL}api/home/services`)
  },

  /**
   * 获取定价方案
   */
  getPricingPlans() {
    return http(`${env.HOST_API_URL}api/home/pricing`)
  },

  /**
   * 获取 Instagram 图片
   */
  getInstagramImages() {
    return http(`${env.HOST_API_URL}api/home/instagram`)
  }
}

import { http } from '@/utils'
import { env } from '@/config/env'
import {
  IPortfolioListParams,
  IPortfolioDetailParams
} from '../types/portfolios'

/**
 * Portfolios 服务接口
 */
export default {
  /**
   * 获取作品列表
   */
  getList(params?: IPortfolioListParams) {
    return http(`${env.HOST_API_URL}api/portfolios/list`, {
      params
    })
  },

  /**
   * 获取作品详情
   */
  getDetail(params: IPortfolioDetailParams) {
    return http(`${env.HOST_API_URL}api/portfolios/${params.id}`)
  },

  /**
   * 按分类获取作品
   */
  getByCategory(category: string) {
    return http(`${env.HOST_API_URL}api/portfolios/category/${category}`)
  }
}

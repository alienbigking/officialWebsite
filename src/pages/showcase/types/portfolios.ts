/**
 * Portfolios 模块类型定义
 */

// 作品分类
export type PortfolioCategory = 'all' | 'nature' | 'portrait' | 'wedding' | 'event'

// 作品项
export interface IPortfolioItem {
  id: number
  category: PortfolioCategory
  title: string
  subtitle: string
  image: string
  description?: string
  date?: string
  client?: string
  location?: string
}

// 作品列表查询参数
export interface IPortfolioListParams {
  category?: PortfolioCategory
  page?: number
  pageSize?: number
}

// 作品列表响应
export interface IPortfolioListResponse {
  list: IPortfolioItem[]
  total: number
  page: number
  pageSize: number
}

// 作品详情查询参数
export interface IPortfolioDetailParams {
  id: number
}

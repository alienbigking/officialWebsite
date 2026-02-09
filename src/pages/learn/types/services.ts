/**
 * Services 模块类型定义
 */

// 服务项目
export interface IService {
  id: number
  title: string
  description: string
  image: string
  icon?: string
  features?: string[]
}

// 服务列表查询参数
export interface IServiceListParams {
  category?: string
  page?: number
  pageSize?: number
}

// 服务详情
export interface IServiceDetail extends IService {
  fullDescription?: string
  pricing?: IPricing[]
  gallery?: string[]
}

// 定价信息
export interface IPricing {
  id: number
  name: string
  price: number
  period: string
  features: string[]
  recommended?: boolean
}

// 客户评价
export interface IServiceTestimonial {
  id: number
  name: string
  position: string
  content: string
  avatar?: string
  rating?: number
}

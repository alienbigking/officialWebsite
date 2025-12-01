/**
 * Home 模块类型定义
 */

// 轮播图数据
export interface IHeroSlide {
  id: number
  category: string
  title: string
  image: string
  bgClass?: string
}

// 画廊项目
export interface IGalleryItem {
  id: number
  title: string
  subtitle: string
  image: string
  category?: string
}

// 服务项目
export interface IServiceItem {
  id: number
  title: string
  description: string
  image: string
  icon?: string
}

// 定价方案
export interface IPricingPlan {
  id: number
  name: string
  price: number
  period: string
  features: string[]
  recommended?: boolean
}

// Instagram 图片
export interface IInstagramImage {
  id: number
  image: string
  link?: string
}

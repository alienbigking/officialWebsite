/**
 * About 模块类型定义
 */

// 关于信息
export interface IAboutInfo {
  title: string
  description: string
  image?: string
  yearsOfExperience?: number
}

// 服务项目
export interface IAboutService {
  id: number
  title: string
  description: string
  image: string
}

// 团队成员
export interface ITeamMember {
  id: number
  name: string
  position: string
  image: string
  bio?: string
  social?: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

// 客户评价
export interface ITestimonial {
  id: number
  name: string
  position: string
  content: string
  avatar?: string
  rating?: number
}

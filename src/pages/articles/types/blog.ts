/**
 * Blog 模块类型定义
 */

// 博客文章
export interface IBlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  image: string
  day: string
  month: string
  categories: string
  author: string
  comments: number
  createdAt?: string
  updatedAt?: string
}

// 博客列表查询参数
export interface IBlogListParams {
  page?: number
  pageSize?: number
  category?: string
  keyword?: string
  tag?: string
}

// 博客分页响应
export interface IBlogListResponse {
  list: IBlogPost[]
  total: number
  page: number
  pageSize: number
}

// 博客分类
export interface IBlogCategory {
  id: number
  name: string
  count: number
}

// 博客标签
export interface IBlogTag {
  id: number
  name: string
}

// 最近文章
export interface IRecentPost {
  id: number
  title: string
  image: string
  date: string
}

// 博客详情查询参数
export interface IBlogDetailParams {
  id: number
}

// 评论
export interface IBlogComment {
  id: number
  blogId: number
  author: string
  email: string
  content: string
  createdAt: string
}

// 添加评论参数
export interface IAddCommentParams {
  blogId: number
  author: string
  email: string
  content: string
}

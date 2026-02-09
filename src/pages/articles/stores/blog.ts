import { atom } from 'recoil'
import { IBlogPost, IBlogCategory, IBlogTag, IRecentPost } from '../types/blog'

/**
 * 博客列表状态
 */
export const blogListState = atom<IBlogPost[]>({
  key: 'blogListState',
  default: []
})

/**
 * 博客总数
 */
export const blogTotalState = atom<number>({
  key: 'blogTotalState',
  default: 0
})

/**
 * 当前页码
 */
export const blogCurrentPageState = atom<number>({
  key: 'blogCurrentPageState',
  default: 1
})

/**
 * 每页数量
 */
export const blogPageSizeState = atom<number>({
  key: 'blogPageSizeState',
  default: 6
})

/**
 * 博客分类列表
 */
export const blogCategoriesState = atom<IBlogCategory[]>({
  key: 'blogCategoriesState',
  default: []
})

/**
 * 博客标签列表
 */
export const blogTagsState = atom<IBlogTag[]>({
  key: 'blogTagsState',
  default: []
})

/**
 * 最近文章列表
 */
export const recentPostsState = atom<IRecentPost[]>({
  key: 'recentPostsState',
  default: []
})

/**
 * 当前博客详情
 */
export const currentBlogState = atom<IBlogPost | null>({
  key: 'currentBlogState',
  default: null
})

/**
 * 加载状态
 */
export const blogLoadingState = atom<boolean>({
  key: 'blogLoadingState',
  default: false
})

/**
 * 搜索关键词
 */
export const blogSearchKeywordState = atom<string>({
  key: 'blogSearchKeywordState',
  default: ''
})

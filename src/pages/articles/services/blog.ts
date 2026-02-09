import { http } from '@/utils'
import { env } from '@/config/env'
import {
  IBlogListParams,
  IBlogDetailParams,
  IAddCommentParams
} from '../types/blog'

/**
 * Blog 服务接口
 */
export default {
  /**
   * 获取博客列表
   */
  getList(params?: IBlogListParams) {
    return http(`${env.HOST_API_URL}api/blog/list`, {
      params
    })
  },

  /**
   * 获取博客详情
   */
  getDetail(params: IBlogDetailParams) {
    return http(`${env.HOST_API_URL}api/blog/${params.id}`)
  },

  /**
   * 获取博客分类列表
   */
  getCategories() {
    return http(`${env.HOST_API_URL}api/blog/categories`)
  },

  /**
   * 获取标签列表
   */
  getTags() {
    return http(`${env.HOST_API_URL}api/blog/tags`)
  },

  /**
   * 获取最近文章
   */
  getRecentPosts(params?: { limit?: number }) {
    return http(`${env.HOST_API_URL}api/blog/recent`, {
      params
    })
  },

  /**
   * 搜索博客
   */
  search(params: { keyword: string; page?: number; pageSize?: number }) {
    return http(`${env.HOST_API_URL}api/blog/search`, {
      params
    })
  },

  /**
   * 添加评论
   */
  addComment(params: IAddCommentParams) {
    return http(`${env.HOST_API_URL}api/blog/comments`, {
      method: 'POST',
      data: params
    })
  },

  /**
   * 获取博客评论列表
   */
  getComments(blogId: number) {
    return http(`${env.HOST_API_URL}api/blog/${blogId}/comments`)
  }
}

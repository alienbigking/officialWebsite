import {
  AxiosResponse,
  request,
  RequestConfig,
  RequestError,
  RequestOptions
} from '@umijs/max'
import storage from './storage'
import { history } from '@@/core/history'

const requestConfig: RequestConfig = {
  timeout: 180000,
  method: 'GET',

  errorConfig: {
    errorHandler() {},
    errorThrower() {}
  },
  requestInterceptors: [
    [
      (url: string, options: RequestOptions) => {
        return { url, options }
      },
      (error: RequestError) => {
        return Promise.reject(error)
      }
    ]
  ],
  responseInterceptors: [
    [
      (response: AxiosResponse) => {
        return response
      },
      (error: any) => {
        console.error('响应错误', error?.response)
        const res = error?.response

        switch (res?.status) {
          case 401:
            // 未授权，可以跳转到登录页
            // history.push('/login')
            break
          case 403:
            console.error('无权限访问')
            break
          case 404:
            console.error('请求资源不存在')
            break
          case 500:
          case 502:
          case 503:
            console.error('服务器错误')
            break
        }
        return Promise.reject(error)
      }
    ]
  ]
}

export default (url: string, opt: any = {}) => {
  // 配置请求头
  const headers = {
    ...opt.headers,
    token: storage.getSession('token') || ''
  }

  // 如果需要禁用 token
  if (headers?.isDisabledToken) {
    delete headers.token
    delete headers.isDisabledToken
  }

  const customConfig = {
    ...opt,
    headers
  }

  return request(url, { ...requestConfig, ...customConfig })
}

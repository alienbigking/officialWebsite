/**
 * Contact 模块类型定义
 */

// 联系表单提交参数
export interface IContactFormParams {
  name: string
  email: string
  subject: string
  message: string
}

// 联系信息
export interface IContactInfo {
  address: string
  phone: string
  email: string
  workingHours?: string
}

// 订阅参数
export interface ISubscribeParams {
  email: string
}

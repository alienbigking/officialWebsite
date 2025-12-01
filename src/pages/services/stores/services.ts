import { atom } from 'recoil'
import {
  IService,
  IServiceDetail,
  IPricing,
  IServiceTestimonial
} from '../types/services'

/**
 * 服务列表状态
 */
export const servicesListState = atom<IService[]>({
  key: 'servicesListState',
  default: []
})

/**
 * 当前服务详情
 */
export const currentServiceState = atom<IServiceDetail | null>({
  key: 'currentServiceState',
  default: null
})

/**
 * 定价方案状态
 */
export const servicePricingState = atom<IPricing[]>({
  key: 'servicePricingState',
  default: []
})

/**
 * 客户评价状态
 */
export const serviceTestimonialsState = atom<IServiceTestimonial[]>({
  key: 'serviceTestimonialsState',
  default: []
})

/**
 * 加载状态
 */
export const servicesLoadingState = atom<boolean>({
  key: 'servicesLoadingState',
  default: false
})

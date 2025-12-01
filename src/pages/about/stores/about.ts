import { atom } from 'recoil'
import {
  IAboutInfo,
  IAboutService,
  ITeamMember,
  ITestimonial
} from '../types/about'

/**
 * 关于信息状态
 */
export const aboutInfoState = atom<IAboutInfo | null>({
  key: 'aboutInfoState',
  default: null
})

/**
 * 服务列表状态
 */
export const aboutServicesState = atom<IAboutService[]>({
  key: 'aboutServicesState',
  default: []
})

/**
 * 团队成员状态
 */
export const teamMembersState = atom<ITeamMember[]>({
  key: 'teamMembersState',
  default: []
})

/**
 * 客户评价状态
 */
export const testimonialsState = atom<ITestimonial[]>({
  key: 'testimonialsState',
  default: []
})

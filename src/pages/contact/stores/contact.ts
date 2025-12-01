import { atom } from 'recoil'

/**
 * 表单提交状态
 */
export const contactSubmittingState = atom<boolean>({
  key: 'contactSubmittingState',
  default: false
})

/**
 * 订阅状态
 */
export const subscribeLoadingState = atom<boolean>({
  key: 'subscribeLoadingState',
  default: false
})

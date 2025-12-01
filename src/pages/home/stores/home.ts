import { atom } from 'recoil'
import {
  IHeroSlide,
  IGalleryItem,
  IServiceItem,
  IPricingPlan,
  IInstagramImage
} from '../types/home'

/**
 * 轮播图列表状态
 */
export const heroSlidesState = atom<IHeroSlide[]>({
  key: 'heroSlidesState',
  default: []
})

/**
 * 当前轮播索引
 */
export const currentSlideState = atom<number>({
  key: 'currentSlideState',
  default: 0
})

/**
 * 画廊列表状态
 */
export const galleryItemsState = atom<IGalleryItem[]>({
  key: 'galleryItemsState',
  default: []
})

/**
 * 服务列表状态
 */
export const serviceItemsState = atom<IServiceItem[]>({
  key: 'serviceItemsState',
  default: []
})

/**
 * 定价方案状态
 */
export const pricingPlansState = atom<IPricingPlan[]>({
  key: 'pricingPlansState',
  default: []
})

/**
 * Instagram 图片状态
 */
export const instagramImagesState = atom<IInstagramImage[]>({
  key: 'instagramImagesState',
  default: []
})

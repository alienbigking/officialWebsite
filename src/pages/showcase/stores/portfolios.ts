import { atom } from 'recoil'
import { IPortfolioItem, PortfolioCategory } from '../types/portfolios'

/**
 * 作品列表状态
 */
export const portfolioListState = atom<IPortfolioItem[]>({
  key: 'portfolioListState',
  default: []
})

/**
 * 当前激活的分类
 */
export const activeFilterState = atom<PortfolioCategory>({
  key: 'activeFilterState',
  default: 'all'
})

/**
 * 当前作品详情
 */
export const currentPortfolioState = atom<IPortfolioItem | null>({
  key: 'currentPortfolioState',
  default: null
})

/**
 * 加载状态
 */
export const portfolioLoadingState = atom<boolean>({
  key: 'portfolioLoadingState',
  default: false
})

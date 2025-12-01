/**
 * 本地存储工具类
 */
export default {
  /**
   * 设置 sessionStorage
   */
  setSession(key: string, value: any) {
    sessionStorage.setItem(key, JSON.stringify(value))
  },

  /**
   * 获取 sessionStorage
   */
  getSession(key: string) {
    const value = sessionStorage.getItem(key)
    return value ? JSON.parse(value) : null
  },

  /**
   * 删除 sessionStorage
   */
  removeSession(key: string) {
    sessionStorage.removeItem(key)
  },

  /**
   * 清空 sessionStorage
   */
  clearSession() {
    sessionStorage.clear()
  },

  /**
   * 设置 localStorage
   */
  setLocal(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  },

  /**
   * 获取 localStorage
   */
  getLocal(key: string) {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  },

  /**
   * 删除 localStorage
   */
  removeLocal(key: string) {
    localStorage.removeItem(key)
  },

  /**
   * 清空 localStorage
   */
  clearLocal() {
    localStorage.clear()
  }
}

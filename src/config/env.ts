interface IEnv {
  HOST_API_URL: string
  UMI_ENV: string
}

const buildEnv = (): IEnv => {
  // 开发环境使用配置的 API 地址
  const apiUrl = process.env.NODE_ENV === 'production'
    ? 'https://webapi.aizerospace.com/'
    : 'https://webapi.aizerospace.com/'

  return {
    UMI_ENV: process.env.UMI_ENV || 'development',
    HOST_API_URL: apiUrl
  }
}

const env: IEnv = buildEnv()

export { env }
export type { IEnv }

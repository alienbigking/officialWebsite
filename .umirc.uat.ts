import { defineConfig } from '@umijs/max'

export default defineConfig({
  define: {
    'process.env': {
      UMI_ENV: 'uat',
      HOST_API_URL: 'https://api.uat.com/'
    }
  }
})

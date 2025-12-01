import { defineConfig } from '@umijs/max'

export default defineConfig({
  define: {
    'process.env': {
      UMI_ENV: 'production',
      HOST_API_URL: 'https://api.production.com/'
    }
  }
})

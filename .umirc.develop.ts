import { defineConfig } from '@umijs/max'

export default defineConfig({
  define: {
    'process.env': {
      UMI_ENV: 'develop',
      HOST_API_URL: 'https://api.develop.com/'
    }
  }
})

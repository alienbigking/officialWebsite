import { defineConfig } from '@umijs/max'

export default defineConfig({
  define: {
    'process.env': {
      UMI_ENV: 'stage',
      HOST_API_URL: 'https://api.stage.com/'
    }
  }
})

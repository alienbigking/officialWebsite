import { defineConfig } from '@umijs/max'

export default defineConfig({
  define: {
    'process.env': {
      UMI_ENV: 'localDeploy',
      HOST_API_URL: 'http://localhost:3000/'
    }
  }
})

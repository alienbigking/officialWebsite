import { defineConfig } from '@umijs/max'
import { routes } from './src/routes'

const compressionPlugin = require('compression-webpack-plugin')
const productionGzipExtensions =
  /\.(ts|tsx|less|js|css|json|txt|html|ico|svg|wav)(\?.*)?$/i

export default defineConfig({
  hash: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  history: { type: 'browser' },
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: true,
    baseSeparator: '-' 
  },
  chainWebpack: (config, args) => {
    config.merge({
      optimization: {
        splitChunks: {
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          cacheGroups: {
            react: {
              name: 'react',
              priority: 20,
              test: /[\\/]node_modules[\\/](react|react-dom|react-dom-router|react-dnd|react-adsense|react-countup|react-dnd-html5-backend|react-helmet|react-perfect-scrollbar|react-scripts|react-sortable-hoc|recoil|react-quill|lodash|lodash-decorators|redux-saga|re-select|dva|moment|echarts|dayjs|jspdf|html2canvas)[\\/]/
            },
            antd: {
              name: 'antd',
              priority: 20,
              test: /[\\/]node_modules[\\/](antd|@ant-design\/icons|@ant-design\/compatible)[\\/]/
            },
            vendor: {
              name: 'vendors',
              test(resource: any) {
                return /[\\/]node_modules[\\/]/.test(resource)
              },
              priority: 10
            },
            async: {
              chunks: 'async',
              minChunks: 2,
              name: 'async',
              maxInitialRequests: 1,
              minSize: 0,
              priority: 5,
              reuseExistingChunk: true
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      }
    })

    // 开启前端Gzip压缩
    if (process.env.NODE_ENV === 'production') {
      config.plugin('compression-webpack-plugins').use(compressionPlugin, [
        {
          filename: '[path][base].gz',
          algorithm: 'gzip',
          minRatio: 0.8,
          test: productionGzipExtensions,
          threshold: 10240,
          deleteOriginalAssets: false
        }
      ])
    }
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: false,
  routes: [...routes],
  npmClient: 'npm',
  define: {
    'process.env.UMI_ENV': process.env.UMI_ENV
  }
})

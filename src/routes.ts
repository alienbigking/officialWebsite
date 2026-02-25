export const routes = [
  {
    path: '',
    component: '@/pages/main',
    routes: [
      {
        path: '/',
        component: '@/pages/home/components/home'
      },
      {
        name: '首页',
        path: '/home',
        component: '@/pages/home/components/home'
      },
      {
        name: '展示',
        path: '/showcase',
        component: '@/pages/showcase/components/portfolios'
      },
      {
        name: '科普',
        path: '/learn',
        component: '@/pages/learn/components/services'
      },
      {
        name: '关于',
        path: '/about',
        component: '@/pages/about/components/about'
      },
      {
        name: '文章',
        path: '/articles',
        component: '@/pages/articles/components/blog',
        exact: true
      },
      {
        name: '文章详情',
        path: '/articles/:id',
        component: '@/pages/articles/components/blogDetails'
      },
      {
        name: '联系',
        path: '/contact',
        component: '@/pages/contact/components/contact'
      },

      {
        path: '/services',
        redirect: '/learn'
      },
      {
        path: '/portfolios',
        redirect: '/showcase'
      },
      {
        path: '/blog',
        component: '@/pages/articles/components/blog'
      },
      {
        path: '/blog/:id',
        component: '@/pages/articles/components/blogDetails'
      }
    ]
  }
]

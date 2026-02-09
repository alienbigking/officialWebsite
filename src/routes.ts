export const routes = [
  {
    path: '/',
    component: '@/pages/main',
    routes: [
      {
        path: '',
        component: '@/pages/home/components/home'
      },
      {
        name: '首页',
        path: '/home',
        component: '@/pages/home/components/home'
      },
      {
        name: '展示',
        path: '/portfolios',
        component: '@/pages/portfolios/components/portfolios'
      },
      {
        name: '科普',
        path: '/services',
        component: '@/pages/services/components/services'
      },
      {
        name: '关于',
        path: '/about',
        component: '@/pages/about/components/about'
      },
      {
        name: '文章',
        path: '/blog',
        component: '@/pages/blog/components/blog',
        exact: true
      },
      {
        name: '文章详情',
        path: '/blog/:id',
        component: '@/pages/blog/components/blogDetails'
      },
      {
        name: '联系',
        path: '/contact',
        component: '@/pages/contact/components/contact'
      }
    ]
  }
]

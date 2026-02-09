export const routes = [
  {
    path: '/',
    component: '@/pages/main',
    routes: [
      {
        name: '主页',
        path: '/home',
        component: '@/pages/home/components/home'
      },
      {
        name: '个人中心',
        path: '/portfolios',
        component: '@/pages/portfolios/components/portfolios'
      },
      {
        name: '服务',
        path: '/services',
        component: '@/pages/services/components/services'
      },
      {
        name: '关于',
        path: '/about',
        component: '@/pages/about/components/about'
      },
      {
        name: '博客',
        path: '/blog',
        component: '@/pages/blog/components/blog',
        exact: true
      },
      {
        name: '博客详情',
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

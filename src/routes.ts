export const routes = [
  {
    path: '/',
    component: '@/pages/layout/layout',
    routes: [
      {
        name: 'Home',
        path: '/home',
        component: '@/pages/home/components/home'
      },
      {
        name: 'Portfolios',
        path: '/portfolios',
        component: '@/pages/portfolios/components/portfolios'
      },
      {
        name: 'Services',
        path: '/services',
        component: '@/pages/services/components/services'
      },
      {
        name: 'About',
        path: '/about',
        component: '@/pages/about/components/about'
      },
      {
        name: 'Blog',
        path: '/blog',
        component: '@/pages/blog/components/blog',
        exact: true
      },
      {
        name: 'Blog Details',
        path: '/blog/:id',
        component: '@/pages/blog/components/blogDetails'
      },
      {
        name: 'Contact',
        path: '/contact',
        component: '@/pages/contact/components/contact'
      }
    ]
  }
]

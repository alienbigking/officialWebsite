import React, { useEffect } from 'react'
import { Outlet, useLocation } from '@umijs/max'
import { BackTop } from 'antd'
import { UpOutlined } from '@ant-design/icons'
import Header from './components/Header'
import Footer from './components/Footer'
import styles from './layout.less'

const Layout: React.FC = () => {
  const location = useLocation()

  // 路由切换时滚动到顶部
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  console.log('Layout rendered, location:', location.pathname)

  return (
    <div className={styles.layout}>
      <Header />
      <main className={`${styles.main} ${location.pathname === '/home' ? styles.mainHome : ''}`}>
        <Outlet />
      </main>
      <Footer />
      <BackTop className={styles.backTop}>
        <div className={styles.backTopButton}>
          <UpOutlined />
        </div>
      </BackTop>
    </div>
  )
}

export default Layout

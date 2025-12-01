import React, { useState, useEffect } from 'react'
import { Link, useLocation } from '@umijs/max'
import { Drawer } from 'antd'
import { MenuOutlined, FacebookFilled, InstagramFilled, TwitterOutlined, YoutubeFilled } from '@ant-design/icons'
import styles from './Header.less'

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/portfolios', label: 'Portfolios' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ]

  const socialLinks = [
    { icon: <FacebookFilled />, url: 'https://facebook.com' },
    { icon: <InstagramFilled />, url: 'https://instagram.com' },
    { icon: <TwitterOutlined />, url: 'https://twitter.com' },
    { icon: <YoutubeFilled />, url: 'https://youtube.com' }
  ]

  // 判断是否在首页
  const isHomePage = location.pathname === '/home' || location.pathname === '/'

  return (
    <header className={`${styles.header} ${scrolled || !isHomePage ? styles.headerScrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/home">
            <img src="/assets/img/logo/logo.png" alt="Photographer Logo" />
          </Link>
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${location.pathname === item.path ? styles.navLinkActive : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.social}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <button
          type="button"
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <MenuOutlined />
        </button>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        className={styles.mobileDrawer}
      >
        <div className={styles.mobileNav}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.mobileNavLink} ${location.pathname === item.path ? styles.mobileNavLinkActive : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className={styles.mobileSocial}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileSocialLink}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </Drawer>
    </header>
  )
}

export default Header

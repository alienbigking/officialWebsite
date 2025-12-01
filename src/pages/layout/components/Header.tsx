import React, { useState, useEffect } from 'react'
import { Link, useLocation, useIntl, setLocale, getLocale } from '@umijs/max'
import { Drawer } from 'antd'
import { MenuOutlined, FacebookFilled, InstagramFilled, TwitterOutlined, YoutubeFilled, GlobalOutlined } from '@ant-design/icons'
import styles from './Header.less'

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const intl = useIntl()
  const currentLocale = getLocale()

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { path: '/home', label: intl.formatMessage({ id: 'common.home' }) },
    { path: '/portfolios', label: intl.formatMessage({ id: 'common.portfolios' }) },
    { path: '/services', label: intl.formatMessage({ id: 'common.services' }) },
    { path: '/about', label: intl.formatMessage({ id: 'common.about' }) },
    { path: '/blog', label: intl.formatMessage({ id: 'common.blog' }) },
    { path: '/contact', label: intl.formatMessage({ id: 'common.contact' }) }
  ]

  const socialLinks = [
    { icon: <FacebookFilled />, url: 'https://facebook.com' },
    { icon: <InstagramFilled />, url: 'https://instagram.com' },
    { icon: <TwitterOutlined />, url: 'https://twitter.com' },
    { icon: <YoutubeFilled />, url: 'https://youtube.com' }
  ]

  // 判断是否在首页
  const isHomePage = location.pathname === '/home' || location.pathname === '/'

  // 切换语言
  const toggleLanguage = () => {
    const newLocale = currentLocale === 'zh-CN' ? 'en-US' : 'zh-CN'
    setLocale(newLocale, false)
  }

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
          <button
            type="button"
            onClick={toggleLanguage}
            className={styles.langToggle}
            title={intl.formatMessage({ id: 'header.language' })}
          >
            <GlobalOutlined />
            <span>{currentLocale === 'zh-CN' ? '中' : 'EN'}</span>
          </button>
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

import React from 'react'
import { Link, useIntl } from '@umijs/max'
import { Row, Col, Input, Button } from 'antd'
import { FacebookFilled, InstagramFilled, LinkedinFilled, YoutubeFilled } from '@ant-design/icons'
import styles from './Footer.less'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const intl = useIntl()

  const footerLinks = {
    navigation: [
      { label: intl.formatMessage({ id: 'common.home' }), path: '/' },
      { label: intl.formatMessage({ id: 'common.about' }), path: '/about' },
      { label: intl.formatMessage({ id: 'common.services' }), path: '/services' },
      { label: intl.formatMessage({ id: 'common.blog' }), path: '/blog' },
      { label: intl.formatMessage({ id: 'common.contact' }), path: '/contact' }
    ],
    contact: [
      { label: intl.formatMessage({ id: 'footer.address' }), type: 'address' },
      { label: intl.formatMessage({ id: 'footer.email' }), type: 'email' },
      { label: intl.formatMessage({ id: 'footer.phone' }), type: 'phone' }
    ]
  }

  const socialLinks = [
    { icon: <FacebookFilled />, url: 'https://facebook.com' },
    { icon: <InstagramFilled />, url: 'https://instagram.com' },
    { icon: <LinkedinFilled />, url: 'https://linkedin.com' },
    { icon: <YoutubeFilled />, url: 'https://youtube.com' }
  ]

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // 处理订阅逻辑
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.container}>
          <Row gutter={[48, 48]}>
            {/* About Column */}
            <Col xs={24} sm={12} lg={6}>
              <div className={styles.footerWidget}>
                <div className={styles.footerLogo}>
                  <img src="/assets/img/logo/logo2_footer.png" alt="Footer Logo" />
                </div>
                <p className={styles.footerDesc}>
                  {intl.formatMessage({ id: 'footer.description' })}
                </p>
                <div className={styles.footerSocial}>
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
              </div>
            </Col>

            {/* Navigation Column */}
            <Col xs={24} sm={12} lg={6}>
              <div className={styles.footerWidget}>
                <h4 className={styles.footerTitle}>{intl.formatMessage({ id: 'footer.navigation' })}</h4>
                <ul className={styles.footerLinks}>
                  {footerLinks.navigation.map((link, index) => (
                    <li key={index}>
                      <Link to={link.path}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            {/* Contact Column */}
            <Col xs={24} sm={12} lg={6}>
              <div className={styles.footerWidget}>
                <h4 className={styles.footerTitle}>{intl.formatMessage({ id: 'footer.contact' })}</h4>
                <ul className={styles.footerContact}>
                  {footerLinks.contact.map((item, index) => (
                    <li key={index} className={styles[item.type]}>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>

            {/* Newsletter Column */}
            <Col xs={24} sm={12} lg={6}>
              <div className={styles.footerWidget}>
                <h4 className={styles.footerTitle}>{intl.formatMessage({ id: 'footer.subscribeNewsletter' })}</h4>
                <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                  <Input
                    type="email"
                    placeholder={intl.formatMessage({ id: 'footer.enterEmail' })}
                    className={styles.newsletterInput}
                    required
                  />
                  <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.newsletterBtn}
                  >
                    {intl.formatMessage({ id: 'common.subscribe' })}
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.footerBottom}>
        <div className={styles.container}>
          <div className={styles.copyright}>
            <p>
              <img
                src="/assets/img/common/icp.png"
                alt="ICP"
                style={{ width: '20px', height: '22px', marginRight: '8px', verticalAlign: 'middle' }}
              />
              <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" rel="noopener noreferrer">
                湘ICP备2021011742号
              </a>
            </p>
            <p>
              {intl.formatMessage({ id: 'footer.copyright' })} &copy; {currentYear} ❤️ {intl.formatMessage({ id: 'footer.by' })}{' '}
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
                Colorlib
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

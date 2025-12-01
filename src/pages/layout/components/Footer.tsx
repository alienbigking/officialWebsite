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
      { label: '87/A, Green lane, CA 6732', type: 'address' },
      { label: 'Real State', type: 'text' },
      { label: 'info@josanclick.com', type: 'email' },
      { label: '+10 236 327 3782', type: 'phone' }
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
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
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
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAA5z2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDE5LTA5LTIzVDEyOjA5OjI4KzA4OjAwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxOS0wOS0yM1QxMjowOToyOCswODowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTktMDktMjNUMTI6MDk6MjgrMDg6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjg0OTNiNTZlLWM2MmMtY2I0Zi1hMzBmLWM5ZDk3MGNjZTkyMjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDo5MmFhMDM0YS1lMDk3LTc3NDktYWI1YS03ZTJiMTI1MTk2ZjY8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo5MmFhMDM0YS1lMDk3LTc3NDktYWI1YS03ZTJiMTI1MTk2ZjY8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgIC4="
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

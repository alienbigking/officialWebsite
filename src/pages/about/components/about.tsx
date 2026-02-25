import React from 'react'
import { Row, Col, Carousel } from 'antd'
import { Link, useIntl } from '@umijs/max'
import ShowcaseImageCarousel from '@/components/ShowcaseImageCarousel'
import styles from './about.less'

const About: React.FC = () => {
  const intl = useIntl()
  const roboticsImages = {
    hero1: '/assets/img/robotics/home/hero-1.jpg',
    hero2: '/assets/img/robotics/home/hero-2.jpg',
    hero3: '/assets/img/robotics/home/hero-3.jpg',
    gallery1: '/assets/img/robotics/home/gallery-1.jpg',
    gallery2: '/assets/img/robotics/home/gallery-2.jpg',
    gallery3: '/assets/img/robotics/home/gallery-3.jpg'
  }

  // 服务数据
  const services = [
    {
      id: 1,
      title: intl.formatMessage({ id: 'about.services.item1.title' }),
      description: intl.formatMessage({ id: 'about.services.item1.desc' }),
      image: roboticsImages.gallery1
    },
    {
      id: 2,
      title: intl.formatMessage({ id: 'about.services.item2.title' }),
      description: intl.formatMessage({ id: 'about.services.item2.desc' }),
      image: roboticsImages.gallery2
    },
    {
      id: 3,
      title: intl.formatMessage({ id: 'about.services.item3.title' }),
      description: intl.formatMessage({ id: 'about.services.item3.desc' }),
      image: roboticsImages.gallery3
    }
  ]

  const testimonials = [
    {
      id: 1,
      title: intl.formatMessage({ id: 'about.testimonial.item1.title' }),
      text: intl.formatMessage({ id: 'about.testimonial.item1.text' }),
      author: intl.formatMessage({ id: 'about.testimonial.item1.author' })
    },
    {
      id: 2,
      title: intl.formatMessage({ id: 'about.testimonial.item2.title' }),
      text: intl.formatMessage({ id: 'about.testimonial.item2.text' }),
      author: intl.formatMessage({ id: 'about.testimonial.item2.author' })
    }
  ]

  // Instagram 图片
  const instagramImages = [
    roboticsImages.gallery1,
    roboticsImages.gallery2,
    roboticsImages.gallery3,
    roboticsImages.gallery1,
    roboticsImages.gallery2,
    roboticsImages.gallery3
  ]

  return (
    <main className={styles.about}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>{intl.formatMessage({ id: 'about.explore' })}</p>
          <h1 className={styles.heroTitle}>{intl.formatMessage({ id: 'about.title' })}</h1>
        </div>
      </div>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={10}>
              <div className={styles.aboutText}>
                <h2 className={styles.sectionTitle}>{intl.formatMessage({ id: 'about.section.title' })}</h2>
                <p className={styles.aboutDescription}>
                  {intl.formatMessage({ id: 'about.section.desc' })}
                </p>
                <div className={styles.signature}>
                  <img src={roboticsImages.hero2} alt="Robot" />
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className={styles.aboutImage}>
                <img src={roboticsImages.hero1} alt="About" />
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className={styles.experience}>
                <img src={roboticsImages.hero3} alt="Research" />
                <p>{intl.formatMessage({ id: 'about.section.badge' })}</p>
              </div>
              <p className={styles.quote}>
                {intl.formatMessage({ id: 'about.section.quote' })}
              </p>
              <Link to="/showcase" className={styles.btnPrimary}>{intl.formatMessage({ id: 'about.myWork' })}</Link>
            </Col>
          </Row>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className={styles.testimonialSection}>
        <div className={styles.container}>
          <Carousel autoplay autoplaySpeed={5000} dots={false}>
            {testimonials.map((item) => (
              <div key={item.id}>
                <div className={styles.testimonialItem}>
                  <h2>{item.title}</h2>
                  <p className={styles.testimonialText}>{item.text}</p>
                  <div className={styles.testimonialAuthor}>
                    <img src={roboticsImages.gallery1} alt="Author" />
                    <p>{item.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{intl.formatMessage({ id: 'about.services.title' })}</h2>
          <Row gutter={[24, 24]}>
            {services.map((service) => (
              <Col key={service.id} xs={24} md={8}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceImage}>
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className={styles.serviceContent}>
                    <h5>{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Instagram Section */}
      <ShowcaseImageCarousel images={instagramImages} className={styles.instagramSection} />
    </main>
  )
}

export default About

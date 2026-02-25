import React from 'react'
import { Row, Col, Carousel } from 'antd'
import { useIntl } from '@umijs/max'
import ShowcaseImageCarousel from '@/components/ShowcaseImageCarousel'
import styles from './services.less'

const Services: React.FC = () => {
  const intl = useIntl()
  const roboticsImages = {
    card1: '/assets/img/robotics/figure/video-carousel-01.jpg',
    card2: '/assets/img/robotics/figure/video-carousel-02.jpg',
    card3: '/assets/img/robotics/figure/video-carousel-03.jpg',
    card4: '/assets/img/robotics/figure/video-carousel-04.jpg',
    card5: '/assets/img/robotics/figure/VIDEO_CAROUSEL.jpg',
    card6: '/assets/img/robotics/figure/videa_carousell_image.jpg',
    instagram1: '/assets/img/robotics/figure/about-us-v2-hero-mobile-image.jpg',
    instagram2: '/assets/img/robotics/figure/careers-v2-hero-mobile-image.jpg',
    instagram3: '/assets/img/robotics/figure/hero-company-image-04-mobile.jpg',
    instagram4: '/assets/img/robotics/figure/hero-figure-03-image-02-mobile.jpg',
    instagram5: '/assets/img/robotics/figure/hero-careers-02-image-02-mobile.jpg',
    instagram6: '/assets/img/robotics/figure/image__69.png',
    authorAvatar: '/assets/img/robotics/figure/author_image.png'
  }

  // 服务数据
  const services = [
    {
      id: 1,
      title: intl.formatMessage({ id: 'services.cards.item1.title' }),
      description: intl.formatMessage({ id: 'services.cards.item1.desc' }),
      image: roboticsImages.card1
    },
    {
      id: 2,
      title: intl.formatMessage({ id: 'services.cards.item2.title' }),
      description: intl.formatMessage({ id: 'services.cards.item2.desc' }),
      image: roboticsImages.card2
    },
    {
      id: 3,
      title: intl.formatMessage({ id: 'services.cards.item3.title' }),
      description: intl.formatMessage({ id: 'services.cards.item3.desc' }),
      image: roboticsImages.card3
    },
    {
      id: 4,
      title: intl.formatMessage({ id: 'services.cards.item4.title' }),
      description: intl.formatMessage({ id: 'services.cards.item4.desc' }),
      image: roboticsImages.card4
    },
    {
      id: 5,
      title: intl.formatMessage({ id: 'services.cards.item5.title' }),
      description: intl.formatMessage({ id: 'services.cards.item5.desc' }),
      image: roboticsImages.card5
    },
    {
      id: 6,
      title: intl.formatMessage({ id: 'services.cards.item6.title' }),
      description: intl.formatMessage({ id: 'services.cards.item6.desc' }),
      image: roboticsImages.card6
    }
  ]

  // 价格方案数据
  const pricingPlans = [
    {
      id: 1,
      name: intl.formatMessage({ id: 'services.pricing.plan1.name' }),
      price: 0,
      features: [
        intl.formatMessage({ id: 'services.pricing.plan1.feature1' }),
        intl.formatMessage({ id: 'services.pricing.plan1.feature2' }),
        intl.formatMessage({ id: 'services.pricing.plan1.feature3' }),
        intl.formatMessage({ id: 'services.pricing.plan1.feature4' }),
        intl.formatMessage({ id: 'services.pricing.plan1.feature5' })
      ]
    },
    {
      id: 2,
      name: intl.formatMessage({ id: 'services.pricing.plan2.name' }),
      price: 99,
      features: [
        intl.formatMessage({ id: 'services.pricing.plan2.feature1' }),
        intl.formatMessage({ id: 'services.pricing.plan2.feature2' }),
        intl.formatMessage({ id: 'services.pricing.plan2.feature3' }),
        intl.formatMessage({ id: 'services.pricing.plan2.feature4' }),
        intl.formatMessage({ id: 'services.pricing.plan2.feature5' })
      ]
    },
    {
      id: 3,
      name: intl.formatMessage({ id: 'services.pricing.plan3.name' }),
      price: 299,
      features: [
        intl.formatMessage({ id: 'services.pricing.plan3.feature1' }),
        intl.formatMessage({ id: 'services.pricing.plan3.feature2' }),
        intl.formatMessage({ id: 'services.pricing.plan3.feature3' }),
        intl.formatMessage({ id: 'services.pricing.plan3.feature4' }),
        intl.formatMessage({ id: 'services.pricing.plan3.feature5' })
      ]
    }
  ]

  const testimonials = [
    {
      id: 1,
      title: intl.formatMessage({ id: 'services.testimonial.item1.title' }),
      text: intl.formatMessage({ id: 'services.testimonial.item1.text' }),
      author: intl.formatMessage({ id: 'services.testimonial.item1.author' })
    },
    {
      id: 2,
      title: intl.formatMessage({ id: 'services.testimonial.item2.title' }),
      text: intl.formatMessage({ id: 'services.testimonial.item2.text' }),
      author: intl.formatMessage({ id: 'services.testimonial.item2.author' })
    }
  ]

  // Instagram 图片
  const instagramImages = [
    roboticsImages.instagram1,
    roboticsImages.instagram2,
    roboticsImages.instagram3,
    roboticsImages.instagram4,
    roboticsImages.instagram5,
    roboticsImages.instagram6
  ]

  return (
    <main className={styles.services}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>{intl.formatMessage({ id: 'services.explore' })}</p>
          <h1 className={styles.heroTitle}>{intl.formatMessage({ id: 'services.title' })}</h1>
        </div>
      </div>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{intl.formatMessage({ id: 'services.sectionTitle' })}</h2>
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
                    <img src={roboticsImages.authorAvatar} alt="Author" />
                    <p>{item.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitleCenter}>{intl.formatMessage({ id: 'services.pricing.title' })}</h2>
          <Row gutter={[24, 24]} justify="center">
            {pricingPlans.map((plan) => (
              <Col key={plan.id} xs={24} sm={16} md={8}>
                <div className={styles.pricingCard}>
                  <div className={styles.pricingHeader}>
                    <span>{plan.name}</span>
                    <h4>
                      $ {plan.price} <span>USD</span>
                    </h4>
                  </div>
                  <div className={styles.pricingBody}>
                    <ul>
                      {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <button type="button" className={styles.btnOutline}>
                      {intl.formatMessage({ id: 'services.pricing.cta' })}
                    </button>
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

export default Services

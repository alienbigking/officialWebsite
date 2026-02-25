import React, { useState } from 'react'
import { Carousel, Row, Col } from 'antd'
import { Link, useIntl } from '@umijs/max'
import ShowcaseImageCarousel from '@/components/ShowcaseImageCarousel'
import styles from './home.less'

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intl = useIntl()

  const roboticsImages = {
    hero1: '/assets/img/robotics/home/hero-1.jpg',
    hero2: '/assets/img/robotics/home/hero-2.jpg',
    hero3: '/assets/img/robotics/home/hero-3.jpg',
    gallery1: '/assets/img/robotics/home/gallery-1.jpg',
    gallery2: '/assets/img/robotics/home/gallery-2.jpg',
    gallery3: '/assets/img/robotics/home/gallery-3.jpg'
  }

  // 轮播图数据
  const heroSlides = [
    {
      id: 1,
      category: intl.formatMessage({ id: 'home.hero.slide1.category' }),
      title: intl.formatMessage({ id: 'home.hero.slide1.title' }),
      image: roboticsImages.hero1
    },
    {
      id: 2,
      category: intl.formatMessage({ id: 'home.hero.slide2.category' }),
      title: intl.formatMessage({ id: 'home.hero.slide2.title' }),
      image: roboticsImages.hero2
    },
    {
      id: 3,
      category: intl.formatMessage({ id: 'home.hero.slide3.category' }),
      title: intl.formatMessage({ id: 'home.hero.slide3.title' }),
      image: roboticsImages.hero3
    }
  ]

  // 作品画廊数据
  const galleryItems = [
    {
      id: 1,
      category: intl.formatMessage({ id: 'home.gallery.item1.category' }),
      title: intl.formatMessage({ id: 'home.gallery.item1.title' }),
      image: roboticsImages.gallery1
    },
    {
      id: 2,
      category: intl.formatMessage({ id: 'home.gallery.item2.category' }),
      title: intl.formatMessage({ id: 'home.gallery.item2.title' }),
      image: roboticsImages.gallery2
    },
    {
      id: 3,
      category: intl.formatMessage({ id: 'home.gallery.item3.category' }),
      title: intl.formatMessage({ id: 'home.gallery.item3.title' }),
      image: roboticsImages.gallery3
    },
    {
      id: 4,
      category: intl.formatMessage({ id: 'home.gallery.item4.category' }),
      title: intl.formatMessage({ id: 'home.gallery.item4.title' }),
      image: roboticsImages.gallery1
    },
    {
      id: 5,
      category: intl.formatMessage({ id: 'home.gallery.item5.category' }),
      title: intl.formatMessage({ id: 'home.gallery.item5.title' }),
      image: roboticsImages.gallery2
    },
    {
      id: 6,
      category: intl.formatMessage({ id: 'home.gallery.item6.category' }),
      title: intl.formatMessage({ id: 'home.gallery.item6.title' }),
      image: roboticsImages.gallery3
    }
  ]

  // 服务数据
  const services = [
    {
      id: 1,
      title: intl.formatMessage({ id: 'home.learn.item1.title' }),
      description: intl.formatMessage({ id: 'home.learn.item1.desc' }),
      image: roboticsImages.gallery1
    },
    {
      id: 2,
      title: intl.formatMessage({ id: 'home.learn.item2.title' }),
      description: intl.formatMessage({ id: 'home.learn.item2.desc' }),
      image: roboticsImages.gallery2
    },
    {
      id: 3,
      title: intl.formatMessage({ id: 'home.learn.item3.title' }),
      description: intl.formatMessage({ id: 'home.learn.item3.desc' }),
      image: roboticsImages.gallery3
    }
  ]

  // 价格方案数据
  const pricingPlans = [
    {
      id: 1,
      name: intl.formatMessage({ id: 'home.pricing.plan1.name' }),
      price: 0,
      features: [
        intl.formatMessage({ id: 'home.pricing.plan1.feature1' }),
        intl.formatMessage({ id: 'home.pricing.plan1.feature2' }),
        intl.formatMessage({ id: 'home.pricing.plan1.feature3' }),
        intl.formatMessage({ id: 'home.pricing.plan1.feature4' }),
        intl.formatMessage({ id: 'home.pricing.plan1.feature5' })
      ]
    },
    {
      id: 2,
      name: intl.formatMessage({ id: 'home.pricing.plan2.name' }),
      price: 99,
      features: [
        intl.formatMessage({ id: 'home.pricing.plan2.feature1' }),
        intl.formatMessage({ id: 'home.pricing.plan2.feature2' }),
        intl.formatMessage({ id: 'home.pricing.plan2.feature3' }),
        intl.formatMessage({ id: 'home.pricing.plan2.feature4' }),
        intl.formatMessage({ id: 'home.pricing.plan2.feature5' })
      ]
    },
    {
      id: 3,
      name: intl.formatMessage({ id: 'home.pricing.plan3.name' }),
      price: 299,
      features: [
        intl.formatMessage({ id: 'home.pricing.plan3.feature1' }),
        intl.formatMessage({ id: 'home.pricing.plan3.feature2' }),
        intl.formatMessage({ id: 'home.pricing.plan3.feature3' }),
        intl.formatMessage({ id: 'home.pricing.plan3.feature4' }),
        intl.formatMessage({ id: 'home.pricing.plan3.feature5' })
      ]
    }
  ]

  const testimonials = [
    {
      id: 1,
      title: intl.formatMessage({ id: 'home.testimonial.item1.title' }),
      text: intl.formatMessage({ id: 'home.testimonial.item1.text' }),
      author: intl.formatMessage({ id: 'home.testimonial.item1.author' })
    },
    {
      id: 2,
      title: intl.formatMessage({ id: 'home.testimonial.item2.title' }),
      text: intl.formatMessage({ id: 'home.testimonial.item2.text' }),
      author: intl.formatMessage({ id: 'home.testimonial.item2.author' })
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
    <main className={styles.home}>
      {/* Hero Carousel */}
      <div className={styles.heroSection}>
        <Carousel
          autoplay={{ dotDuration: true }}
          arrows
          autoplaySpeed={5000}
          speed={800}
          // pauseOnHover={false}
          // pauseOnDotsHover={false}
          dotPosition="bottom"
          effect="fade"
          beforeChange={(_, next) => setCurrentSlide(next)}
        >
          {heroSlides.map((slide) => (
            <div key={slide.id}>
              <div className={styles.heroSlide} style={{ backgroundImage: `url(${slide.image})` }}>
                <div className={styles.heroContent}>
                  <span className={styles.heroCategory}>{slide.category}</span>
                  <h1 className={styles.heroTitle}>{slide.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={10}>
              <div className={styles.aboutText}>
                <h2 className={styles.sectionTitle}>{intl.formatMessage({ id: 'home.about.title' })}</h2>
                <p className={styles.aboutDescription}>
                  {intl.formatMessage({ id: 'home.about.desc' })}
                </p>
                <div className={styles.signature}>
                  <img src={roboticsImages.gallery2} alt="Robot learning scene" />
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className={styles.aboutImage}>
                <img src={roboticsImages.gallery1} alt="Humanoid robot" />
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className={styles.experience}>
                <img src={roboticsImages.gallery3} alt="Research scene" />
                <p>{intl.formatMessage({ id: 'home.about.badge' })}</p>
              </div>
              <p className={styles.quote}>
                {intl.formatMessage({ id: 'home.about.quote' })}
              </p>
              <Link to="/showcase" className={styles.btnPrimary}>{intl.formatMessage({ id: 'home.myWork' })}</Link>
            </Col>
          </Row>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.gallerySection}>
        <Row gutter={0}>
          {galleryItems.map((item) => (
            <Col key={item.id} xs={12} md={8} className={styles.galleryCol}>
              <div className={styles.galleryItem}>
                <div
                  className={styles.galleryImage}
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                <div className={styles.galleryOverlay}>
                  <div className={styles.galleryContent}>
                    <p>{item.category}</p>
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{intl.formatMessage({ id: 'home.learn.title' })}</h2>
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
                    <img src={roboticsImages.gallery1} alt="Author" />
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
          <h2 className={styles.sectionTitleCenter}>{intl.formatMessage({ id: 'home.pricing.title' })}</h2>
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
                      {intl.formatMessage({ id: 'home.pricing.cta' })}
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

export default Home

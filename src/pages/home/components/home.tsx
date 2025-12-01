import React, { useState } from 'react'
import { Carousel, Row, Col } from 'antd'
import { Link, useIntl } from '@umijs/max'
import styles from './home.less'

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intl = useIntl()

  // 轮播图数据
  const heroSlides = [
    {
      id: 1,
      category: 'Nature Beauty',
      title: 'Miami Lake',
      bgClass: styles.sliderBg1
    },
    {
      id: 2,
      category: 'Travel Shot',
      title: 'Kayaking on Lake',
      bgClass: styles.sliderBg2
    },
    {
      id: 3,
      category: 'Action Shot',
      title: 'Electricity',
      bgClass: styles.sliderBg3
    }
  ]

  // 作品画廊数据
  const galleryItems = [
    { id: 1, category: 'Nature Beauty', title: 'Street Shot', image: '/assets/img/gallery/gallery1.jpg' },
    { id: 2, category: 'Nature Beauty', title: 'Street Shot', image: '/assets/img/gallery/gallery2.jpg' },
    { id: 3, category: 'Nature Beauty', title: 'Street Shot', image: '/assets/img/gallery/gallery3.jpg' },
    { id: 4, category: 'Nature Beauty', title: 'Street Shot', image: '/assets/img/gallery/gallery4.jpg' },
    { id: 5, category: 'Nature Beauty', title: 'Street Shot', image: '/assets/img/gallery/gallery5.jpg' },
    { id: 6, category: 'Nature Beauty', title: 'Street Shot', image: '/assets/img/gallery/gallery6.jpg' }
  ]

  // 服务数据
  const services = [
    {
      id: 1,
      title: 'Event Photography',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
      image: '/assets/img/gallery/blog01.jpg'
    },
    {
      id: 2,
      title: 'Wedding Photography',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
      image: '/assets/img/gallery/blog02.jpg'
    },
    {
      id: 3,
      title: 'Family Photography',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.',
      image: '/assets/img/gallery/blog03.jpg'
    }
  ]

  // 价格方案数据
  const pricingPlans = [
    {
      id: 1,
      name: 'Photography',
      price: 400,
      features: [
        'Sed ut perspiciatis unde omnis iste.',
        'Natus error sit voluptatem.',
        'Accusantium Doloremque lauda',
        'Totam rem aperiam.',
        'Eaque ipsa quae.'
      ]
    },
    {
      id: 2,
      name: 'Photography',
      price: 400,
      features: [
        'Sed ut perspiciatis unde omnis iste.',
        'Natus error sit voluptatem.',
        'Accusantium Doloremque lauda',
        'Totam rem aperiam.',
        'Eaque ipsa quae.'
      ]
    },
    {
      id: 3,
      name: 'Photography',
      price: 400,
      features: [
        'Sed ut perspiciatis unde omnis iste.',
        'Natus error sit voluptatem.',
        'Accusantium Doloremque lauda',
        'Totam rem aperiam.',
        'Eaque ipsa quae.'
      ]
    }
  ]

  // Instagram 图片
  const instagramImages = [
    '/assets/img/gallery/instra1.jpg',
    '/assets/img/gallery/instra2.jpg',
    '/assets/img/gallery/instra3.jpg',
    '/assets/img/gallery/instra4.jpg',
    '/assets/img/gallery/instra5.jpg',
    '/assets/img/gallery/instra2.jpg'
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
              <div className={`${styles.heroSlide} ${slide.bgClass}`}>
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
                <h2 className={styles.sectionTitle}>I Click Moment, that you love</h2>
                <p className={styles.aboutDescription}>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
                </p>
                <div className={styles.signature}>
                  <img src="/assets/img/gallery/singneture.png" alt="Signature" />
                </div>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <div className={styles.aboutImage}>
                <img src="/assets/img/gallery/about1.jpg" alt="About" />
              </div>
            </Col>
            <Col xs={24} md={6}>
              <div className={styles.experience}>
                <img src="/assets/img/gallery/years.png" alt="Years" />
                <p>Years of Experience</p>
              </div>
              <p className={styles.quote}>
                &quot;A gray cat slinks past a wooden house. There&apos;s has something a little intimidating attempting to describe.
              </p>
              <Link to="/portfolios" className={styles.btnPrimary}>{intl.formatMessage({ id: 'home.myWork' })}</Link>
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
          <h2 className={styles.sectionTitle}>I do for you</h2>
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
            {[1, 2].map((num) => (
              <div key={num}>
                <div className={styles.testimonialItem}>
                  <h2>Testimonial</h2>
                  <p className={styles.testimonialText}>
                    &quot;Vivamus aliquet felis eu diam ultricies congue. Morbi porta lorem nec consectetur porta. Sed quis dui elit. Pellentesque habitant morbi tristique senectus et netus et male Sed vestibulum orci&quot;
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <img src="/assets/img/gallery/founder-img.png" alt="Author" />
                    <p>Graham Cracker, Designer at Colorlib</p>
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
          <h2 className={styles.sectionTitleCenter}>Choose a plan that suit you</h2>
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
                    <button type="button" className={styles.btnOutline}>Choose This Plan</button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Instagram Section */}
      <section className={styles.instagramSection}>
        <Carousel
          autoplay
          autoplaySpeed={3000}
          dots={false}
          slidesToShow={5}
          responsive={[
            { breakpoint: 1200, settings: { slidesToShow: 5 } },
            { breakpoint: 992, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 2 } }
          ]}
        >
          {instagramImages.map((img, index) => (
            <div key={index} className={styles.instagramItem}>
              <img src={img} alt={`Instagram ${index + 1}`} />
              <a href="#" className={styles.instagramLink}>
                <i className="ti-instagram" />
              </a>
            </div>
          ))}
        </Carousel>
      </section>
    </main>
  )
}

export default Home

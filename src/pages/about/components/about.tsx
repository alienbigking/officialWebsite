import React from 'react'
import { Row, Col, Carousel } from 'antd'
import { Link, useIntl } from '@umijs/max'
import styles from './about.less'

const About: React.FC = () => {
  const intl = useIntl()
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
              <Link to="/portfolios" className={styles.btnPrimary}>{intl.formatMessage({ id: 'about.myWork' })}</Link>
            </Col>
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

export default About

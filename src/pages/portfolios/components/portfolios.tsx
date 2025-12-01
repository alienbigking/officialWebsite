import React, { useState } from 'react'
import { Row, Col, Carousel } from 'antd'
import { useIntl } from '@umijs/max'
import styles from './portfolios.less'

const Portfolios: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const intl = useIntl()

  // 作品分类
  const categories = [
    { id: 'all', label: intl.formatMessage({ id: 'portfolios.all' }) },
    { id: 'nature', label: intl.formatMessage({ id: 'portfolios.nature' }) },
    { id: 'portrait', label: intl.formatMessage({ id: 'portfolios.portrait' }) },
    { id: 'wedding', label: intl.formatMessage({ id: 'portfolios.wedding' }) },
    { id: 'event', label: intl.formatMessage({ id: 'portfolios.event' }) }
  ]

  // 作品数据
  const portfolioItems = [
    { id: 1, category: 'nature', title: 'Miami Lake', subtitle: 'Nature Beauty', image: '/assets/img/gallery/gallery1.jpg' },
    { id: 2, category: 'portrait', title: 'Street Shot', subtitle: 'Portrait', image: '/assets/img/gallery/gallery2.jpg' },
    { id: 3, category: 'wedding', title: 'Wedding Day', subtitle: 'Wedding', image: '/assets/img/gallery/gallery3.jpg' },
    { id: 4, category: 'event', title: 'Event Shot', subtitle: 'Event', image: '/assets/img/gallery/gallery4.jpg' },
    { id: 5, category: 'nature', title: 'Mountain View', subtitle: 'Nature Beauty', image: '/assets/img/gallery/gallery5.jpg' },
    { id: 6, category: 'portrait', title: 'Portrait Shot', subtitle: 'Portrait', image: '/assets/img/gallery/gallery6.jpg' },
    { id: 7, category: 'wedding', title: 'Love Story', subtitle: 'Wedding', image: '/assets/img/gallery/gallery1.jpg' },
    { id: 8, category: 'event', title: 'Party Time', subtitle: 'Event', image: '/assets/img/gallery/gallery2.jpg' },
    { id: 9, category: 'nature', title: 'Sunset', subtitle: 'Nature Beauty', image: '/assets/img/gallery/gallery3.jpg' }
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

  // 过滤作品
  const filteredPortfolios = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <main className={styles.portfolios}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>{intl.formatMessage({ id: 'portfolios.explore' })}</p>
          <h1 className={styles.heroTitle}>{intl.formatMessage({ id: 'portfolios.title' })}</h1>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className={styles.portfolioSection}>
        <div className={styles.container}>
          {/* Filter Buttons */}
          <div className={styles.filterButtons}>
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`${styles.filterBtn} ${activeFilter === cat.id ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <Row gutter={0}>
            {filteredPortfolios.map((item) => (
              <Col key={item.id} xs={12} md={8} className={styles.portfolioCol}>
                <div className={styles.portfolioItem}>
                  <div
                    className={styles.portfolioImage}
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className={styles.portfolioOverlay}>
                    <div className={styles.portfolioContent}>
                      <p>{item.subtitle}</p>
                      <h3>{item.title}</h3>
                    </div>
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

export default Portfolios

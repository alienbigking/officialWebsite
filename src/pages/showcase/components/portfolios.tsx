import React, { useState } from 'react'
import { Row, Col } from 'antd'
import { useIntl } from '@umijs/max'
import ShowcaseImageCarousel from '@/components/ShowcaseImageCarousel'
import styles from './portfolios.less'

const Portfolios: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const intl = useIntl()

  const roboticsImages = {
    tile1: '/assets/img/robotics/figure/video-carousel-01.jpg',
    tile2: '/assets/img/robotics/figure/video-carousel-02.jpg',
    tile3: '/assets/img/robotics/figure/video-carousel-03.jpg',
    tile4: '/assets/img/robotics/figure/video-carousel-04.jpg',
    tile5: '/assets/img/robotics/figure/VIDEO_CAROUSEL.jpg',
    tile6: '/assets/img/robotics/figure/videa_carousell_image.jpg',
    tile7: '/assets/img/robotics/figure/736x590.jpg',
    tile8: '/assets/img/robotics/figure/bmw_deployment_figure_in_action.jpg',
    tile9: '/assets/img/robotics/figure/hero-company-image-04.jpg',
    instagram1: '/assets/img/robotics/figure/about-us-v2-hero-mobile-image.jpg',
    instagram2: '/assets/img/robotics/figure/careers-v2-hero-mobile-image.jpg',
    instagram3: '/assets/img/robotics/figure/hero-company-image-04-mobile.jpg',
    instagram4: '/assets/img/robotics/figure/hero-figure-03-image-02-mobile.jpg',
    instagram5: '/assets/img/robotics/figure/hero-careers-02-image-02-mobile.jpg',
    instagram6: '/assets/img/robotics/figure/image__69.png'
  }

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
    {
      id: 1,
      category: 'event',
      title: intl.formatMessage({ id: 'portfolios.items.item1.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item1.subtitle' }),
      image: roboticsImages.tile1
    },
    {
      id: 2,
      category: 'wedding',
      title: intl.formatMessage({ id: 'portfolios.items.item2.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item2.subtitle' }),
      image: roboticsImages.tile2
    },
    {
      id: 3,
      category: 'portrait',
      title: intl.formatMessage({ id: 'portfolios.items.item3.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item3.subtitle' }),
      image: roboticsImages.tile3
    },
    {
      id: 4,
      category: 'nature',
      title: intl.formatMessage({ id: 'portfolios.items.item4.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item4.subtitle' }),
      image: roboticsImages.tile4
    },
    {
      id: 5,
      category: 'event',
      title: intl.formatMessage({ id: 'portfolios.items.item5.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item5.subtitle' }),
      image: roboticsImages.tile5
    },
    {
      id: 6,
      category: 'wedding',
      title: intl.formatMessage({ id: 'portfolios.items.item6.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item6.subtitle' }),
      image: roboticsImages.tile6
    },
    {
      id: 7,
      category: 'portrait',
      title: intl.formatMessage({ id: 'portfolios.items.item7.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item7.subtitle' }),
      image: roboticsImages.tile7
    },
    {
      id: 8,
      category: 'nature',
      title: intl.formatMessage({ id: 'portfolios.items.item8.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item8.subtitle' }),
      image: roboticsImages.tile8
    },
    {
      id: 9,
      category: 'event',
      title: intl.formatMessage({ id: 'portfolios.items.item9.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item9.subtitle' }),
      image: roboticsImages.tile9
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
      <ShowcaseImageCarousel images={instagramImages} className={styles.instagramSection} />
    </main>
  )
}

export default Portfolios

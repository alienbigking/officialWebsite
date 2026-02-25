import React, { useState } from 'react'
import { Row, Col } from 'antd'
import { useIntl } from '@umijs/max'
import ShowcaseImageCarousel from '@/components/ShowcaseImageCarousel'
import styles from './portfolios.less'

const Portfolios: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const intl = useIntl()

  const roboticsImages = {
    hero1: '/assets/img/robotics/home/hero-1.jpg',
    hero2: '/assets/img/robotics/home/hero-2.jpg',
    hero3: '/assets/img/robotics/home/hero-3.jpg',
    gallery1: '/assets/img/robotics/home/gallery-1.jpg',
    gallery2: '/assets/img/robotics/home/gallery-2.jpg',
    gallery3: '/assets/img/robotics/home/gallery-3.jpg'
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
      image: roboticsImages.gallery1
    },
    {
      id: 2,
      category: 'wedding',
      title: intl.formatMessage({ id: 'portfolios.items.item2.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item2.subtitle' }),
      image: roboticsImages.gallery2
    },
    {
      id: 3,
      category: 'portrait',
      title: intl.formatMessage({ id: 'portfolios.items.item3.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item3.subtitle' }),
      image: roboticsImages.gallery3
    },
    {
      id: 4,
      category: 'nature',
      title: intl.formatMessage({ id: 'portfolios.items.item4.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item4.subtitle' }),
      image: roboticsImages.gallery1
    },
    {
      id: 5,
      category: 'event',
      title: intl.formatMessage({ id: 'portfolios.items.item5.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item5.subtitle' }),
      image: roboticsImages.gallery2
    },
    {
      id: 6,
      category: 'wedding',
      title: intl.formatMessage({ id: 'portfolios.items.item6.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item6.subtitle' }),
      image: roboticsImages.gallery3
    },
    {
      id: 7,
      category: 'portrait',
      title: intl.formatMessage({ id: 'portfolios.items.item7.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item7.subtitle' }),
      image: roboticsImages.gallery1
    },
    {
      id: 8,
      category: 'nature',
      title: intl.formatMessage({ id: 'portfolios.items.item8.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item8.subtitle' }),
      image: roboticsImages.gallery2
    },
    {
      id: 9,
      category: 'event',
      title: intl.formatMessage({ id: 'portfolios.items.item9.title' }),
      subtitle: intl.formatMessage({ id: 'portfolios.items.item9.subtitle' }),
      image: roboticsImages.gallery3
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

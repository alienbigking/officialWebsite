import React, { useState } from 'react'
import { Row, Col, Input, Button } from 'antd'
import { Link, useIntl } from '@umijs/max'
import { UserOutlined, MessageOutlined } from '@ant-design/icons'
import styles from './blog.less'

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const intl = useIntl()

  const roboticsImages = {
    hero1: '/assets/img/robotics/home/hero-1.jpg',
    hero2: '/assets/img/robotics/home/hero-2.jpg',
    hero3: '/assets/img/robotics/home/hero-3.jpg',
    gallery1: '/assets/img/robotics/home/gallery-1.jpg',
    gallery2: '/assets/img/robotics/home/gallery-2.jpg',
    gallery3: '/assets/img/robotics/home/gallery-3.jpg'
  }

  const blogPosts = [
    {
      id: 1,
      title: intl.formatMessage({ id: 'blog.posts.post1.title' }),
      excerpt: intl.formatMessage({ id: 'blog.posts.post1.excerpt' }),
      image: roboticsImages.hero1,
      day: '15',
      month: 'Jan',
      categories: intl.formatMessage({ id: 'blog.posts.post1.categories' }),
      comments: intl.formatMessage({ id: 'blog.posts.post1.comments' })
    },
    {
      id: 2,
      title: intl.formatMessage({ id: 'blog.posts.post2.title' }),
      excerpt: intl.formatMessage({ id: 'blog.posts.post2.excerpt' }),
      image: roboticsImages.hero2,
      day: '16',
      month: 'Jan',
      categories: intl.formatMessage({ id: 'blog.posts.post2.categories' }),
      comments: intl.formatMessage({ id: 'blog.posts.post2.comments' })
    },
    {
      id: 3,
      title: intl.formatMessage({ id: 'blog.posts.post3.title' }),
      excerpt: intl.formatMessage({ id: 'blog.posts.post3.excerpt' }),
      image: roboticsImages.hero3,
      day: '18',
      month: 'Jan',
      categories: intl.formatMessage({ id: 'blog.posts.post3.categories' }),
      comments: intl.formatMessage({ id: 'blog.posts.post3.comments' })
    },
    {
      id: 4,
      title: intl.formatMessage({ id: 'blog.posts.post4.title' }),
      excerpt: intl.formatMessage({ id: 'blog.posts.post4.excerpt' }),
      image: roboticsImages.gallery1,
      day: '20',
      month: 'Jan',
      categories: intl.formatMessage({ id: 'blog.posts.post4.categories' }),
      comments: intl.formatMessage({ id: 'blog.posts.post4.comments' })
    },
    {
      id: 5,
      title: intl.formatMessage({ id: 'blog.posts.post5.title' }),
      excerpt: intl.formatMessage({ id: 'blog.posts.post5.excerpt' }),
      image: roboticsImages.gallery2,
      day: '22',
      month: 'Jan',
      categories: intl.formatMessage({ id: 'blog.posts.post5.categories' }),
      comments: intl.formatMessage({ id: 'blog.posts.post5.comments' })
    }
  ]

  const categories = [
    { name: intl.formatMessage({ id: 'blog.sidebar.categories.cat1' }), count: 12 },
    { name: intl.formatMessage({ id: 'blog.sidebar.categories.cat2' }), count: 8 },
    { name: intl.formatMessage({ id: 'blog.sidebar.categories.cat3' }), count: 6 },
    { name: intl.formatMessage({ id: 'blog.sidebar.categories.cat4' }), count: 10 },
    { name: intl.formatMessage({ id: 'blog.sidebar.categories.cat5' }), count: 5 },
    { name: intl.formatMessage({ id: 'blog.sidebar.categories.cat6' }), count: 4 }
  ]

  const recentPosts = [
    {
      title: intl.formatMessage({ id: 'blog.sidebar.recent.post1.title' }),
      date: intl.formatMessage({ id: 'blog.sidebar.recent.post1.date' }),
      image: roboticsImages.gallery1
    },
    {
      title: intl.formatMessage({ id: 'blog.sidebar.recent.post2.title' }),
      date: intl.formatMessage({ id: 'blog.sidebar.recent.post2.date' }),
      image: roboticsImages.gallery2
    },
    {
      title: intl.formatMessage({ id: 'blog.sidebar.recent.post3.title' }),
      date: intl.formatMessage({ id: 'blog.sidebar.recent.post3.date' }),
      image: roboticsImages.gallery3
    },
    {
      title: intl.formatMessage({ id: 'blog.sidebar.recent.post4.title' }),
      date: intl.formatMessage({ id: 'blog.sidebar.recent.post4.date' }),
      image: roboticsImages.gallery1
    }
  ]

  const tags = [
    intl.formatMessage({ id: 'blog.sidebar.tags.tag1' }),
    intl.formatMessage({ id: 'blog.sidebar.tags.tag2' }),
    intl.formatMessage({ id: 'blog.sidebar.tags.tag3' }),
    intl.formatMessage({ id: 'blog.sidebar.tags.tag4' }),
    intl.formatMessage({ id: 'blog.sidebar.tags.tag5' }),
    intl.formatMessage({ id: 'blog.sidebar.tags.tag6' }),
    intl.formatMessage({ id: 'blog.sidebar.tags.tag7' }),
    intl.formatMessage({ id: 'blog.sidebar.tags.tag8' })
  ]
  const instagramFeeds = [
    roboticsImages.gallery1,
    roboticsImages.gallery2,
    roboticsImages.gallery3,
    roboticsImages.gallery1,
    roboticsImages.gallery2,
    roboticsImages.gallery3
  ]

  return (
    <main className={styles.blog}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <p className={styles.heroSubtitle}>{intl.formatMessage({ id: 'blog.explore' })}</p>
          <h1 className={styles.heroTitle}>{intl.formatMessage({ id: 'blog.title' })}</h1>
        </div>
      </div>

      <section className={styles.blogSection}>
        <div className={styles.container}>
          <Row gutter={[32, 32]}>
            <Col xs={24} lg={16}>
              <div className={styles.blogLeft}>
                {blogPosts.map((post) => (
                  <article key={post.id} className={styles.blogItem}>
                    <div className={styles.blogItemImg}>
                      <img src={post.image} alt={post.title} />
                      <div className={styles.blogItemDate}>
                        <h3>{post.day}</h3>
                        <p>{post.month}</p>
                      </div>
                    </div>
                    <div className={styles.blogDetails}>
                      <Link to={`/articles/${post.id}`} className={styles.blogTitleLink}>
                        <h2>{post.title}</h2>
                      </Link>
                      <p>{post.excerpt}</p>
                      <ul className={styles.blogInfoLink}>
                        <li>
                          <UserOutlined /> {post.categories}
                        </li>
                        <li>
                          <MessageOutlined /> {post.comments}
                        </li>
                      </ul>
                    </div>
                  </article>
                ))}

                <div className={styles.paginationWrapper}>
                  <button type="button" className={styles.pageButton} aria-label="Previous">
                    <span>&lsaquo;</span>
                  </button>
                  <button type="button" className={`${styles.pageButton} ${styles.pageActive}`}>
                    1
                  </button>
                  <button type="button" className={styles.pageButton}>
                    2
                  </button>
                  <button type="button" className={styles.pageButton} aria-label="Next">
                    <span>&rsaquo;</span>
                  </button>
                </div>
              </div>
            </Col>

            <Col xs={24} lg={8}>
              <div className={styles.sidebar}>
                <aside className={styles.sidebarWidget}>
                  <Input.Search
                    placeholder={intl.formatMessage({ id: 'blog.searchKeyword' })}
                    className={styles.searchInput}
                    onSearch={(value) => console.log(value)}
                    enterButton={intl.formatMessage({ id: 'blog.search' })}
                    size="large"
                    allowClear
                  />
                </aside>

                <aside className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitle}>{intl.formatMessage({ id: 'blog.category' })}</h3>
                  <ul className={styles.categoryList}>
                    {categories.map((cat) => (
                      <li key={cat.name}>
                        <a>
                          <span>{cat.name}</span>
                          <span>({cat.count})</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </aside>

                <aside className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitle}>{intl.formatMessage({ id: 'blog.recentPost' })}</h3>
                  <div className={styles.recentPosts}>
                    {recentPosts.map((post) => (
                      <div key={post.title} className={styles.recentPostItem}>
                        <img src={post.image} alt={post.title} />
                        <div>
                          <Link to="/articles/1">{post.title}</Link>
                          <p>{post.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </aside>

                <aside className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitle}>{intl.formatMessage({ id: 'blog.tagClouds' })}</h3>
                  <div className={styles.tagList}>
                    {tags.map((tag) => (
                      <button key={tag} type="button">
                        {tag}
                      </button>
                    ))}
                  </div>
                </aside>

                <aside className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitle}>{intl.formatMessage({ id: 'blog.instagramFeeds' })}</h3>
                  <div className={styles.instagramGrid}>
                    {instagramFeeds.map((img, index) => (
                      <img key={img + index.toString()} src={img} alt="Instagram" />
                    ))}
                  </div>
                </aside>

                <aside className={styles.sidebarWidget}>
                  <h3 className={styles.widgetTitle}>{intl.formatMessage({ id: 'blog.newsletter' })}</h3>
                  <Input
                    type="email"
                    placeholder={intl.formatMessage({ id: 'blog.enterEmail' })}
                    className={styles.newsletterInput}
                  />
                  <Button type="primary" block className={styles.newsletterButton}>
                    {intl.formatMessage({ id: 'blog.subscribe' })}
                  </Button>
                </aside>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  )
}

export default Blog

import React, { useState } from 'react'
import { Row, Col, Input, Button } from 'antd'
import { Link, useIntl } from '@umijs/max'
import { UserOutlined, MessageOutlined } from '@ant-design/icons'
import styles from './blog.less'

const Blog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const intl = useIntl()

  const blogPosts = [
    {
      id: 1,
      title: 'Google inks pact for new 35-storey office',
      excerpt:
        'That dominion stars lights dominion divide years for fourth have don\'t stars is that he earth it first without heaven in place seed it second morning saying.',
      image: '/assets/img/blog/single_blog_1.jpg',
      day: '15',
      month: 'Jan',
      categories: 'Travel, Lifestyle',
      comments: '03 Comments'
    },
    {
      id: 2,
      title: 'Google inks pact for new 35-storey office',
      excerpt:
        'That dominion stars lights dominion divide years for fourth have don\'t stars is that he earth it first without heaven in place seed it second morning saying.',
      image: '/assets/img/blog/single_blog_2.jpg',
      day: '15',
      month: 'Jan',
      categories: 'Travel, Lifestyle',
      comments: '03 Comments'
    },
    {
      id: 3,
      title: 'Google inks pact for new 35-storey office',
      excerpt:
        'That dominion stars lights dominion divide years for fourth have don\'t stars is that he earth it first without heaven in place seed it second morning saying.',
      image: '/assets/img/blog/single_blog_3.jpg',
      day: '15',
      month: 'Jan',
      categories: 'Travel, Lifestyle',
      comments: '03 Comments'
    },
    {
      id: 4,
      title: 'Google inks pact for new 35-storey office',
      excerpt:
        'That dominion stars lights dominion divide years for fourth have don\'t stars is that he earth it first without heaven in place seed it second morning saying.',
      image: '/assets/img/blog/single_blog_4.jpg',
      day: '15',
      month: 'Jan',
      categories: 'Travel, Lifestyle',
      comments: '03 Comments'
    },
    {
      id: 5,
      title: 'Google inks pact for new 35-storey office',
      excerpt:
        'That dominion stars lights dominion divide years for fourth have don\'t stars is that he earth it first without heaven in place seed it second morning saying.',
      image: '/assets/img/blog/single_blog_5.jpg',
      day: '15',
      month: 'Jan',
      categories: 'Travel, Lifestyle',
      comments: '03 Comments'
    }
  ]

  const categories = [
    { name: 'Resaurant food', count: 37 },
    { name: 'Travel news', count: 10 },
    { name: 'Modern technology', count: 3 },
    { name: 'Product', count: 11 },
    { name: 'Inspiration', count: 21 },
    { name: 'Health Care', count: 9 }
  ]

  const recentPosts = [
    { title: 'From life was you fish...', date: 'January 12, 2019', image: '/assets/img/post/post_1.jpg' },
    { title: 'The Amazing Hubble', date: '02 Hours ago', image: '/assets/img/post/post_2.jpg' },
    { title: 'Astronomy Or Astrology', date: '03 Hours ago', image: '/assets/img/post/post_3.jpg' },
    { title: 'Asteroids telescope', date: '01 Hours ago', image: '/assets/img/post/post_4.jpg' }
  ]

  const tags = ['project', 'love', 'technology', 'travel', 'restaurant', 'life style', 'design', 'illustration']
  const instagramFeeds = [
    '/assets/img/post/post_5.jpg',
    '/assets/img/post/post_6.jpg',
    '/assets/img/post/post_7.jpg',
    '/assets/img/post/post_8.jpg',
    '/assets/img/post/post_9.jpg',
    '/assets/img/post/post_10.jpg'
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
                      <Link to={`/blog/${post.id}`} className={styles.blogTitleLink}>
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
                          <Link to="/blog/1">{post.title}</Link>
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

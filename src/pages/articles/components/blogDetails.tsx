import React from 'react'
import { useParams } from '@umijs/max'
import styles from './blogDetails.less'

const BlogDetails: React.FC = () => {
  const { id } = useParams()

  return (
    <div className={styles.blogDetails}>
      <div className={styles.container}>
        <h1>Blog Details - {id}</h1>
        <p>Detailed blog content goes here</p>
      </div>
    </div>
  )
}

export default BlogDetails

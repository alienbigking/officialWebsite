import React from 'react'
import { Carousel, Image } from 'antd'
import { ZoomInOutlined } from '@ant-design/icons'
import { useIntl } from '@umijs/max'
import styles from './ShowcaseImageCarousel.less'

type ResponsiveSetting = {
  breakpoint: number
  settings: {
    slidesToShow: number
  }
}

export type ShowcaseImageCarouselProps = {
  images: string[]
  className?: string
  slidesToShow?: number
  autoplay?: boolean
  autoplaySpeed?: number
  responsive?: ResponsiveSetting[]
  label?: string
  imageHeight?: number
}

const ShowcaseImageCarousel: React.FC<ShowcaseImageCarouselProps> = ({
  images,
  className,
  slidesToShow = 5,
  autoplay = true,
  autoplaySpeed = 3000,
  responsive = [
    { breakpoint: 1200, settings: { slidesToShow: 5 } },
    { breakpoint: 992, settings: { slidesToShow: 4 } },
    { breakpoint: 768, settings: { slidesToShow: 3 } },
    { breakpoint: 576, settings: { slidesToShow: 2 } }
  ],
  label,
  imageHeight = 300
}) => {
  const intl = useIntl()
  const maskLabel = label ?? intl.formatMessage({ id: 'common.portfolios' })

  return (
    <section className={`${styles.section} ${className ?? ''}`}>
      <Image.PreviewGroup>
        <Carousel autoplay={autoplay} autoplaySpeed={autoplaySpeed} dots={false} slidesToShow={slidesToShow} responsive={responsive}>
          {images.map((img, index) => (
            <div key={`${img}-${index}`} className={styles.item}>
              <Image
                src={img}
                alt={`${maskLabel} ${index + 1}`}
                className={styles.image}
                style={{ height: imageHeight }}
                preview={{
                  mask: (
                    <div className={styles.previewMask}>
                      <ZoomInOutlined />
                      <span>{maskLabel}</span>
                    </div>
                  )
                }}
              />
            </div>
          ))}
        </Carousel>
      </Image.PreviewGroup>
    </section>
  )
}

export default ShowcaseImageCarousel

import Image from 'next/image'
import Link from 'next/link'
import classes from './Testimonials.module.css'

// Import Swiper React components
import { Pagination, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials({ testimonials }) {
  return (
    <div className={classes.testimonials__slider}>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      >
        {testimonials &&
          testimonials.map((testimonial, index) => {
            return (
              <SwiperSlide key={index}>
                <blockquote>
                  <p>
                    <span>"</span>{' '}{testimonial.testimonial}{' '}<span>"</span>
                  </p>
                  <footer>
                    {testimonial.image && (
                      <Image
                        src={testimonial.image}
                        alt={`Portrait of ${testimonial.author}`}
                        width={96}
                        height={96}
                      />
                    )}

                    <div>
                      <strong>
                        {testimonial.link !== undefined ? (
                          <div>
                            <Link href={`${testimonial.link}`} target='_blank' title="Click to open website">
                              {testimonial.author}
                            </Link>
                          </div>
                        ) : (
                          <div>{testimonial.author}</div>
                        )}
                      </strong>
                      {testimonial.country}
                    </div>
                  </footer>
                </blockquote>
              </SwiperSlide>
            )
          })}
      </Swiper>
    </div>
  )
}
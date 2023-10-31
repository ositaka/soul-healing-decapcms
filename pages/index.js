import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import { allPages, allSettings } from "/.contentlayer/generated"
import Image from 'next/image';

import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
// import Link from 'next/link';

// Import Swiper React components
import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


export default function Home({ home }) {
  const SEO = allSettings[0].seo

  return (
    <>
      <NextSeo
        title={SEO.title}
        description={SEO.description}
        openGraph={{
          url: 'http://thegoldenhealing.online',
          title: `${SEO.title}`,
          description: `${SEO.description}`,
          // images: [
          //   {
          //     url: `${ImageUrl('banner.png')}`,
          //     width: 1224,
          //     height: 724,
          //     alt: 'banner',
          //     type: 'image/jpeg',
          //   },
          // ],
          site_name: 'The Golden Healing',
        }}
      />

      <Layout>
        <div className='hero-image'>
          <Image fill priority src={home.image} sizes="100vw" alt="..." />
        </div>
        {home.section.map((section, index) => {
          return (
            section.section_type === "section_repeatable_content" ?
              <section key={section.title} id={section.main_menu?.name} className={'section section--' + section.section_type}>
                <div className='section__content'>
                  <div className='section__items'>
                    {section.items && section.items.map((item, index) => {
                      return (
                        <div key={index} className='section__item'>
                          <figure>
                            <Image width={280} height={186} src={item.image} alt="..." sizes="100vw" />
                          </figure>

                          <div className="section__item-content">
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <a href={`/${item.link}`}>Read more &rarr;</a>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>
              : section.section_type === "testimonials" ?
                <section key={section.title} id={section.main_menu?.name} className={'section section--text_only'}>
                  <div className='section__content'>

                    <h2>{section.title}</h2>

                    <div className="testimonials__slider">
                      <Swiper
                        modules={[Pagination, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                      >
                        {section.testimonials && section.testimonials.map((testimonial, index) => {
                          return (
                            <SwiperSlide key={index}>
                              <blockquote>
                                <p><span>"</span> {testimonial.testimonial} <span>"</span></p>
                                <footer>
                                  {testimonial.image &&
                                    <Image src={testimonial.image} alt={`Portrait of ${testimonial.author}`} width={96} height={96} />}

                                  <div>
                                    <strong>{testimonial.link !== undefined
                                      ? <div><a href={`${testimonial.link}`}>{testimonial.author}</a></div>
                                      : <div>{testimonial.author}</div>
                                    }
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
                  </div>
                </section>
                :
                <section key={section.title} id={section.main_menu?.name} className={'section section--' + section.section_type + ' is-image-' + section.image_position}>
                  <div className='section__content'>
                    {index === 0 ? <h1>{section.title}</h1> : <h2>{section.title}</h2>}
                    <div>
                      <ReactMarkdown remarkPlugins={[gfm]} children={section.text?.raw} />
                    </div>
                  </div>
                  {section.image &&
                    <div className='section__image'>
                      <Image width={1200} height={1800} src={section.image} alt="..." sizes="(min-width: 1000px) calc(39vw + 30px), 92.06vw" placeholder="blur" blurDataURL={`${section.image}? w = 64 & q= 60`}
                      />
                    </div>}
                </section>

          )
        })}

        {/* 
        <div className="container py-5">
          <h1 className="fw-bolder">{home.title}</h1>
          <div className="lead py-5" style={{ fontSize: "2rem" }}>
            <ReactMarkdown remarkPlugins={[gfm]} children={home.description} />
          </div>
        </div> */}
      </Layout >

    </>
  )
}

// fetch first ten posts 
export async function getStaticProps() {

  const home = await allPages.find((home) => {
    return home.slug === "home"
  })


  return {
    props: {
      home,
    },
  }
}

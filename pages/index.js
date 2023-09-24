import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import { sortByDate, ImageUrl, pageCount } from '../utils'
import { allPages } from "/.contentlayer/generated"
import { pick } from "@contentlayer/client";
import Pagnation from '../components/Pagnation';
import { show_per_page } from "../config"
import Image from 'next/image';

import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';
import Link from 'next/link';

export default function Home({ home }) {

  return (
    <>
      <NextSeo
        title="Welcome to my blog home page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support"
        openGraph={{
          url: 'http://soul-healing.netlify.app',
          title: 'Welcome to my blog home page',
          description: 'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support',
          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Soul Healing',
        }}
      />

      <Layout>
        <div className='hero-image'>
          <Image fill priority src={home.image} sizes="100vw" alt="..." />
        </div>
        {home.section.map(section => {
          return (
            section.section_type === "section_repeatable_content" ?
              <section key={section.title} id={section.main_menu?.name} className={'section section--' + section.section_type}>
                <div className='section__content'>
                  <h2>{section.title}</h2>

                  {section.items && section.items.map((item, index) => {
                    return (
                      <div key={index} className='section__item'>
                        <figure>
                          <Image width={280} height={186} src={item.image} alt="..." sizes="100vw" />
                        </figure>

                        <div className="section__item-content">
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                          <a href="javascript:alert('Page will be available soon.')">Read more &rarr;</a>
                        </div>

                      </div>

                    )
                  })}

                  <div style={{ display: 'flex', height: '200px' }}>
                    {/* Shape 1 */}
                    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                          <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                          <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <path fill="url(#sw-gradient)"
                        d="M28,-33C36,-26.8,41.8,-17.6,43.1,-7.9C44.4,1.7,41.2,11.8,35.8,20.2C30.4,28.6,22.8,35.2,13.7,39.2C4.5,43.3,-6.2,44.9,-15.9,42C-25.6,39.2,-34.4,32.1,-38.7,23.1C-43.1,14.1,-43.1,3.2,-40.3,-6.2C-37.5,-15.6,-32,-23.6,-24.9,-29.9C-17.7,-36.3,-8.8,-41,0.6,-41.7C10.1,-42.4,20.1,-39.2,28,-33Z" width="100%" height="100%" transform="translate(50 50)"
                        style={{ transition: "all 0.3s ease 0s" }}></path>
                    </svg>

                    {/* Shape 2 */}
                    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                          <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                          <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <path fill="url(#sw-gradient)"
                        d="M23.6,-27.9C30.1,-22.7,34.6,-14.8,35.8,-6.5C37.1,1.8,35.3,10.6,30.9,17.5C26.5,24.4,19.5,29.5,11.6,32.8C3.7,36.2,-5.3,37.7,-13.5,35.4C-21.6,33.1,-28.9,27,-34.3,19.1C-39.7,11.2,-43.1,1.5,-42.4,-8.4C-41.7,-18.2,-36.9,-28.2,-29.2,-33.2C-21.4,-38.2,-10.7,-38.2,-1.1,-36.9C8.6,-35.6,17.1,-33.1,23.6,-27.9Z" width="100%" height="100%" transform="translate(50 50)"
                        style={{ transition: "all 0.3s ease 0s" }}></path>
                    </svg>

                    {/* Shape 3 */}
                    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                          <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                          <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <path fill="url(#sw-gradient)"
                        d="M20.8,-27.3C27,-24.2,32,-18.1,33.6,-11.3C35.2,-4.6,33.4,2.8,30.5,9.4C27.7,16,23.9,21.8,18.6,27.8C13.4,33.9,6.7,40.1,-0.2,40.4C-7.1,40.7,-14.2,35,-19.9,29.2C-25.6,23.3,-29.9,17.2,-33.7,9.9C-37.5,2.6,-40.8,-5.8,-39.6,-14C-38.5,-22.1,-33,-30,-25.6,-32.7C-18.3,-35.4,-9.1,-33.1,-0.9,-31.8C7.3,-30.6,14.6,-30.4,20.8,-27.3Z" width="100%" height="100%" transform="translate(50 50)"
                        style={{ transition: "all 0.3s ease 0s" }}></path>
                    </svg>

                    {/* Shape 4 */}
                    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                          <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                          <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <path fill="url(#sw-gradient)"
                        d="M32.2,-11C36.3,2.2,30.5,18.2,19.9,25.4C9.3,32.7,-6.2,31.3,-18.1,23.1C-30,14.9,-38.4,-0.1,-34.7,-12.7C-31.1,-25.3,-15.6,-35.5,-0.8,-35.2C14,-35,28,-24.3,32.2,-11Z" width="100%" height="100%" transform="translate(50 50)"
                        style={{ transition: "all 0.3s ease 0s" }}></path>
                    </svg>

                    {/* Shape 5 */}
                    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                          <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                          <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <path fill="url(#sw-gradient)"
                        d="M28.2,-18.1C33.1,-7.8,31.3,4.6,25.5,13.5C19.7,22.3,9.8,27.7,-1.1,28.3C-12,28.9,-24,24.8,-29.1,16.3C-34.3,7.9,-32.7,-5,-26.7,-15.9C-20.7,-26.9,-10.3,-35.8,0.7,-36.2C11.7,-36.6,23.3,-28.4,28.2,-18.1Z" width="100%" height="100%" transform="translate(50 50)"
                        style={{ transition: "all 0.3s ease 0s" }}></path>
                    </svg>

                    {/* Shape 6 */}
                    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                          <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                          <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <path fill="url(#sw-gradient)"
                        d="M26.1,-34C33.2,-30.8,37.8,-22.3,38,-14.2C38.1,-6,33.7,1.8,31.4,10.6C29.1,19.5,28.8,29.4,23.9,34C19,38.7,9.5,38.1,1.5,35.9C-6.4,33.8,-12.9,30.2,-19.8,26.2C-26.7,22.2,-34.1,17.9,-37.4,11.3C-40.7,4.7,-39.9,-4,-37.7,-12.6C-35.4,-21.3,-31.6,-29.8,-25.1,-33.2C-18.6,-36.7,-9.3,-35,0.1,-35.2C9.5,-35.3,19,-37.3,26.1,-34Z" width="100%" height="100%" transform="translate(50 50)"
                        style={{ transition: "all 0.3s ease 0s" }}></path>
                    </svg>

                    {/* Shape 7 */}
                    <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                          <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                          <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
                        </linearGradient>
                      </defs>
                      <path fill="url(#sw-gradient)"
                        d="M28.2,-33.8C34.9,-27.9,37.8,-17.5,39.5,-7C41.3,3.4,42,14,38,22.9C34,31.7,25.3,38.7,15.6,41.7C5.9,44.7,-4.8,43.7,-14.2,39.9C-23.5,36.1,-31.5,29.5,-36.4,21C-41.2,12.6,-42.8,2.4,-40.6,-6.6C-38.4,-15.7,-32.4,-23.5,-25,-29.3C-17.5,-35.1,-8.8,-38.9,1,-40.1C10.7,-41.2,21.4,-39.7,28.2,-33.8Z" width="100%" height="100%" transform="translate(50 50)"
                        style={{ transition: "all 0.3s ease 0s" }}></path>
                    </svg>
                  </div>

                </div>
              </section>
              :
              <section key={section.title} id={section.main_menu?.name} className={'section section--' + section.section_type}>
                <div className='section__content'>

                  <h2>{section.title}</h2>
                  <div>
                    <ReactMarkdown remarkPlugins={[gfm]} children={section.text?.raw} />
                  </div>
                </div>
                {section.image &&
                  <div className='section__image'>
                    <Image width={1200} height={1200} src={section.image} alt="..." sizes="100vw" />
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

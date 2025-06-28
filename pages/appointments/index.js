import { useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { ImageUrl } from '../../utils'
import { allPages } from "/.contentlayer/generated";
import Layout from '../../components/Layout';


  export default function Appointments({ appointments }) {
  return (
    <>
      <NextSeo
        title="Appointments page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO appointments"
        openGraph={{
          url: 'http://thegoldenhealing.online',
          title: 'Appointments page',
          description: 'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO appointments',
          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'The Golden Healing',
        }}
      />

      <Layout>
        <section className="section section--text_only" style={{maxWidth:'100%', marginBottom: '0'}}>
          <div className="section__content" style={{ width: '100%', textAlign: 'center' }}>
            <h1>{appointments.title}</h1>
            <p>{appointments.description}</p>
            <iframe src='https://calendly.com/trance-healing-with-tiago' width='100%' height='500' />
          </div>
        </section>
      </Layout>
    </>
  )
}


export async function getStaticProps() {
  const appointments = await allPages.find((appointments) => {

    return appointments.slug === "appointments"

  })

  return { props: { appointments } }
}

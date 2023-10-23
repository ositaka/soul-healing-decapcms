import { NextSeo } from 'next-seo';
import { ImageUrl } from '../../utils'
import { allPages } from "/.contentlayer/generated";
import Layout from '../../components/Layout';
import Accordion from '../../components/Accordion';

export default function Benefits({ benefits }) {
  return (
    <>
      <NextSeo
        title="Benefits page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO benefits"
        openGraph={{
          url: 'http://thegoldenhealing.online',
          title: 'Benefits page',
          description: 'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO benefits',
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
        <section className="section section--text_only">
          <div className="section__content" style={{ width: '100%', textAlign: 'center' }}>
            <h1>{benefits.title}</h1>
            <p>{benefits.description}</p>
            <Accordion accordions={benefits.accordions} />
          </div>
        </section>
      </Layout>
    </>
  )
}



export async function getStaticProps() {
  const benefits = await allPages.find((benefits) => {

    return benefits.slug === "benefits"

  })

  console.log(benefits)

  return { props: { benefits } }
}

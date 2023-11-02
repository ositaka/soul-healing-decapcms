import { NextSeo } from 'next-seo'
import Layout from '../components/Layout'
import { allPages, allSettings } from '/.contentlayer/generated'
import Section from '../components/Section'
import HeroImage from '../components/HeroImage'

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
        <HeroImage image={home.image} />

        {home.section.map((section, index) => (
          <Section key={index} section={section} index={index} />
        ))}
      </Layout>
    </>
  )
}

// fetch first ten posts
export async function getStaticProps() {
  const home = await allPages.find((home) => {
    return home.slug === 'home'
  })

  return {
    props: {
      home,
    },
  }
}

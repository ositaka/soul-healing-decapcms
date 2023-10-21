import { NextSeo } from 'next-seo';
import { ImageUrl } from '../../../utils'
import { allPages } from "/.contentlayer/generated";
import Layout from '../../../components/Layout';

export default function MorningTest({ morningTest }) {

  return (
    <>
      <NextSeo
        title="morningTest page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO morningTest"
        openGraph={{
          url: 'http://soul-healing.netlify.app',
          title: 'morningTest page',
          description: 'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO morningTest',
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
        <div className="container">
          <div className="text-center my-5">
            <h1 className="fw-bolder">{morningTest.title}</h1>
            <p className="lead mb-0">{morningTest.description}</p>
          </div>
        </div>
      </Layout>
    </>
  )
}



export async function getStaticPaths( /* { locale = ??? how do I get current locale ? } */) {

  const publish = allPages.map((morningTest) => ({ params: { slug: morningTest.slug, locale: 'en' } }))

  return {
    paths: publish,
    fallback: false,
  }
}


export async function getStaticProps() {

  const morningTest = await allPages.find((morningTest) => {

    return morningTest.slug === "morning-test" && morningTest.locale === 'en'

  })

  return { props: { morningTest } }
}

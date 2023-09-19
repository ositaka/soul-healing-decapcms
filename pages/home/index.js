import { NextSeo } from 'next-seo';
import { ImageUrl } from '../../utils'
import { allPages } from "/.contentlayer/generated";
import Layout from '../../components/Layout';


export default function Home({ home }) {

  return (
    <>
      <NextSeo
        title="Home page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO home"
        openGraph={{
          url: 'http://soul-healing.netlify.app',
          title: 'Home page',
          description: 'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO home',
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
            <h1 className="fw-bolder">{home.title}</h1>
            <p className="lead mb-0">{home.description}</p>
          </div>
        </div>
      </Layout>
    </>
  )
}


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

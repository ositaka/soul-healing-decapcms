import { NextSeo } from 'next-seo';
import { ImageUrl } from '../../utils'
import { allPages } from "/.contentlayer/generated";
import Layout from '../../components/Layout';


export default function Bookings({ bookings }) {

  return (
    <>
      <NextSeo
        title="Bookings page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO bookings"
        openGraph={{
          url: 'http://soul-healing.netlify.app',
          title: 'Bookings page',
          description: 'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO bookings',
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
            <h1 className="fw-bolder">{bookings.title}</h1>
            <p className="lead mb-0">{bookings.description}</p>
          </div>
        </div>
      </Layout>
    </>
  )
}



export async function getStaticProps() {
  const bookings = await allPages.find((bookings) => {

    return bookings.slug === "bookings"

  })

  return { props: { bookings } }
}

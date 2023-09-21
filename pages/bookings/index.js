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
        <section className="section section--text_only">
          <div className="section__content">
            <h1>{bookings.title}</h1>
            <p>{bookings.description}</p>
          </div>
        </section>
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

import { NextSeo } from 'next-seo';
import { ImageUrl } from '../../../utils'
import { allPages } from "/.contentlayer/generated";
import Layout from '../../components/Layout';


export default function Appointments({ appointments }) {

  return (
    <>
      <NextSeo
        title="Appointments page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO appointments"
        openGraph={{
          url: 'http://soul-healing.netlify.app',
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
          site_name: 'Soul Healing',
        }}
      />

      <Layout>
        <section className="section section--text_only">
          <div className="section__content" style={{ width: '100%', textAlign: 'center' }}>
            <h1>{appointments.title}</h1>
            <p>{appointments.description}</p>
            <div style={{ minHeight: '60vh' }}>
              <script src="https://embed.ycb.me" async data-domain="thegoldenhealing"></script>
            </div>
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

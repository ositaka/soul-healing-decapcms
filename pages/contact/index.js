import { NextSeo } from 'next-seo';
import { ImageUrl } from '../../utils'
import { allPages } from "/.contentlayer/generated";
import Layout from '../../components/Layout';


export default function Contact({ contact }) {

  return (
    <>
      <NextSeo
        title="Contact page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO contact"
        openGraph={{
          url: 'http://the-golden-healing.com',
          title: 'Contact page',
          description: 'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO contact',
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
        <div className="container">
          <div className="text-center my-5">
            <h1 className="fw-bolder">{contact.title}</h1>
            <p className="lead mb-0">{contact.description}</p>
          </div>
        </div>
      </Layout>
    </>
  )
}



export async function getStaticProps() {
  const contact = await allPages.find((contact) => {

    return contact.slug === "contact"

  })

  return { props: { contact } }
}

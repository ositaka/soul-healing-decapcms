import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import { allPages } from "/.contentlayer/generated";
import Layout from '../../components/Layout';

import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

export default function NewsPage({ page }) {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  // debugger
  // const date = new Date(page.date)

  return (
    <>
      <NextSeo
        title={page.title}
        description={page.description}
        openGraph={{
          url: 'https://soul-healing-new.netlify.app',
          title: page.title,
          description: page.description,
          // images: [{
          //   url: page.image,
          //   width: 1224,
          //   height: 724,
          //   alt: page.title,
          //   type: 'image/jpeg'
          // }],
          site_name: 'Soul Healing'
        }}
      />
      <Layout>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <button type="button" style={{ "padding": "8px 16px" }} onClick={() => router.back()}>&larr; Back</button>
              <br></br>
              <br></br>
              <br></br>
              <h1>{page.title}</h1>
              <ReactMarkdown className='' remarkPlugins={[gfm]} children={page.body?.raw} />

            </div>
          </div>

        </div>
        {/* <div className='image'>
          <Image fill priority src={page.image} sizes="100vw" alt="..." />
        </div> */}
      </Layout>
    </>
  )
}




// export async function getStaticPaths({ locales }) {
export async function getStaticPaths({ locales }) {

  // const publish = allSubPages.map((page) => ({ params: { slug: page.slug } }))

  // const home = await allPages.find((page) => ({ params: { slug: 'home' } }))
  // const page = allPages.find((page) => {

  //   return page.slug === 'home'

  // })

  // console.log(page, 'pppppppppaaaaggggeee')

  const testPage = allPages.filter(
    (page, i) => {
      return page.slug === 'home'
    }
  )


  const paths = testPage.flatMap(() => {
    return locales.map((locale) => ({
      params: {
        slug: 'home',
      },
      locale,
    }));
  });

  // get all the post slug
  // const publish = allSubPages.map((page) => ({ params: { slug: page.slug } }))

  // console.log(paths, '=================== allPages test')

  // console.log(testPage, 'pathspathspathspathspathspathspathspathspathspathspathspathspathspathspathspathspathspathspaths')

  return {
    paths,
    fallback: true,
  }
}

export async function getStaticProps({ params: { slug, locale } }) {

  // fetch a single post by slug

  const page = allPages.find((page) => {

    console.log(page.slug === slug, '----------------------------------------------')
    return page.slug === slug && locale

  })

  return { props: { page } }
}
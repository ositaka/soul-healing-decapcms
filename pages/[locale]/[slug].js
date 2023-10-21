import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import { allSubPages, allPages } from "/.contentlayer/generated";
import Layout from '../../components/Layout';

import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

export default function NewsPage({ page }) {
  const router = useRouter()
  const { locale, locales, defaultLocale } = router

  console.log(locale, 'locale from routerr -----------------------')
  console.log(locales, 'locales from routerr -----------------------')
  console.log(defaultLocale, 'defaultLocale from routerr -----------------------')


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
export async function getStaticPaths({ locales = ['en', 'pt'] }) {

  const testPage = allPages.find(page => page.slug === "contact");
  console.log(testPage)

  const paths = allPages.flatMap((page) => {
    return locales.map((locale) => ({
      params: {
        slug: page.slug,
      },
      locale,
    }));
  });
  // get all the post slug
  // const publish = allSubPages.map((page) => ({ params: { slug: page.slug } }))

  // console.log(paths, '========SSSSSLLLLLLUUUUUUGGGGGG=========== allSubPages new test')

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {


  // fetch a single post by slug

  const page = allSubPages.find((page) => {

    return page.slug === slug

  })

  return { props: { page } }
}
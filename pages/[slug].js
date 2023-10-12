import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import { allSubPages } from "/.contentlayer/generated";
import Layout from '../components/Layout';

import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

export default function NewsPage({ page }) {
  const router = useRouter()

  // debugger
  // const date = new Date(page.date)

  return (
    <>
      <NextSeo
        title={page.title}
        description={page.description}
        openGraph={{
          url: 'https://thegoldenhealing.online',
          title: page.title,
          description: page.description,
          // images: [{
          //   url: page.image,
          //   width: 1224,
          //   height: 724,
          //   alt: page.title,
          //   type: 'image/jpeg'
          // }],
          site_name: 'The Golden Healing'
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




export async function getStaticPaths() {

  //  filter the post and get the publish post.
  // const page = allSubPages.filter(
  //   (pageItem, i) => {
  //     return pageItem.draft === false
  //   }
  // )

  // get all the post slug
  const publish = allSubPages.map((page) => ({ params: { slug: page.slug } }))


  return {
    paths: publish,
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
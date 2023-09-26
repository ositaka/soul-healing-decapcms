import { useRouter } from 'next/router'
import Link from 'next/link'
import { slugify } from '../../utils'
import { NextSeo } from 'next-seo';
import Image from 'next/image';

import { allNews } from "/.contentlayer/generated";
import Layout from '../../components/Layout';

import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

export default function NewsPage({ news }) {
  const router = useRouter()

  // debugger
  const date = new Date(news.date)

  return (
    <>
      <NextSeo
        title={news.title}
        description={news.description}
        openGraph={{
          url: 'https://soul-healing-new.netlify.app',
          title: news.title,
          description: news.description,
          type: 'article',
          article: {
            publishedTime: news.date,
            directors: [
              'https://soul-healing-new.netlify.app/',
            ],
            tags: news.tags,
          },
          // images: [{
          //   url: news.image,
          //   width: 1224,
          //   height: 724,
          //   alt: news.title,
          //   type: 'image/jpeg'
          // }],
          site_name: 'Soul Healing'
        }}
      />
      <Layout>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <button type="button" style={{ "padding": "10px 20px" }} onClick={() => router.back()}>&larr; Back to News</button>
              <br></br>
              <br></br>
              <br></br>
              <h1>{news.title}</h1>
              <h6>Date: {`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`} </h6>
              <ReactMarkdown className='' remarkPlugins={[gfm]} children={news.body?.raw} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}




export async function getStaticPaths() {

  //  filter the post and get the publish post.
  const news = allNews.filter(
    (newsItem, i) => {
      return newsItem.draft === false
    }
  )

  // get all the post slug
  const publish = allNews.map((news) => ({ params: { slug: news.slug } }))


  return {
    paths: publish,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {


  // fetch a single post by slug

  const news = allNews.find((news) => {

    return news.slug === slug

  })

  return { props: { news } }
}
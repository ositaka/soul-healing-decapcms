import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import { sortByDate, ImageUrl, pageCount } from '../utils'
import { allPages } from "/.contentlayer/generated"
import { pick } from "@contentlayer/client";
import Pagnation from '../components/Pagnation';
import { show_per_page } from "../config"

import ReactMarkdown from "react-markdown";
import gfm from 'remark-gfm';

export default function Home({ home, works, totalPostCount }) {

  return (
    <>
      <NextSeo
        title="Welcome to my blog home page"
        description="Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support"
        openGraph={{
          url: 'http://b-on.netlify.app',
          title: 'Welcome to my blog home page',
          description: 'Build nextjs blog website with Markdown, sitemap, serachbar, category, tag and SEO support',
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
        {/* <h6> {JSON.stringify(home)} </h6> */}

        <div className="container py-5">
          <h1 className="fw-bolder">{home.title}</h1>
          <div className="lead py-5" style={{ fontSize: "2rem" }}>
            <ReactMarkdown remarkPlugins={[gfm]} children={home.description} />
          </div>
        </div>
      </Layout >

    </>
  )
}

// fetch first ten posts 
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

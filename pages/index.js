import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import Work from '../components/Work'
import { sortByDate, ImageUrl, pageCount } from '../utils'
import { allPages, allWorks } from "/.contentlayer/generated"
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

        <video preload="auto" poster={home.video.cover} width="100%" playsInline autoPlay loop muted disablePictureInPicture disableRemotePlayback>
          <source src={home.video.desktop} type="video/mp4" />
        </video>

        <div className="container py-5">
          <h1 className="fw-bolder">{home.text.title}</h1>
          <div className="lead py-5" style={{ fontSize: "2rem" }}>
            <ReactMarkdown remarkPlugins={[gfm]} children={home.text.description} />
          </div>
          <Pagnation totalPostCount={totalPostCount} />
        </div>
      </Layout >

    </>
  )
}

// fetch first ten posts 
export async function getStaticProps() {

  //  help of pick get require filter value
  const works = allWorks.map((work) => pick(work, ["title", "director", "date", "slug", "description", "video", "tags", "categories"]));


  // sort article base on  date
  let workSortByDate = works.sort(sortByDate)


  // filter publish works
  const publish = workSortByDate.filter(
    (work, i) => {
      return work.draft === false
    }
  )

  // count how many pages
  let totalPostCount = pageCount(allWorks.length)

  //  get only first ten work
  let totalWorks = publish.slice(0, show_per_page)

  const home = await allPages.find((home) => {
    return home.slug === "home"
  })


  return {
    props: {
      home,
      works: totalWorks,
      totalPostCount
    },
  }

}

import Work from '../components/Work'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo';
import { allNews } from "/.contentlayer/generated";
import { ImageUrl, slugify } from '../utils'
import Link from 'next/link';


export default function Search() {
  const { query } = useRouter()
  const TempPosts = []
  const TempDirectors = []
  const TempNews = []

  allNews.map(
    (news) => {
      if (news.draft === false) {
        if (news.title.toLowerCase().includes(query.q) || news.description.toLowerCase().includes(query.q)) {
          TempNews.push(news)
        } else {
          TempNews.push(null)
        }
      }
    }
  )

  const news = TempNews.filter(
    path => {
      return path && path
    }
  )

  return (
    <div>
      <NextSeo
        title="Search the page"
        description="Find the search result page"
        openGraph={{
          url: 'http://b-on.netlify.app',
          title: 'Search the page',
          description: 'Find the search result page',
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
      <div className="container">
        <div className="row">

          <div className="col-lg-8 m-auto">

            <h1>News</h1>
            {
              news.length > 0 ?
                news.map((news, index) => (
                  <Link key={index} href={`/news/${slugify(news.title)}`}>{news.title}</Link>
                )) : null
            }

          </div>
        </div>
      </div>
    </div >
  )
}

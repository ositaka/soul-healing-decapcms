import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { allNews } from "/.contentlayer/generated";
import { pick } from "@contentlayer/client";
import { sortByDate, ImageUrl } from '../../utils'
import Layout from '../../components/Layout';

export default function News({ news }) {

  return (
    <>
      <NextSeo
        title="Latest News"
        description="This is the page to show all available works. We should be able to add tags or categories as links."
        openGraph={{
          url: 'http://atelierverbeke.be',
          title: 'Latest News',
          description: 'This is the page to show all available works. We should be able to add tags or categories as links.',
          images: [
            {
              url: `${ImageUrl('banner.png')}`,
              width: 1224,
              height: 724,
              alt: 'banner',
              type: 'image/jpeg',
            },
          ],
          site_name: 'Atelier Verbeke',
        }}
      />

      <Layout>
        <div className="container">
          <div className="text-center my-5">
            <h1 className="fw-bolder">Latest News</h1>
            <p className="lead mb-0">This is the page to show all the news.</p>
          </div>
        </div>

        <div className="container  my-5">
          <div className="row">
            {news.map(newsIem => {
              return (
                <Link key={newsIem.slug} href={`/news/${newsIem.slug}/`} className="card p-5 col-lg-4">
                  <h4>{newsIem.title}</h4>
                  <p>{newsIem.description}</p>
                  <span>Read more</span>
                </Link>
              )
            }
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

// fetch first ten news 
export async function getStaticProps() {

  //  help of pick get require filter value
  const news = allNews.map((news) => pick(news, ["title", "date", "slug", "description"]));


  // // sort article base on  date
  // let newsSortByDate = news.sort(sortByDate)


  // // filter publish news
  // const publish = newsSortByDate.filter(
  //   (newsItem, i) => {
  //     return newsItem.draft === false
  //   }
  // )

  // console.log(news, 'news -----------------------')

  return {
    props: {
      news: news,
    },
  }

}
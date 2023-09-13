import ItemPost from '../../components/ItemPost'
import { slugify, ImageUrl } from '../../utils'
import { NextSeo } from 'next-seo';

import { allWorks } from "/.contentlayer/generated";
import Layout from '../../components/Layout';



export default function Category({ posts }) {

  return (
    <>
      <NextSeo
        title='Access your category realted articles'
        description='Access your category realted articles'
        openGraph={{
          url: 'https://b-on.netlify.app',
          title: 'Access your category realted articles',
          description: 'Access your category realted articles',

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
        <div className="container my-3">
          <div className="row">
            <div className="col-lg-10 post-date m-1 p-2m-auto">
              {
                posts.map((post, index) => {

                  return <ItemPost key={index} post={post} />

                }
                )
              }
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}


export async function getStaticPaths() {

  let paths = []

  // get all category paths  
  allWorks.map(
    post => {
      if (post.draft === false) {
        post.categories.map(
          category => {
            const slug = slugify(category)
            paths.push({ params: { slug } })
          }
        )

      }
    }
  )

  return {
    paths,
    fallback: false,
  }


}

export async function getStaticProps({ params: { slug } }) {

  let posts = []

  // get all category posts base on slug  
  const post = allWorks.map(
    (post) => {

      if (post.draft === false) {

        post.categories.filter(
          category => {
            const categorySlug = slugify(category)
            if (categorySlug === slug) {
              posts.push(post)
            }
          }

        )
        return posts
      }
    }
  )


  return { props: { posts } }

}

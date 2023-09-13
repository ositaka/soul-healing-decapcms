import Link from 'next/link'
import ItemPost from '../../components/ItemPost'
import { slugify, ImageUrl } from '../../utils'
import { NextSeo } from 'next-seo';
import { allWorks } from "/.contentlayer/generated";
import Layout from '../../components/Layout';

export default function tag({ posts }) {
  return (
    <>
      <NextSeo
        title='Access your tag realted articles'
        description='Access your tag realted articles'
        openGraph={{
          url: 'https://b-on.netlify.app',
          title: 'Access your tag realted articles',
          description: 'Access your tag realted articles',

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
  // get all tag paths  
  allWorks.map(
    post => {
      if (post.draft === false) {
        post.tags.map(
          tag => {
            const slug = slugify(tag)
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

  // get all tag posts base on slug  
  const post = allWorks.map(
    (post) => {

      if (post.draft === false) {

        post.tags.filter(
          tag => {
            const tagSlug = slugify(tag)
            if (tagSlug === slug) {
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


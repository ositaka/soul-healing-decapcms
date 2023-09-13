import Link from 'next/link'
import { slugify } from '../utils'

export default function ItemPost({ post }) {

  const date = new Date(post.date)

  return (
    <div className="card mb-4">
      <Link href={`/work/${post.slug}`} > <img className="card-img-top" src={post.image} alt={post.title} /></Link>
      <div className="card-body">
        <div className="small text-muted">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</div>
        <h2 className="card-title">{post.title}</h2>
        <p className="card-text">{post.description}</p>
        <Link href={`/work/${post.slug}`} className='btn'>Read More</Link>

        by &mdash; <Link href={`/directors/${slugify(post.director)}`}>{post.director}</Link>
      </div>
    </div>


  )
}
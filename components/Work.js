import Link from 'next/link'
import { slugify } from '../../utils'
import Image from 'next/image'

export default function Work({ work }) {

  const date = new Date(work.date)

  return (
    <div className="card mb-4">
      <Link href={`/work/${work.slug}`} >
        <Image className="card-img-top" width={600} height={300} src={work.video.cover} alt="..." />
      </Link>
      <div className="card-body">
        {/* <div className="small text-muted">{`${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`}</div> */}
        {/* <div> {
          work.tags.map(
            tag => {

              const slug = slugify(tag)

              return (<Link key={tag} href={`/tag/${slug}`} className='btn'>
                <h6 className=' work-title'>#{tag}</h6>
              </Link>)
            }
          )
        } </div> */}
        <Link href={`/work/${work.slug}`}>
          <h4 className="card-title">{work.title}</h4>
        </Link>
        <small>
          {work.description}<br />
          Director: <Link href={`/directors/${slugify(work.director)}`}><b>{work.director}</b></Link>
        </small>
        {/* <Link href={`/work/${work.slug}`} className='btn'>Read More </Link> */}
      </div>
    </div>
  )
}
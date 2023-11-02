import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import Image from 'next/image'
import Link from 'next/link';
import Testimonials from './Testimonials';

export default function Section({ section, index }) {
  const isTextOnlySection = section.section_type === 'text_only'
  const isTextImageSection = section.section_type === 'text_image'
  const isRepeatableSection = section.section_type === 'section_repeatable_content'
  const isTestimonialsSection = section.section_type === 'testimonials'

  return (
    <>
      {isRepeatableSection &&
        <section id={section.main_menu?.name} className={'section section--' + section.section_type} >
          <div className="section__content">
            <h2>{section.title}</h2>

            <div className="section__items">
              {section.items &&
                section.items.map((item, index) => {
                  return (
                    <div key={index} className="section__item">
                      <figure>
                        <Image
                          width={280}
                          height={186}
                          src={item.image}
                          alt="..."
                          sizes="100vw"
                        />
                      </figure>

                      <div className="section__item-content">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                        <Link href={`/${item.link}`}>Read more &rarr;</Link>
                      </div>
                    </div>
                  )
                })}
            </div>
          </div>
        </section>
      }

      {isTestimonialsSection &&
        <section id={section.main_menu?.name} className={'section section--text_only'} >
          <div className="section__content">
            <h2>{section.title}</h2>

            <Testimonials testimonials={section.testimonials} />
          </div>
        </section>
      }

      {isTextOnlySection &&
        <section id={section.main_menu?.name}
          className={'section section--' + section.section_type + ' is-image-' + section.image_position}
        >
          <div className="section__content">
            {index === 0 ? <h1>{section.title}</h1> : <h2>{section.title}</h2>}
            <div>
              <ReactMarkdown remarkPlugins={[gfm]} children={section.text?.raw} />
            </div>
          </div>
          {section.image && (
            <div className="section__image">
              <Image
                width={1200}
                height={1800}
                src={section.image}
                alt="..."
                sizes="(min-width: 1000px) calc(39vw + 30px), 92.06vw"
                placeholder="blur"
                blurDataURL={`${section.image}?w=64&q=60`}
              />
            </div>
          )}
        </section>
      }

      {isTextImageSection &&
        <section key={section.title} id={section.main_menu?.name} className={'section section--' + section.section_type + ' is-image-' + section.image_position}>
          <div className='section__content'>
            {index === 0 ? <h1>{section.title}</h1> : <h2>{section.title}</h2>}
            <div>
              <ReactMarkdown remarkPlugins={[gfm]} children={section.text?.raw} />
            </div>
          </div>
          {section.image &&
            <div className='section__image'>
              <Image width={1200} height={1800} src={section.image} alt="..." sizes="(min-width: 1000px) calc(39vw + 30px), 92.06vw" placeholder="blur" blurDataURL={`${section.image}? w = 64 & q= 60`}
              />
            </div>}
        </section>
      }
    </>
  )
}

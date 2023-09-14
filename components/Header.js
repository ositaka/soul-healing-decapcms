import Link from 'next/link'
import { allPages } from "./../.contentlayer/generated";

export default function Header({ }) {
  let menu = allPages.find((home) => {
    return home.slug === "home"
  })

  menu = menu.section

  return (<>

    <header className="header">
      <div className="navigation" id="myTopnav">
        <Link href="/#Home" className='active'>Soul Healing</Link>

        {menu
          .filter(section => section.main_menu.show)
          .map(section => {
            return (<Link key={section.main_menu.name} href={'/#' + section.main_menu.name} className=''>
              {section.main_menu.name}
            </Link>
            )
          })}
        <Link href="/bookings" className=''>Bookings</Link>
        <Link href="/news" className=''>News</Link>
        <Link href="/contact" className=''>Contact</Link>
      </div>
    </header>
  </>
  )
}

import Link from 'next/link'
import { allPages } from "./../.contentlayer/generated";

export default function Header({ }) {
  let menu = allPages.find((home) => {
    return home.slug === "home"
  })

  menu = menu.section

  // const myFunction = () => {
  //   var x = document.getElementById("myTopnav");
  //   if (x.className === "navigation") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "navigation";
  //   }
  // }

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
        {/* <Link href="/bookings" className=''>Bookings</Link> */}
        <Link href="/news" className=''>News</Link>
        {/* <Link href="/contact" className=''>Contact</Link> */}
        <a href="javascript:void(0);" className="icon">
          <div className="icon__menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </a>
      </div>
    </header>
  </>
  )
}

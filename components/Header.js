import { useState } from 'react'
import { allPages } from '/.contentlayer/generated'
import Link from 'next/link'
import classes from './Header.module.css'
import WhatsApp from './WhatsApp'

export default function Header({ }) {
  let menu = allPages.find((home) => {
    return home.slug === 'home'
  })

  menu = menu.section

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.header__wrapper}>
          <Link href="/#Welcome">The Golden Healing</Link>

          <nav className={`${classes.navigation} ${isMenuOpen ? classes.open : ''}`}>
            <button
              aria-expanded={isMenuOpen}
              aria-controls="menu"
              onClick={toggleMenu}
            >
              <svg
                id="i-menu"
                aria-label="Menu"
                viewBox="0 0 32 32"
                width="16"
                height="16"
                fill="none"
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="6.25%"
              >
                <path d="M4 8 L28 8 M4 16 L28 16 M4 24 L28 24"></path>
              </svg>
            </button>

            <ul id="menu" className={classes.menu} onClick={closeMenu}>
              {menu
                .filter((section) => section.main_menu?.show)
                .map((section) => {
                  return (
                    <li key={section.main_menu.name}>
                      <Link
                        key={section.main_menu.name}
                        href={'/#' + section.main_menu.name}a
                        className=""
                      >
                        {section.main_menu.name}
                      </Link>
                    </li>
                  )
                })}
              {/* <li><Link href="/news" className=''>News</Link></li> */}
              <li>
                <Link
                  href="/appointments"
                  className={classes.button}
                  style={{
                    padding: '1.3ch 1.9ch',
                    border: '1px solid #666',
                    borderRadius: '40px',
                    maxWidth: '80%',
                    margin: 'auto',
                  }}
                >
                  Appointments
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <WhatsApp />
    </>
  )
}

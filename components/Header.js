import Link from 'next/link'
export default function Header() {
  return (<>

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/" className='navbar-brand'>
          Soul Healing
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/news" className='nav-link'>News</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className='nav-link'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
  )
}
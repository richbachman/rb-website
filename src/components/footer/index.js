import React from 'react'
import SOCIALLINKS from '../../constants/socialLinks'

import './_footer.css'

const Footer = ()=> {
  const social = SOCIALLINKS.map(item => (
    <a
      href={item.URL}
      key={item.NETWORK}
      target="_blank"
      title={item.NETWORK}
      rel="noopener noreferrer"
      className="icon-link"
    >
      <div className="icon icon--codepen">
        {item.SVG}
      </div>
    </a>
  ))

  return (
    <footer>
      <div className="footer__inner">
        {social}
        <p>&copy; {(new Date().getFullYear())} Rich Bachman // <a href="mailto:rb@richbachman.com" title="Contact">Contact</a></p>
      </div>
    </footer>
  )
}

export default Footer

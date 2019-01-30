import React from 'react'
import { Link } from 'gatsby'

import NavItem from '../navitem'
import './_header.css'

const logo = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 376.5 376.4">
    <path d="M188.2 263.3l125 65.6c-33.2 29.6-77 47.5-125 47.5 c-48 0-91.8-18-125-47.5L188.2 263.3z"></path>
    <path d="M58.4 324.7C22.4 290.3 0 241.9 0 188.2 c0-60.6 28.7-114.5 73.2-149l201.9 139.5c0.5 0.4 1.1 1.1 1.1 1.9c0 1.3-1 2.3-2.3 2.3c-0.4 0-1-0.2-1-0.2L61.5 91.2 c0 0-1.4-0.7-1.8-0.7c-1.3 0-2.3 1-2.3 2.3c0 0.8 0.4 1.5 1 1.9l159.6 113.2c0.5 0.4 1 1.2 1 2c0 1.3-1 2.3-2.3 2.3 c-0.2 0-0.7-0.1-0.7-0.1L62.3 159.8c-0.8-0.3-1.4-0.6-1.9-0.6c-1.3 0-2.3 1-2.3 2.3c0 0.8 0.8 1.7 1.4 2.1l102.2 74.9 c0.4 0.4 1 1.1 1 1.8c0 1.3-1 2.3-2.3 2.3l-0.6 0L58.4 216.6V324.7z"></path><path d="M296.9 133.1L78.4 35.3C109.4 13.1 147.3 0 188.2 0 c104 0 188.2 84.3 188.2 188.2c0 53.7-22.5 102.1-58.5 136.4l-77.5-88.1l56.5-30.3c13.9-6.2 23.6-20.4 23.6-36.7 C320.5 153.4 310.9 139.4 296.9 133.1z"></path>
  </svg>
)

const Header = props => (
  <header>
    <div className="header__grid">
      <div className="header__logo">
        <Link to="/">{logo}</Link>
      </div>
      <div className="header__contact">
        <ul>
          <NavItem to="/journal">Journal</NavItem>
          <li>
            <a href="mailto:rb@richbachman.com" title="Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="header__content">
        <h1>{props.heading}</h1>
        { props.subheading.length > 0 ? ( <p>{props.subheading}</p> ) : null }
      </div>
    </div>
  </header>
)

export default Header

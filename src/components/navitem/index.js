import React from 'react'
import { Link } from 'gatsby'

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : null
}

const NavItem = props => (
  <li>
    <Link to={props.to} getProps={isActive}>{props.children}</Link>
  </li>
)

export default NavItem
import React from 'react';
import { Link } from 'react-router-dom'

import './HeaderLink.module.css'

const HeaderLink = ({ to, children }) => {
  return (
    <Link to={to}>{children}</Link>
  )
}

export default HeaderLink;
import React from 'react';
import { Link } from 'react-router-dom'

import styles from './HeaderLink.module.css'

const HeaderLink = ({ to, children }) => {
  return (
    <Link className={styles['header-link']} to={to}>{children}</Link>
  )
}

export default HeaderLink;
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import styles from './HeaderLink.module.css'

const HeaderLink = ({ to, children }) => {
  return (
    <Fragment>
      <Link id={`header-link${to.replace('/', '-')}`} className={styles['header-link']} to={to}>{children}</Link>
    </Fragment>
  )
}

export { HeaderLink }
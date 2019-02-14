import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import styles from './HeaderLink.module.css'

const HeaderLink = ({ to, children }) => {
  return (
    <Fragment>
      <Link className={styles['header-link']} to={to}>{children}</Link>
    </Fragment>
  )
}

export { HeaderLink }
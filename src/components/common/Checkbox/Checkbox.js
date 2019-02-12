import React, { Fragment } from 'react'

import styles from './Checkbox.module.css'

const Checkbox = ({ label, name }) => {
  return (
    <Fragment>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input className={styles.input} onChange={(e) => console.log(e.target.value)} type="checkbox" name={name}/>
    </Fragment>
  )
}

export { Checkbox };
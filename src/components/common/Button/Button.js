import React from 'react';

import styles from './Button.module.css';

const Button = ({ children, clickHandler }) => {

  const onClick = (e) => {
    e.preventDefault()
    clickHandler()
  }

  return (
    <button onClick={(e) => onClick(e)} className={styles['button']}>{children}</button>
  )
}

export  { Button };
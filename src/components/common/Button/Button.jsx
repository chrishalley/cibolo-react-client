import React from 'react';

import styles from './Button.module.css';

const Button = ({ children, clickHandler, ...restProps }) => {

  return (
    <button type="button" onClick={(e) => clickHandler && clickHandler(e)} className={styles['button']} {...restProps}>{children}</button>
  )
}

export  { Button };
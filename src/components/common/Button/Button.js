import React from 'react';

import styles from './Button.module.css';

const Button = ({ children, clickHandler }) => {
  return (
    <button onClick={() => clickHandler()} className={styles['button']}>{children}</button>
  )
}

export  { Button };
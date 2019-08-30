import React from 'react';

import styles from './Button.module.css';

export const Button = ({
  children,
  clickHandler,
  label, 
  ...restProps }) => (
    <button
      type="button"
      onClick={(e) => clickHandler && clickHandler(e)} className={styles['button']}
      {...restProps}>
    {children || label}
    </button>);
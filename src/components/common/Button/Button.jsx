import React from 'react';

import styles from './Button.module.css';

export const Button = ({
  children,
  label,
  onClick,
  type = 'button' 
}) => (
  <button
    type={type}
    onClick={(e) => onClick(e)} className={styles['button']}
  >
    {children || label}
  </button>
);
import React from 'react';

import styles from './Card.module.css';

const Card = (props) => {
  const { children, className } = props
  return (
    <div className={`${styles['card']} ${className}`} onClick={e => e.stopPropagation()}>
      {children}
    </div>
  )
}

export { Card };
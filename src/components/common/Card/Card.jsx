import React, { Fragment } from 'react';

import styles from './Card.module.css';
import { SecondaryButton, SVGIcon } from '../';

const Card = (props) => {
  const { closeMethod, title, children, className } = props

  const renderHeader = () => {
      return (
        <Fragment>
          <header className={styles['card-header']}>
            {title && <h2 className={styles['card-title']}>{title}</h2>}
            {closeMethod && <SecondaryButton className={styles['card-close']} onClick={closeMethod}><SVGIcon style={{ width: '1.5rem' }} icon="close" /></SecondaryButton>}
          </header>
          {title && <hr className={styles['header-divider']}/>}
        </Fragment>
      );
  }

  return (
    <div className={`${styles['card']} ${className}`} onClick={e => e.stopPropagation()}>
      {renderHeader()}
      {children}
    </div>
  )
}

export { Card };
export default Card;
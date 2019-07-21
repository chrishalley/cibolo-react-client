import React from 'react';
import cx from 'classnames';

import styles from './Card.module.css';
import { SecondaryButton, SVGIcon } from '../';

export const Card = ({
  closeMethod,
  title,
  children,
  className,
  ...restProps
}) => {

  const renderHeader = () => (
    <>
      <header className={styles.cardHeader}>
        {title && <h2 className={styles.cardTitle}>{title}</h2>}
        {closeMethod && <SecondaryButton className={styles.cardClose} onClick={closeMethod}><SVGIcon strokeWidth="10" style={{ width: '1.5rem' }} icon="close" /></SecondaryButton>}
      </header>
      {title && <hr className={styles.headerDivider}/>}
    </>
  );

  return (
    <div className={cx(styles.card, className)} onClick={e => e.stopPropagation()} {...restProps}>
      {(title || closeMethod) && renderHeader()}
      {children}
    </div>
  )
}

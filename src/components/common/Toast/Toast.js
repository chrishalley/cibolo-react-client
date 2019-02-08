import React from 'react';

import styles from './Toast.module.css'

const Toast = ({ content, type }) => {
  return (
    <div className={styles.toast}>
      <p className={`${styles['toast-content']} ${styles[type]}`}>{content}</p>
    </div>
  )
}

export { Toast }
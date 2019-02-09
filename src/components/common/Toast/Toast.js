import React from 'react';

import styles from './Toast.module.css'

const Toast = ({ content, type }) => {
  const renderToast = () => {
    if (content) {
      return (
        <p className={`${styles['toast-content']} ${styles[type]}`}>{content}</p>
      )
    }
  }

  return (
    <div className={styles.toast}>
      {renderToast()}
    </div>
  )
}

export { Toast }
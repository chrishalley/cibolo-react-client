import React from 'react'

import styles from './FormSection.module.css';

const FormSection = ({ title, children, flexDirection='column' }) => {

  const renderTitle = () => {
    if (title) {
      return (
        <div>
          <h3>{title}</h3>
          <hr className={styles['divider']}></hr>
        </div>
      );
    }
  }
  return (
    <div>
      {renderTitle()}
      <div style={{ display: 'flex', flexDirection }}>
        { children }
      </div>
    </div>
  )
}

export { FormSection }
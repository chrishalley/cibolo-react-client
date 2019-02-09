import React from 'react'

import styles from './Screen.module.css'

const Screen = ({ children, extStyles }) => {
  
  const renderExtStyles = () => {
    if (extStyles && extStyles.screen) {
      return extStyles.screen
    }
  }

  return (
    <div className={`${styles.screen} ${renderExtStyles()}`}>
      {children}
    </div>
  )
}

export { Screen }
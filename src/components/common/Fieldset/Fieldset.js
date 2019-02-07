import React from 'react';

import styles from './Fieldset.module.css';

const Fieldset = ({ label, type, errorMessage, placeholder }) => {
  return (
    <React.Fragment>
      <fieldset className={styles['fieldset']}>
        <label htmlFor="">{label}</label>
        <input type={type} placeholder={placeholder}/>
        <div>{errorMessage}</div>
      </fieldset>
    </React.Fragment>
  )
}

export { Fieldset };
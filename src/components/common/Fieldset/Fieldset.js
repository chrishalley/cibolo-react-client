import React from 'react';

import styles from './Fieldset.module.css';

const Fieldset = ({ label, type, stateProp, errorMessage, placeholder, onChangeHandler }) => {

  return (
    <fieldset className={styles['fieldset']}>
      <label htmlFor="">{label}</label>
      <input onChange={(e) => onChangeHandler(stateProp, e.target.value)} type={type} placeholder={placeholder}/>
      <div>{errorMessage}</div>
    </fieldset>
  )
}

export { Fieldset };
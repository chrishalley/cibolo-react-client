import React from 'react';

import styles from './Fieldset.module.css';

const Fieldset = ({ label, type, stateProp, errorMessage, placeholder, onInput }) => {

  return (
    <React.Fragment>
      <fieldset className={styles['fieldset']}>
        <label htmlFor="">{label}</label>
        <input onChange={(e) => onInput(stateProp, e.target.value)} type={type} placeholder={placeholder}/>
        <div>{errorMessage}</div>
      </fieldset>
    </React.Fragment>
  )
}

export { Fieldset };
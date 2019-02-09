import React from 'react';

import { Toast } from '../../../../'

import styles from './Fieldset.module.css';

const Fieldset = ({ fieldsetConfig }) => {

  const { label, type, stateProp, errorMessage, placeholder, onChangeHandler } = fieldsetConfig

  const renderToast = () => {
    if (errorMessage) {
      return (
        <Toast type="error" content={errorMessage}/>
      )
    }
  }

  return (
    <fieldset className={styles['fieldset']}>
      <label htmlFor="">{label}</label>
      <input onChange={(e) => onChangeHandler(stateProp, e.target.value)} type={type} placeholder={placeholder}/>
      {renderToast()}
    </fieldset>
  )
}

export default Fieldset
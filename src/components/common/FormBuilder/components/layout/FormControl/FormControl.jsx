import React from 'react';

import { Button } from '../../../../Button/Button'

import styles from './FormControl.module.css'

  const FormControl = (props) => {
    console.log({props});
    const { controls, disabled } = props;

    return (
      <div className={styles.formControl}>
        {controls.map((control, i) => {
          const { type, onClick, label } = control;
          return  <Button key={i} type={type} onClick={onClick} disabled={disabled}>{label}</Button>
        })}
      </div>
    );
  }

  export { FormControl };
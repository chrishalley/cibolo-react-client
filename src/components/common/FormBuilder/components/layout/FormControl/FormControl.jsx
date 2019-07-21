import React from 'react';

import { Button } from '../../../../Button/Button'

import styles from './FormControl.module.css'

  const FormControl = (props) => {
    const { controls } = props;

    return (
      <div className={styles.formControl}>
        {controls.map((control, i) => {
          const { type, onClick, label } = control;
          return  <Button key={i} type={type} onClick={onClick}>{label}</Button>
        })}
      </div>
    );
  }

  export { FormControl };
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Card, SVGIcon, SecondaryButton, FormBuilder } from '../';

import styles from './Modal.module.css';

const Modal = (props) => {

  const { closeHandler, children, ...restProps } = props;

  useEffect(() => {
    // document.querySelector('body').classList.add('noScroll')
    document.documentElement.style.overflow = 'hidden';
    document.body.scroll = "no";
    
    return () => {
      document.documentElement.style.overflow = 'scroll';
      document.body.scroll = "yes";
    }

  })

  return ReactDOM.createPortal(
    <div className={styles['modal-container']} onClick={(e) => {
      e.stopPropagation();
      closeHandler();
    }}>
      <Card {...restProps} closeMethod={closeHandler} className={styles['modal-card']}>
        {children}
      </Card>
    </div>,
    document.querySelector('#modal')
  );
}

export { Modal };
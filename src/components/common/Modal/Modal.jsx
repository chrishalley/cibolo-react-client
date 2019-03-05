import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Card, SVGIcon, SecondaryButton, FormBuilder } from '../';

import styles from './Modal.module.css';

const Modal = ({ closeHandler, children }) => {

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
      <Card className={styles['modal-card']}>
        <SecondaryButton className={styles['modal-close']} onClick={() => closeHandler()}><SVGIcon style={{ width: '20px' }} icon="close" /></SecondaryButton>
        {children}
      </Card>
    </div>,
    document.querySelector('#modal')
  );
}

export { Modal };
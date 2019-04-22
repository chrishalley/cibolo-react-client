import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Card } from '../';

import styles from './Modal.module.css';

const propTypes = {
  closeHandler: PropTypes.func
}

const defaultProps = {
  closeHandler: () => console.warn('no closeHandler() specified')
}

const Modal = (props) => {

  const { closeHandler, children, ...restProps } = props;

  useEffect(() => {
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

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export { Modal };
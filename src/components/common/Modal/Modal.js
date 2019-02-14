import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

import { Card, SVGIcon, Button } from '../'

import styles from './Modal.module.css'

const Modal = ({ closeHandler, children }) => {

  useEffect(() => {
    console.log('modal mounted')
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
      console.log('click')
      e.stopPropagation()
      closeHandler()
    }}>
      <Card className={styles['modal-card']}>
        <Button classes="rando" clickHandler={() => closeHandler()}><SVGIcon icon="close" width="20px"/></Button>
        {children}
      </Card>
    </div>,
    document.querySelector('#modal')
  )
}

export { Modal }
import React from 'react'
import ReactDOM from 'react-dom'

import { Card } from '../'

import styles from './Modal.module.css'

const Modal = ({ closeHandler, children }) => {
  return ReactDOM.createPortal(
    <div className={styles['modal-container']}>
      <Card>
        <h1>Modal Card</h1>
        <button style={{ padding: '2rem' }} onClick={() => closeHandler()}>Close</button>
        {children}
      </Card>
    </div>,
    document.querySelector('#modal')
  )
}

export { Modal }
import React, { Component } from 'react'

import styles from './Draggable.module.css'

class Draggable extends Component {

  state = { score: 0 }

  render () {
    return (
      <div className={styles.draggable} >
        <div className={styles.ball} draggable onDrag={() => { console.log('dragged') }}/>
        <div className={styles.basket}
         onDragOver={(e) => e.preventDefault()} 
         onDrop={() => {
           this.setState({ score: this.state.score + 1 })
         }}/>
      </div>
    )
  }
}

export default Draggable
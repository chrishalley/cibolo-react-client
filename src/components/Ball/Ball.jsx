import React, { forwardRef, useState } from 'react';
import posed from 'react-pose';

import styles from './Ball.module.css';

const Div = forwardRef((props, ref) => {
  return (
    <div ref={ref} className={styles['ball']}></div>
  )
})

const Ball = posed(Div)({
  offset: {
    x: ({index}) => index * 200
  }
});

const PosedBall = props => {
  const [index, setIndex] = useState(0);
  return (
  <div>
    <Ball pose='offset' poseKey={index} index={index}/>
    <button onClick={() => setIndex(index + 1)}>Click</button>
    <p>Index: {index}</p>
  </div>
)}

export default PosedBall;

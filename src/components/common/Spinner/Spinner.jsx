import React, { useState } from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './Spinner.module.css'

const propTypes = {
  size: PropTypes.string,
  color: PropTypes.string
}

const defaultProps = {
  size: 'm',
}

const Spinner = ({
  size,
  color
}) => {

  const [length, setLength] = useState(0)

  const callbackRef = node => {
    if (!node) return
    setLength(node.getTotalLength())
  }

  console.log({length})

  return (
    <svg className={cx(styles.Spinner, styles[`SpinnerSize--${size}`])} id="svg" viewBox="0 0 100 100">
      <path
        className={styles.SpinnerPath}
        ref={callbackRef}
        fill="transparent"
        stroke={color ? color : null}
        strokeWidth="5"
        strokeLinejoin="round"
        style = {{
          strokeDasharray: length - (length / 3),
          strokeDashoffset: (length + (length / 3))
        }}
        d="M 50, 25
          a 25,25 0 1, 1 0,50
          a 25,25 0 1, 1 0,-50
          Z" />
    </svg>
  )
}

Spinner.propTypes = propTypes
Spinner.defaultProps = defaultProps

export { Spinner }

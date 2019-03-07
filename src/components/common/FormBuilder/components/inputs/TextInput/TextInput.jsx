import React from 'react'
import PropTypes from 'prop-types'

import styles from './TextInput.module.css'

const proptypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

const defaultProps = {
  type: 'text',
  onChange: () => { console.warn('onChange callback is not set') }
}

const TextInput = (props) => {
  const { type, disabled, placeholder, onChange, onBlur, name, value } = props

  const onChangeHandler = (e) => {
    onChange({ path: name, value: e.target.value })
  }

  return (
    !disabled ? <input
      key={name}
      value={value}
      className={styles.input}
      type={type}
      placeholder={placeholder}
      onChange={(e) => onChangeHandler(e)}
      onBlur={(e) => onBlur({ value: e.target.value })}
    /> :
    <p>{value}</p>
  )
}

TextInput.propTypes = proptypes
TextInput.defaultProps = defaultProps

export { TextInput }
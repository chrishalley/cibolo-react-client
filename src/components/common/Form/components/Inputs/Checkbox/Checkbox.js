import React from 'react'
import PropTypes from 'prop-types'

import styles from './Checkbox.module.css'

const propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

const defaultProps = {
  onChange: () => {}
}

const Checkbox = (props) => {
  const { label, name, options, onChange, value } = props

  const renderCheckboxes = (options, value) => {
    return options.map(option => {
      const { name } = option
      return (
        <div key = { name } >
          <label className={styles.label} htmlFor={name}>{name}</label>
          <input checked={value[name]} className={styles.input} onChange={() => onChange(name)} type="checkbox" name={name} />
        </div>
      )}
    )
  }

  return (
    <div className={name}>
      {renderCheckboxes(options, value)}
    </div>
  )
}

Checkbox.propTypes = propTypes
Checkbox.defaultProps = defaultProps

export { Checkbox };
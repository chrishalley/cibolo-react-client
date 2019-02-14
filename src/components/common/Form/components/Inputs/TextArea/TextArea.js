import React from 'react'
import PropTypes from 'prop-types'

const proptypes = {
  rows: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

const defaultProps = {
  rows: '10',
  value: '',
  placeholder: '',
  onChange: () => { console.warn('onChange callback is not set') }
}

const TextArea = (props) => {
  const { rows, onChange, value, name, placeholder } = props
  return (
    <textarea placeholder={placeholder} value={value[name]} rows={rows} onChange={(event) => onChange(event.target.value)}/>
  )
}

TextArea.propTypes = proptypes
TextArea.defaultProps = defaultProps

export { TextArea }
import React from 'react'
import PropTypes from 'prop-types'

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
  const { type, placeholder, onChange, name } = props
  // console.log('TextInput props: ', props)
  // console.log('TextInput name: ', name)
  return (
    <input type={type} placeholder={placeholder} onChange={(e) => {onChange(e.target.value)}}/>
  )
}

TextInput.propTypes = proptypes
TextInput.defaultProps = defaultProps

export { TextInput }
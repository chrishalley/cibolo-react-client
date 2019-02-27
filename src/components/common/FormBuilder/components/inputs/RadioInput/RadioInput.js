import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const proptypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.node
  })),
  onChange: PropTypes.func.isRequired
}

const defaultProps = {
  onChange: () => { console.warn('onChange callback is not set') }
}

const RadioInput = (props) => {
  console.log('radioInput props: ', props)

  const renderInputs = (props) => {
    const { options, name, value, onChange } = props

    return options.map(option => (
      <Fragment key={option.label}>
        <label htmlFor={option.value}>{option.label}</label>
        <input checked={value[name] === option.value} type="radio" name={name} value={option.value} onChange={() => { onChange(option.value) }}></input>
      </Fragment>
      )
    )
  }

  return (
    <div>
      {renderInputs(props)}
    </div>
  )
}

RadioInput.propTypes = proptypes
RadioInput.defaultProps = defaultProps

export { RadioInput }
import React, { Fragment } from 'react'

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

export { RadioInput }
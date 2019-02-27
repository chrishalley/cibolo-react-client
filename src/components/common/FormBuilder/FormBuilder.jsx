import React, { useState } from 'react'
import { set, merge, get, uniqueId, values } from 'lodash'

import { Button, Toast } from '../'
import { Fieldset, FieldGroup, FormSection } from './components/sections'

const FormBuilder = (props) => {
  const { form, submitHandler, error } = props
  const [state, setState] = useState(setInitialState())

  function setInitialState() { // Returns state object after recursive mapping of form prop
    let state = {}
    getStateValues(form, state)
    return state
  }
  
  // useEffect(() => {
  //   console.log(state)
  // }, [state])

  function getStateValues(array, state) { // Recursively searches through (nested) array and assigns form field names/values to state argument
    return array.forEach(elem => {
      if (elem.component === 'Submit') {
        return
      } else if (elem.component !== 'Fieldset') {
        return getStateValues(elem.children, state)
      } else {
        return set(state, elem.props.name, elem.props.defaultValue || '')
      }
    })
  }

  // Form level validation
  const isFormValid = () => {
    const fields = values(state)
    const validations = fields.map(field => {
      return field.valid
    })
    console.log(validations)
    if (validations.indexOf(false) !== -1) {
      console.log('form is invalid')
      return false
    } else {
      console.log('form is valid')
      return true
    }
  }

  function onChangeHandler(path, data) {
    const nestedUpdate = {}
    set(nestedUpdate, path, { value: data.value, valid: data.valid })
    setState(merge(state, nestedUpdate))
  }

  const switchComponent = (type) => {
    switch(type) {
      case 'FormSection':
        return FormSection
      case 'FieldGroup':
        return FieldGroup
      case 'Fieldset':
        return Fieldset
      case 'Submit':
        return Button
      default:
        return 'div'
    }
  }

  const children = renderChildren(form)

  function renderChildren(children) {
    return children.map((child, i) => {
      const fieldsetProps = {}
      if (child.component === 'Fieldset') {
        fieldsetProps.onChange = onChangeHandler
        fieldsetProps.value = get(state, child.props.name)
      }
      return React.createElement(
        switchComponent(child.component),
        { 
          ...child.props,
          ...fieldsetProps,
          key: uniqueId()
        },
        child.children && (child.component !== 'Submit') ? renderChildren(child.children) : child.children
      )
    })
  }
  
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        if (isFormValid()) {
          submitHandler(state)
        } else {
          console.log('form is not valid')
        }
    }}>
      {children}
      <button></button>
      <Toast type="error" content={error}></Toast>
    </form>
  )
}

export { FormBuilder }
import React, { Component } from 'react'
import { get, set, merge } from 'lodash'

import { Section, Fieldgroup, Fieldset } from './components'
import { Checkbox } from './components/Inputs'

class Form extends Component {
  
  state = this.props.state

  updateState = (prop, value, callback) => {

    // Check for existence of state field
    if (get(this.state, prop) === undefined) {
      return console.error(`"${prop}" state property does not exist`)
    }
    // Else create object with correct path and set value
    let update = {}
    set(update, prop, value)

    // Replace state with deep merged update
    this.setState(merge(this.state, update), () => {
      callback(value)
    })
  }
  
  // callback function to grab initial state for each Fieldset component
  initState = (stateProp) => {
    const state = get(this.state, stateProp)
    console.log('initialiseFieldsetState')
    console.log(state)
    return state
  }

  formSubmit = () => {
    this.props.onSubmit(this.state)
  }

  static Section = Section
  static Fieldgroup = Fieldgroup
  static Fieldset = Fieldset
  static Checkbox = Checkbox

  render() {
    const { updateState, formSubmit, initState } = this
    return (
      this.props.children(updateState, formSubmit, initState)
    )
  }
}

export { Form }


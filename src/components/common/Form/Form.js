import React, { Component } from 'react'
import { get, set, merge } from 'lodash'

import { Section, Fieldgroup, Fieldset } from './components'

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

  formSubmit = () => {
    this.props.onSubmit(this.state)
  }

  static Section = Section
  static Fieldgroup = Fieldgroup
  static Fieldset = Fieldset

  render() {
    const { updateState, formSubmit } = this

    return (
      this.props.children(updateState, formSubmit)
    )
  }
}

export { Form }


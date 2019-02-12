import React, { Component } from 'react'

import { Section, Fieldgroup, Fieldset } from './components'

class Form extends Component {
  
  state = this.props.state

  updateState = (prop, value, callback) => {
    this.setState({ [prop]: value }, () => {
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


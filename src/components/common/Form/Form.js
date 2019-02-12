import React, { Component } from 'react'

import { Section, Fieldgroup, Fieldset } from './components'

class Form extends Component {
  
  state = this.props.state

  updateState = (prop, value) => {
    this.setState({ [prop]: value }, () => {
      console.log(this.state)
    })
  }

  formSubmit = () => {
    this.props.onSubmit(this.state)
  }

  getValue = (fieldName) => {
    return this.state[fieldName]
  }

  static Section = Section
  static Fieldgroup = Fieldgroup
  static Fieldset = Fieldset

  render() {
    const { updateState, formSubmit, getValue } = this

    return (
      this.props.children(updateState, formSubmit, getValue)
    )
  }
}

export { Form }


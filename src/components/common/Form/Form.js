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


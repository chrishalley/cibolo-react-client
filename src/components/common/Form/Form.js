import React, { Component } from 'react'

import { Section, Fieldgroup, Fieldset } from './components'

class Form extends Component {

  static Section = Section
  static Fieldgroup = Fieldgroup
  static Fieldset = Fieldset

  render() { 
    return (
      this.props.children()
    )
  }
}

export { Form }


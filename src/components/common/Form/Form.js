import React, { Component } from 'react'
import { get, set, merge } from 'lodash'
import PropTypes from 'prop-types'

import { Section, Fieldgroup, Fieldset } from './components/Sections'
import { Checkbox, TextInput, RadioInput, TextArea } from './components/Inputs'

const proptypes = {
  classes: PropTypes.string
}

const defaultProps = {

}

class Form extends Component {
  
  state = this.props.state

  updateState = (update, callback) => {
    this.setState(merge(this.state, update), () => {
      callback()
    })
  }
  
  // callback function to grab initial state for each Fieldset component
  initState = (stateProp) => {
    const state = {[stateProp]: get(this.state, stateProp)}
    return state
  }

  formSubmit = () => {
    this.props.onSubmit(this.state)
  }

  static Section = Section
  static Fieldgroup = Fieldgroup
  static Fieldset = Fieldset
  static Checkbox = Checkbox
  static TextInput = TextInput
  static RadioInput = RadioInput
  static TextArea = TextArea

  render() {
    const { updateState, formSubmit, initState } = this
    const { classes } = this.props
    return (
      <form className={classes}>
        {this.props.children(updateState, formSubmit, initState)}
      </form>
    )
  }
}

Form.propTypes = proptypes;
Form.defaultProps = defaultProps;

export { Form }


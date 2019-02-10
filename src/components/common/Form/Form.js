import React, { Component } from 'react'

import FormSection from './Section/Section'
import { Button } from '../../common' 

class Form extends Component {

  componentDidMount() {
    // console.log(this.props)
  }

  renderSections() {
    const { sections } = this.props.config
    
    return sections.map(section => {
      return (
        <FormSection sectionConfig={section} key={section.title}></FormSection>
      )
    })
  }

  render() {
    const { title, submitHandler } = this.props.config
    return (
      <div>
        <h1>{title}</h1>
        <form>
          {this.renderSections()}
          <Button clickHandler={submitHandler}>Request Booking</Button>
        </form>
      </div>
    )
  }
}

export { Form }
import React, { Component } from 'react'

import { Form } from '../common'

class BookingForm extends Component {

  state = { 
    client: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: ''
    },
    event: {
      title: '',
      description: '',
      featuredImage: ''
    }
  }

  connectData = ({ dataProp, dataValue }, callback) => {
    console.log('dataProp: ', dataProp)
    this.setState({ [dataProp]: dataValue })

    // Updates data property with value from input event
    const updateObject = (object, newValue, path) => {
      var stack = path.split('.');
      while (stack.length > 1) {
        object = object[stack.shift()];
      }
      object[stack.shift()] = newValue;
    }

  }

  submitHandler = () => {
    console.log('submit')
  }

  render() {
    return (
      <div>
        <Form config={this.config}></Form>
      </div>
    )
  }

  config = {
    title: 'Request a booking',
    submitHandler: this.submitHandler,
    sections: [
      {
        title: 'Your details',
        fieldGroups: [
          {
            id: "clientName",
            fieldsets: [
              { label: 'First name', placeholder: 'eg. John', type: 'text', stateProp: 'client.firstName', validate: false, classes: ['form-fieldset__input'], onChangeHandler: this.connectData },
              { label: 'Last name', placeholder: 'eg. Smith', type: 'text', stateProp: 'client.lastName', validate: false, classes: ['form-fieldset__input'] }
            ]
          },
          {
            id: "clientContact",
            fieldsets: [
              { label: 'Email address', placeholder: 'eg. johnsmith@example.com', type: 'text', stateProp: 'client.emailAddress', validate: false, classes: ['form-fieldset__input'] },
              { label: 'Phone number', placeholder: 'eg. 07123456789', type: 'text', stateProp: 'client.phoneNumber', validate: false, classes: ['form-fieldset__input'] }
            ]
          }
        ]
      },
      {
        title: 'Event details',
        fieldGroups: [
          {
            id: "eventName",
            fieldsets: [
              { label: 'Event title', placeholder: 'eg. My Awesome Event', type: 'text', stateProp: 'event.title', validate: false, classes: ['form-fieldset__input'] },
              { label: 'Event description', placeholder: 'Give your event a description', type: 'text', stateProp: 'event.description', validate: false, classes: ['form-fieldset__input'] }
            ]
          },
          {
            id: "eventMeta",
            fieldsets: [
              { label: 'Featured image', placeholder: '**TODO**', type: 'text', stateProp: 'event.featuredImage', validate: false, classes: ['form-fieldset__input'] }
            ]
          }
        ]
      }
    ]
  }
}

export default BookingForm
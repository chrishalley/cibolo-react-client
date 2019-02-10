import React, { Component } from 'react'
import * as deepmerge from 'deepmerge'

import { Form } from '../common'
import FormValidator from '../common/FormValidator/FormValidator'
import validator from 'validator'

class BookingForm extends Component {
  

  validatorConfig = [
    {
      field: 'client.firstName',
      method: validator.isEmpty,
      validWhen: false,
      message: 'Please provide a first name'
    },
    {
      field: 'client.lastName',
      method: validator.isEmpty,
      validWhen: false,
      message: 'Please provide a last name'
    }
  ]

  validatorObject = new FormValidator(this.validatorConfig)

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
    // Updates data property with value from input event
    const rootProp = dataProp.split('.')[0] // gets string of root state property being updated
    const updateObject = (path, updateValue, depth) => {
      var stack = path.split('.'); // splits string into array for update property path passed up from Input component
      let update = updateValue; // sets first round of update value to input value passed up from Input component
      while (stack.length > depth) { // begins update loop stopping before root state property string is reached in array
        let newObject = {} // instantiates new object for use during current loop iteration
        newObject[stack.pop()] = update // sets property on new object equal to value held in update object
        update = newObject; // replaces value of update object with value held by newly created update object, including any nested properties
      }
      return update // returns finalised update object complete with nested properties
    }
    const update = updateObject(dataProp, dataValue, 1)
    
    this.setState({ [rootProp]: deepmerge(this.state[rootProp], update) }, () => {
      let validation = this.validatorObject.validate(this.state)
      console.log(validation)
      validation = Object.keys(validation).map(key => {
        return {field: key, validation: validation[key]};
      });
      console.log('validation: ', validation)
      let newValidationObject = validation.map(entry => {
        return (entry.field !== 'isValid') ? updateObject(entry.field, entry.validation, 0) : null
      }).filter(entry => entry !== null)
      console.log('nVO: ', newValidationObject)
      
      // const newThing = deepmerge.all(newValidationObject)
      // this.setState(deepmerge(this.state, newThing), () => {
      //   console.log('mergedState: ', this.state)
      // })
    })
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
              { label: 'Last name', placeholder: 'eg. Smith', type: 'text', stateProp: 'client.lastName', validate: false, classes: ['form-fieldset__input'], onChangeHandler: this.connectData }
            ]
          },
          {
            id: "clientContact",
            fieldsets: [
              { label: 'Email address', placeholder: 'eg. johnsmith@example.com', type: 'text', stateProp: 'client.emailAddress', validate: false, classes: ['form-fieldset__input'], onChangeHandler: this.connectData },
              { label: 'Phone number', placeholder: 'eg. 07123456789', type: 'text', stateProp: 'client.phoneNumber', validate: false, classes: ['form-fieldset__input'], onChangeHandler: this.connectData }
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
              { label: 'Event title', placeholder: 'eg. My Awesome Event', type: 'text', stateProp: 'event.title', validate: false, classes: ['form-fieldset__input'], onChangeHandler: this.connectData },
              { label: 'Event description', placeholder: 'Give your event a description', type: 'text', stateProp: 'event.description', validate: false, classes: ['form-fieldset__input'], onChangeHandler: this.connectData }
            ]
          },
          {
            id: "eventMeta",
            fieldsets: [
              { label: 'Featured image', placeholder: '**TODO**', type: 'text', stateProp: 'event.featuredImage', validate: false, classes: ['form-fieldset__input'], onChangeHandler: this.connectData }
            ]
          }
        ]
      }
    ]
  }
}

export default BookingForm
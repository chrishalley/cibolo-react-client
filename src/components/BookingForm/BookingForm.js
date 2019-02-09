import React from 'react'

import { Form } from '../common'

const submitHandler = () => {
  console.log('submit')
}

const config = {
  title: 'Request a booking',
  submitHandler: submitHandler,
  sections: [
    {
      title: 'Your details',
      fieldGroups: [
        {
          id: "clientName",
          fieldsets: [
            { label: 'First name', placeholder: 'eg. John', type: 'text', id: 'client.firstName', validate: false, classes: ['form-fieldset__input'] },
            { label: 'Last name', placeholder: 'eg. Smith', type: 'text', id: 'client.lastName', validate: false, classes: ['form-fieldset__input'] }
          ]
        },
        {
          id: "clientContact",
          fieldsets: [
            { label: 'Email address', placeholder: 'eg. johnsmith@example.com', type: 'text', id: 'client.emailAddress', validate: false, classes: ['form-fieldset__input'] },
            { label: 'Phone number', placeholder: 'eg. 07123456789', type: 'text', id: 'client.phoneNumber', validate: false, classes: ['form-fieldset__input'] }
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
            { label: 'Event title', placeholder: 'eg. My Awesome Event', type: 'text', id: 'event.title', validate: false, classes: ['form-fieldset__input'] },
            { label: 'Event description', placeholder: 'Give your event a description', type: 'text', id: 'event.description', validate: false, classes: ['form-fieldset__input'] }
          ]
        },
        {
          id: "eventMeta",
          fieldsets: [
            { label: 'Featured image', placeholder: '**TODO**', type: 'text', id: 'event.featuredImage', validate: false, classes: ['form-fieldset__input'] }
          ]
        }
      ]
    }
  ]
}

const BookingForm = () => {
  return (
    <div>
      <h1>Booking form</h1>
      <Form config={config}></Form>
    </div>
  )
}

export default BookingForm
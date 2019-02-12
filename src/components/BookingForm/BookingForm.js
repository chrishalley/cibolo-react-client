import React, { Component, Fragment } from 'react'

import { Form, Button } from '../common'

class BookingForm extends Component {

  formConfig = {
    client: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
    },
    event: {
      title: '',
      description: ''
    }
  }

  bookingSubmit(state) {
    console.log('Booking request submitted')
    console.log(state)
  }

  render() {
    const { bookingSubmit, formConfig } = this
    return (
      <Form onSubmit={bookingSubmit} state={formConfig}>
        {(updateState, formSubmit) => (
          <Fragment>
            <Form.Section flexDirection="row">
              <Form.Fieldgroup>
                <Form.Fieldset label="First name" placeholder="eg. John" type="text" name="client.firstName" onChangeHandler={updateState}>
                  <input />
                </Form.Fieldset>
                <Form.Fieldset label="Last name" placeholder="eg. Smith" type="text" name="client.lastName" onChangeHandler={updateState}>
                  <input />
                </Form.Fieldset>
              </Form.Fieldgroup>
              <Form.Fieldgroup>
                <Form.Fieldset label="Email address" placeholder="eg. johnsmith@example.com" type="text" name="client.emailAddress" onChangeHandler={updateState}>
                  <input />
                </Form.Fieldset>
                <Form.Fieldset label="Phone number" placeholder="eg. 07123456789" type="text" name="client.phoneNumber" onChangeHandler={updateState}>
                  <input />
                </Form.Fieldset>
              </Form.Fieldgroup>
            </Form.Section>
            <Form.Section flexDirection="column">
              <Form.Fieldgroup>
                <Form.Fieldset label="Event title" placeholder="eg. My awesome event" type="text" name="event.title" onChangeHandler={updateState}>
                  <input />
                </Form.Fieldset>
                <Form.Fieldset label="Event description" placeholder="Give a short description" type="text" name="event.description" onChangeHandler={updateState}>
                  <textarea rows="20"/>
                </Form.Fieldset>
              </Form.Fieldgroup>
            </Form.Section>
            <Button clickHandler={formSubmit}>Request a booking</Button>
          </Fragment>
        )}
      </Form>
    )
  }
}

export default BookingForm
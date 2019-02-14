import React, { Component, Fragment } from 'react'

import { Form, Button } from '../common'
import styles from './BookingForm.module.css'

class BookingForm extends Component {

  formConfig = {
    client: {
      firstName: 'Dave',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
    },
    event: {
      title: '',
      description: '',
      recurring: 'non-recurring',
      extras: [],
      drinks: {
        whiskey: true,
        gin: false,
        vodka: false
      }
    }
  }

  bookingSubmit(state) {
    console.log('Booking request submitted')
    console.log(state)
  }

  render() {
    const { bookingSubmit, formConfig } = this
    return (
      <Form classes={styles['booking-form']} onSubmit={bookingSubmit} state={formConfig}>
        {(updateFormState, formSubmit, initState) => (
          
          <Fragment>
            <Form.Section flexDirection="row">
              <Form.Fieldgroup> 

                <Form.Fieldset label="First name" placeholder="eg. John" name="client.firstName" updateFormState={updateFormState} initState={initState}>
                  <Form.TextInput type="text" />
                </Form.Fieldset>

                <Form.Fieldset label="Last name" placeholder="eg. Smith" name="client.lastName" updateFormState={updateFormState} initState={initState}>
                  <Form.TextInput type="text" />
                </Form.Fieldset>

              </Form.Fieldgroup>

              <Form.Fieldgroup>
                <Form.Fieldset label="Email address" placeholder="eg. johnsmith@example.com" name="client.emailAddress" updateFormState={updateFormState} initState={initState}>
                  <Form.TextInput type="text" />
                </Form.Fieldset>

                <Form.Fieldset label="Phone number" placeholder="eg. 07123456789" name="client.phoneNumber" updateFormState={updateFormState} initState={initState}>
                  <Form.TextInput type="text" />
                </Form.Fieldset>

              </Form.Fieldgroup>
            </Form.Section>

            <Form.Section flexDirection="column">
              <Form.Fieldgroup>

                <Form.Fieldset label="Event title" placeholder="eg. My awesome event" name="event.title" updateFormState={updateFormState} initState={initState}>
                  <Form.TextInput type="text" />
                </Form.Fieldset>

                <Form.Fieldset label="Event description" placeholder="Give a short description" name="event.description" updateFormState={updateFormState} initState={initState}>
                  <Form.TextArea rows="20"/>
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
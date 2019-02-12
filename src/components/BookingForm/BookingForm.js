import React, { Component, Fragment } from 'react'

import { Form, Button } from '../common'

class BookingForm extends Component {

  formConfig = {
    client: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
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
            <Form.Section>
              <Form.Fieldgroup>
                <Form.Fieldset label="First name" placeholder="eg. John" type="text" stateProp="client.firstName" onChangeHandler={updateState}/>
                <Form.Fieldset label="Last name" placeholder="eg. Smith" type="text" stateProp="client.lastName" onChangeHandler={updateState}/>
              </Form.Fieldgroup>
              <Form.Fieldgroup>
                <Form.Fieldset label="Email address" placeholder="eg. johnsmith@example.com" type="text" stateProp="client.emailAddress" onChangeHandler={updateState} />
                <Form.Fieldset label="Phone number" placeholder="eg. 07123456789" type="text" stateProp="client.phoneNumber" onChangeHandler={updateState} />
              </Form.Fieldgroup>
            </Form.Section>
            {/* <Form.Section>
              <Form.Fieldgroup>
                <Form.Fieldset label="Event title" placeholder="eg. My awesome event" type="text" id="event.title" />
                <Form.Fieldset label="Event description" placeholder="Give a short description" type="text" id="event.title" />
              </Form.Fieldgroup>
            </Form.Section> */}
            <Button clickHandler={formSubmit}>Request a booking</Button>
          </Fragment>
        )}
      </Form>
    )
  }
}

export default BookingForm
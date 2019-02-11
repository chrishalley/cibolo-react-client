import React, { Component, Fragment } from 'react'

import { Form, Button } from '../common'

class BookingForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
  }

  bookingSubmit() {
    console.log('Booking request submitted')
  }

  render() {
    return (
      <Form>
        {() => (
          <Fragment>
            <Form.Section>
              <Form.Fieldgroup>
                <Form.Fieldset label="First name" placeholder="eg. John" type="text" id="client.firstName" />
                {/* <Form.Fieldset label="Last name" placeholder="eg. Smith" type="text" id="client.lastName" /> */}
              </Form.Fieldgroup>
              {/* <Form.Fieldgroup>
                <Form.Fieldset label="Email address" placeholder="eg. johnsmith@example.com" type="text" id="client.emailAddress" />
                <Form.Fieldset label="Phone number" placeholder="eg. 07123456789" type="text" id="client.phoneNumber" />
              </Form.Fieldgroup> */}
            </Form.Section>
            {/* <Form.Section>
              <Form.Fieldgroup>
                <Form.Fieldset label="Event title" placeholder="eg. My awesome event" type="text" id="event.title" />
                <Form.Fieldset label="Event description" placeholder="Give a short description" type="text" id="event.title" />
              </Form.Fieldgroup>
            </Form.Section> */}
            <Button clickHandler={this.bookingSubmit}>Request a booking</Button>
          </Fragment>
        )}
      </Form>
    )
  }
}

export default BookingForm
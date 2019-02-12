import React, { Component, Fragment } from 'react'

import { Form, Button } from '../common'

class BookingForm extends Component {

  formConfig = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: '',
  }

  bookingSubmit(state) {
    console.log('Booking request submitted')
    console.log(state)
  }

  render() {
    const { bookingSubmit, formConfig } = this
    return (
      <Form onSubmit={bookingSubmit} state={formConfig}>
        {(updateState, formSubmit, getValue) => (
          <Fragment>
            <Form.Section>
              <Form.Fieldgroup>
                <Form.Fieldset getValue={getValue} label="First name" placeholder="eg. John" type="text" stateProp="firstName" onChangeHandler={updateState}/>
                <Form.Fieldset getValue={getValue} label="Last name" placeholder="eg. Smith" type="text" stateProp="lastName" onChangeHandler={updateState}/>
              </Form.Fieldgroup>
              <Form.Fieldgroup>
                <Form.Fieldset getValue={getValue} label="Email address" placeholder="eg. johnsmith@example.com" type="text" stateProp="emailAddress" onChangeHandler={updateState} />
                <Form.Fieldset getValue={getValue} label="Phone number" placeholder="eg. 07123456789" type="text" stateProp="phoneNumber" onChangeHandler={updateState} />
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
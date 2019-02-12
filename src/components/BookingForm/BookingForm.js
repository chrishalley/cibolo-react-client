import React, { Component, Fragment } from 'react'

import { Form, Button, Checkbox } from '../common'

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
      description: '',
      recurring: true,
      extras: [],
      drinks: {
        whiskey: false,
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
      <Form onSubmit={bookingSubmit} state={formConfig}>
        {(updateState, formSubmit) => (
          <Fragment>
            <Form.Section flexDirection="row">
              <Form.Fieldgroup>
                <Form.Fieldset label="First name" placeholder="eg. John" name="client.firstName" onChangeHandler={updateState}>
                  <input type="text"/>
                </Form.Fieldset>
                <Form.Fieldset label="Last name" placeholder="eg. Smith" name="client.lastName" onChangeHandler={updateState}>
                  <input type="text"/>
                </Form.Fieldset>
              </Form.Fieldgroup>
              <Form.Fieldgroup>
                <Form.Fieldset label="Email address" placeholder="eg. johnsmith@example.com" name="client.emailAddress" onChangeHandler={updateState}>
                  <input type="text"/>
                </Form.Fieldset>
                <Form.Fieldset label="Phone number" placeholder="eg. 07123456789" name="client.phoneNumber" onChangeHandler={updateState}>
                  <input type="text"/>
                </Form.Fieldset>
              </Form.Fieldgroup>
            </Form.Section>
            <Form.Section flexDirection="column">
              <Form.Fieldset label="Drinks" name="event.drinks" onChangeHandler={updateState}>
                <Checkbox label="Whiskey" name="event.drinks.whiskey" />
                <Checkbox label="Gin" name="event.drinks.gin" />
                <Checkbox label="Vodka" name="event.drinks.vodka" />
              </Form.Fieldset>
              <Form.Fieldset label="Extras" name="event.extras" onChangeHandler={updateState}>
                <input type="checkbox" value="food" label="Food" /><label>Food</label>
                <input type="checkbox" value="drink" label="Drink" /><label>Drink</label>
              </Form.Fieldset>
              <Form.Fieldset label="Recurring event" name="event.recurring" onChangeHandler={updateState}>
                <input type="radio" name="event.recurring" value="true" label="Recurring"/>
                <input type="radio" name="event.recurring" value="false" label="Non-recurring"/>
              </Form.Fieldset>
              <Form.Fieldgroup>
                <Form.Fieldset label="Event title" placeholder="eg. My awesome event" name="event.title" onChangeHandler={updateState}>
                  <input type="text"/>
                </Form.Fieldset>
                <Form.Fieldset label="Event description" placeholder="Give a short description" name="event.description" onChangeHandler={updateState}>
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
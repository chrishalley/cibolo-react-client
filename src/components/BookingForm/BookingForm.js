import React, { Component, Fragment } from 'react'

import { Form, Button } from '../common'

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
      <Form onSubmit={bookingSubmit} state={formConfig}>
        {(updateFormState, formSubmit, initState) => (
          <Fragment>
            <Form.Section flexDirection="row">
              <Form.Fieldgroup>
                <Form.Fieldset label="First name" placeholder="eg. John" name="client.firstName" updateFormState={updateFormState} initState={initState}>
                  <Form.TextInput type="text"></Form.TextInput>
                </Form.Fieldset>
                <Form.Fieldset label="Recurring event" name="event.recurring" updateFormState={updateFormState} initState={initState}>
                  <Form.RadioInput options={[{ label: 'Recurring', value: 'recurring' }, { label: 'Non-recurring', value: 'non-recurring' }]} />
                  {/* <input type="radio" name="event.recurring" value="true" label="Recurring"/>
                  <input type="radio" name="event.recurring" value="false" label="Non-recurring"/> */}
                </Form.Fieldset>
                <Form.Fieldset label="Drinks" name="event.drinks" updateFormState={updateFormState} initState={initState}>
                  <Form.Checkbox options={[{name: 'whiskey'}, {name: 'gin'}, {name: 'vodka'}]}/>
                </Form.Fieldset>
                {/* <Form.Fieldset label="Last name" placeholder="eg. Smith" name="client.lastName" onChangeHandler={updateState} initState={initState}>
                  <input type="text"/>
                </Form.Fieldset>
              </Form.Fieldgroup>
              <Form.Fieldgroup>
                <Form.Fieldset label="Email address" placeholder="eg. johnsmith@example.com" name="client.emailAddress" onChangeHandler={updateState} initState={initState}>
                  <input type="text"/>
                </Form.Fieldset>
                <Form.Fieldset label="Phone number" placeholder="eg. 07123456789" name="client.phoneNumber" onChangeHandler={updateState} initState={initState}>
                  <input type="text"/>
                </Form.Fieldset> */}
              </Form.Fieldgroup>
            </Form.Section>
            <Form.Section flexDirection="column">
              {/* <Form.Fieldset label="Extras" name="event.extras" onChangeHandler={updateState} initState={initState}>
                <input type="checkbox" value="food" label="Food" /><label>Food</label>
                <input type="checkbox" value="drink" label="Drink" /><label>Drink</label>
              </Form.Fieldset>
              <Form.Fieldgroup>
                <Form.Fieldset label="Event title" placeholder="eg. My awesome event" name="event.title" onChangeHandler={updateState} initState={initState}>
                  <input type="text"/>
                </Form.Fieldset>
                <Form.Fieldset label="Event description" placeholder="Give a short description" name="event.description" onChangeHandler={updateState} initState={initState}>
                  <textarea rows="20"/>
                </Form.Fieldset>
              </Form.Fieldgroup> */}
            </Form.Section>
            <Button clickHandler={formSubmit}>Request a booking</Button>
          </Fragment>
        )}
      </Form>
    )
  }
}

export default BookingForm
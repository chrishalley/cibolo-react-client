import React, { Component, Fragment } from 'react'

import { Form, Button } from '../common'

class BasicForm extends Component {

  formConfig = {
    email: '',
    password: ''
  }

  login(state) {
    console.log(state)
    console.log('Attempting to log in')
  }

  render() {
    const { login, formConfig } = this
    return (
      <Form onSubmit={login} state={formConfig}>
        {(updateFormState, formSubmit, initState) => (
          <Fragment>
            <Form.Fieldset label="Email" placeholder="eg. me@gmail.com" name="email" updateFormState={updateFormState} initState={initState}>
              <Form.TextInput />
            </Form.Fieldset>
            <Form.Fieldset label="Password" placeholder="eg. password123" name="password" updateFormState={updateFormState} initState={initState}>
              <Form.TextInput />
            </Form.Fieldset>
            <Button clickHandler={formSubmit}>Log in</Button>
          </Fragment>
        )}
      </Form>
    )
  }
}

export default BasicForm
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
        {(updateState, formSubmit) => (
          <Fragment>
            <Form.Fieldset label="Email" placeholder="eg. me@gmail.com" name="email" onChangeHandler={updateState}>
              <input type="text" />
            </Form.Fieldset>
            <Form.Fieldset label="Password" placeholder="eg. password123" name="password" onChangeHandler={updateState}>
              <input type="text" />
            </Form.Fieldset>
            <Button clickHandler={formSubmit}>Log in</Button>
          </Fragment>
        )}
      </Form>
    )
  }
}

export default BasicForm
import React, { Component, Fragment } from 'react'

import { Form, Button } from '../common'

class BasicForm extends Component {

  login() {
    console.log('Attempting to log in')
  }

  render() {
    return (
      <Form>
        {() => (
          <Fragment>
            <Form.Fieldset label="Email" placeholder="eg. me@gmail.com" type="text" id="login.email" />
            <Form.Fieldset label="Password" placeholder="eg. password123" type="text" id="login.email" />
            <Button clickHandler={this.login}>Log in</Button>
          </Fragment>
        )}
      </Form>
    )
  }
}

export default BasicForm
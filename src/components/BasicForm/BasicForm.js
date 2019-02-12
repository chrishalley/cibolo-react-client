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
        {(updateState, formSubmit, getValue) => (
          <Fragment>
            <Form.Fieldset getValue={getValue} label="Email" placeholder="eg. me@gmail.com" type="text" stateProp="email" onChangeHandler={updateState}/>
            <Form.Fieldset getValue={getValue} label="Password" placeholder="eg. password123" type="text" stateProp="password" onChangeHandler={updateState}/>
            <Button clickHandler={formSubmit}>Log in</Button>
          </Fragment>
        )}
      </Form>
    )
  }
}

export default BasicForm
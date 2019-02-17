import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import { Button, Form, Toast } from '../common';

import styles from './LoginForm.module.css';

class LoginForm extends Component {

  loginDetails = { email: '', password: '', errorMessage: null }

  handleInput = (stateProp, value) => {
    this.setState({ [stateProp]: value })
  }

  loginSubmit(state) {
    const { email, password } = state;
    console.log('this: ', this)
    this.props.changeAuth({ email, password })
      .then(function(res) {
        console.log('then this: ', this)
        console.log('promise resolve: ', res)
      })
      .catch(function(error) {
        const { message } = error.response.data
        console.log(this)
      })
  }

  // loginCallback(error) {
  //   console.log('loginCallback')
  //   const { message } = error.response.data
  //   this.loginDetails.errorMessage = message
  // }

  render() {
    const { loginDetails, loginSubmit } = this
    return (
      <div className={styles['login-form']}>
        <h3 className={styles['title']}>Login</h3>
          <Form state={loginDetails} onSubmit={loginSubmit}>
          {(updateFormState, formSubmit, initState) => (
            <Fragment>
              <Form.Fieldset label="Email" placeholder="eg. john.smith@example.com" name="email" updateFormState={updateFormState} initState={initState}>
                <Form.TextInput type="text" />
              </Form.Fieldset>
              <Form.Fieldset label="Password" placeholder="eg. password123" name="password" updateFormState={updateFormState} initState={initState}>
                <Form.TextInput type="password" />
              </Form.Fieldset>
              <Button clickHandler={formSubmit}>Log in</Button>
            </Fragment>
          )}
          </Form>
        {/* <Toast type="error" content={errorMessage} /> */}
      </div>
    )
  }
}

export default connect(null, actions)(LoginForm);
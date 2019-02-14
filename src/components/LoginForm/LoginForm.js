import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Button, Form } from '../common';

import styles from './LoginForm.module.css';

class LoginForm extends Component {

  loginDetails = { email: '', password: '', errorMessage: null }

  handleInput = (stateProp, value) => {
    this.setState({ [stateProp]: value })
  }

  loginSubmit(state) {
    console.log(state)
    // const { email, password } = this.state;
    // this.props.changeAuth({ email, password }, (error) => {
    //   this.setState({ errorMessage: error })
    // })
  }

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
            </Fragment>
          )}
          </Form>
        {/* <Fieldset onChangeHandler={this.handleInput} stateProp="email" label="Email" type="text" placeholder="eg. john@example.com"></Fieldset>
        <Fieldset onChangeHandler={this.handleInput} stateProp="password" label="Password" type="text" placeholder="eg. password123"></Fieldset>
        <Toast type="error" content={errorMessage} /> */}
        <Button clickHandler={this.login}>Log in</Button>
      </div>
    )
  }
}

export default connect(null, actions)(LoginForm);
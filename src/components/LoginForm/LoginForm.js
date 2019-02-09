import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Fieldset, Button, Toast } from '../common';

import styles from './LoginForm.module.css';

class LoginForm extends Component {
  state = { email: '', password: '', errorMessage: null };

  handleInput = (stateProp, value) => {
    this.setState({ [stateProp]: value })
  }

  login = () => {
    this.setState({ errorMessage: null })
    const { email, password } = this.state;
    this.props.changeAuth({ email, password }, (error) => {
      this.setState({ errorMessage: error })
    })
  }

  render() {
    const { errorMessage } = this.state
    return (
      <div className={styles['login-form']}>
        <h3 className={styles['title']}>Login</h3>
        <Fieldset onChangeHandler={this.handleInput} stateProp="email" label="Email" type="text" placeholder="eg. john@example.com"></Fieldset>
        <Fieldset onChangeHandler={this.handleInput} stateProp="password" label="Password" type="text" placeholder="eg. password123"></Fieldset>
        <Toast type="error" content={errorMessage} />
        <Button clickHandler={this.login}>Log in</Button>
      </div>
    )
  }
}

export default connect(null, actions)(LoginForm);
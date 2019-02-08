import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { Fieldset, Button } from '../common';

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

  renderErrorMessage() {
    const { errorMessage } = this.state
    if (errorMessage) {
      return (
        <p>{errorMessage}</p>
      )
    }
  }

  render() {
    return (
      <div className={styles['login-form']}>
        <h3 className={styles['title']}>Login</h3>
        <Fieldset onChangeHandler={this.handleInput} stateProp="email" label="Email" type="text" placeholder="eg. john@example.com"></Fieldset>
        <p>{this.state.email}</p>
        <Fieldset onChangeHandler={this.handleInput} stateProp="password" label="Password" type="text" placeholder="eg. password123"></Fieldset>
        <p>{this.state.password}</p>
        <Button clickHandler={this.login}>Log in</Button>
        {this.renderErrorMessage()}
      </div>
    )
  }
}

export default connect(null, actions)(LoginForm);
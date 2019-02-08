import React, { Component } from 'react';

import { Fieldset, Button } from '../common';

import styles from './LoginForm.module.css';

class LoginForm extends Component {
  state = { email: '', password: '' };

  handleInput = (stateProp, value) => {
    this.setState({ [stateProp]: value })
  }

  login = () => {
    const { email, password } = this.state;
    console.log('Email: ', email);
    console.log('Password: ', password);
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
      </div>
    )
  }
}

export default LoginForm;
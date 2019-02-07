import React, { Component } from 'react';

import { Fieldset, Button } from '../common';

import styles from './LoginForm.module.css';

class LoginForm extends Component {
  state = { email: '', password: '' };

  handleInput = (stateProp, value) => {
    this.setState({ [stateProp]: value })
  }

  render() {
    return (
      <div className={styles['login-form']}>
        <h3 className={styles['title']}>Login</h3>
        <Fieldset onInput={this.handleInput} stateProp="email" label="Email" type="text" placeholder="eg. john@example.com"></Fieldset>
        <p>{this.state.email}</p>
        <Fieldset onInput={this.handleInput} stateProp="password" label="Password" type="text" placeholder="eg. password123"></Fieldset>
        <p>{this.state.password}</p>
        <Button>Log in</Button>
      </div>
    )
  }
}

export default LoginForm;
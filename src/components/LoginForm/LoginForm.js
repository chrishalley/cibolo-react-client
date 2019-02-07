import React, { Component } from 'react';

import { Fieldset, Button } from '../common';

import styles from './LoginForm.module.css';

class LoginForm extends Component {
  render() {
    return (
      <div className={styles['login-form']}>
        <h3 className={styles['title']}>Login</h3>
        <Fieldset label="Email" type="text" placeholder="eg. john@example.com"></Fieldset>
        <Fieldset label="Password" type="text" placeholder="eg. password123"></Fieldset>
        <Button>Log in</Button>
      </div>
    )
  }
}

export default LoginForm;
import React from 'react';
import { connect } from 'react-redux';

import { changeAuth } from '../../actions';
import { Card, Screen, Button } from '../../components/common';
import LoginForm from '../../components/LoginForm/LoginForm';

import styles from './Login.module.css';

const Login = (props) => {
  return (
    <Screen extStyles={styles}>
      <Card>
        <LoginForm></LoginForm>
        <Button onClick={() => props.changeAuth({ email: 'ted@teddison.com', password: 'password' })}>Quick Login</Button>
      </Card>
    </Screen>
  );
}

export default connect(null, { changeAuth })(Login);
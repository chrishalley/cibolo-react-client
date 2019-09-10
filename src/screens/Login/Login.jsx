import React, { useState } from 'react';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';

import { urlQueryParams } from '../../utils/utils';
import { setPasswordRequest } from '../../actions';

import { Card, Screen } from '../../components/common';
import LoginForm from '../../components/LoginForm/LoginForm';
import SetPasswordForm from '../../components/SetPasswordForm/SetPasswordForm';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';

import styles from './Login.module.css';

export const FORM_MODES = {
  login: 'login',
  forgotPassword: 'forgotPassword',
  setPassword: 'setPassword'
};

const Login = ({
  location,
  setPasswordRequest
}) => {
  const { token, setPassword } = urlQueryParams(location.search);

  const INITIAL_FORM_MODE = setPassword ?
  FORM_MODES.setPassword :
  FORM_MODES.login;

const [formMode, setFormMode] = useState(INITIAL_FORM_MODE)

const renderContents = (formMode) => {
  switch (formMode) {
    case FORM_MODES.setPassword:
      return {
        title: 'Set Password',
        Component: SetPasswordForm,
        props: {
          onSubmit: (password) => setPasswordRequest({password, token})
        },
        prompt: '',
        onClick: () => null
      };
    case FORM_MODES.forgotPassword:
      return {
        title: 'Reset Password',
        Component: ForgotPasswordForm,
        prompt: 'It\'s ok, I\'ve remembered it now',
        onClick: () => setFormMode(FORM_MODES.login),
        props: {
          onSubmit: () => console.log('Forgot password callback')
        }
      };
    default:
      return {
        title: 'Login',
        Component: LoginForm,
        prompt: 'Oops, I\'ve forgotten my password, help!',
        onClick: () => setFormMode(FORM_MODES.forgotPassword)
      };
  }
};

const {
  title,
  Component,
  prompt,
  onClick,
  props
} = renderContents(formMode)

return (
  <Screen extStyles={styles}>
    <Card title={title}>
      <Component {...props}/>
      <p
      onClick={onClick}
      >{prompt}</p>
    </Card>
  </Screen>
)};

const mapDispatchToProps = {
  setPasswordRequest
}

export default connect(null, mapDispatchToProps)(Login);
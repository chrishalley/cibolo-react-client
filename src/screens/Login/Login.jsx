import React, { useState } from 'react';

import { Card, Screen } from '../../components/common';
import LoginForm from '../../components/LoginForm/LoginForm';
import SetPasswordForm from '../../components/SetPasswordForm/SetPasswordForm';
import ForgotPasswordForm from '../../components/ForgotPasswordForm/ForgotPasswordForm';

import styles from './Login.module.css';

export const FORM_MODES = {
  login: 'login',
  forgotPassword: 'forgot-password',
  setPassword: 'set-password'
}

const Login = ({
  location
}) => {

const INITIAL_FORM_MODE = location.search ==='?set-password' ?
  FORM_MODES.setPassword :
  FORM_MODES.login;

const [formMode, setFormMode] = useState(INITIAL_FORM_MODE)



const renderContents = (formMode) => {
  switch (formMode) {
    case FORM_MODES.setPassword:
      return {
        title: 'Set Password',
        Component: SetPasswordForm,
        prompt: '',
        onClick: () => null
      };
    case FORM_MODES.forgotPassword:
      return {
        title: 'Reset Password',
        Component: ForgotPasswordForm,
        prompt: 'It\'s ok, I\'ve remembered it now',
        onClick: () => setFormMode(FORM_MODES.login)
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
    onClick
  } = renderContents(formMode)

return (
  <Screen extStyles={styles}>
    <Card title={title}>
      {<Component />}
      <p
      onClick={onClick}
      >{prompt}</p>
    </Card>
  </Screen>
)};

export default Login;
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { isEmail, isEmpty, isLength } from 'validator'

import { loginRequest } from '../../actions'
import { FormBuilder, Spinner } from '../common'

import styles from './LoginForm.module.css'

const LoginForm = (props) => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const form = [
    {
      component: "Fieldset",
      props: {
        component: "TextInput",
        type: "text",
        name: "email",
        label: "Email",
        placeholder: "eg. test@test.com",
        validations: [
          {
            method: isEmpty,
            validWhen: false,
            errorMessage: "Please enter something"
          },
          {
            method: isEmail,
            validWhen: true,
            errorMessage: "Please enter a valid email address"
          }
        ]
      }
    },
    {
      component: "Fieldset",
      props: {
        component: "TextInput",
        type: "password",
        name: "password",
        label: "Password",
        placeholder: "eg. password123",
        validations: [
          {
            method: isLength,
            methodOptions: { min: 6, max: undefined },
            validWhen: true,
            errorMessage: "Please enter a minimum of 6 characters"
          }
        ]
      }
    },
    {
      component: "FormControl",
      props: {
        controls: [
          {
            onClick: () => {},
            label: "Login",
            type: "submit"
          }
        ]
      }
    }
  ];

  const cb = (success) => {
    setLoading(false)
    if (success) {
      props.history.push("/dashboard");
    } else {
      setError('Invalid email or password')
    }
  }

  function login(state) {
    setLoading(true);
    setError(null);
    const { email, password } = state;
    props.loginRequest({ email: email.value, password: password.value }, cb)
  }

  return (
    <div className={styles.loginForm}>
      {
        !loading ?
        <FormBuilder error={error} form={form} onSubmit={login}></FormBuilder> :
        <Spinner className={styles.spinner}/>
      }
    </div>
  )
}

export default withRouter(connect(null, { loginRequest })(LoginForm))
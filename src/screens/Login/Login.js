import React from 'react'

import { Card, Screen } from '../../components/common'
import LoginForm from '../../components/LoginForm/LoginForm'

import styles from './Login.module.css'

const Login = () => {
  return (
    <Screen extStyles={styles}>
      <Card>
        <LoginForm></LoginForm>
      </Card>
    </Screen>
  )
}

export default Login;
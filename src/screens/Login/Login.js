import React from 'react'

import { Card } from '../../components/common'
import LoginForm from '../../components/LoginForm/LoginForm'

import styles from './Login.module.css'

const Login = () => {
  return (
    <div className={styles['login-screen']}>
      <Card>
        <LoginForm></LoginForm>
      </Card>
    </div>
  )
}

export default Login;
import React from 'react'

import { Screen, Datepicker, Card } from '../../components/common/'

import styles from './Home.module.css'

const Home = () => {
  return (
    <Screen>
      <h1>Home page</h1>
      <Card>
        <Datepicker></Datepicker>
      </Card>
    </Screen>
  )
}

export default Home;
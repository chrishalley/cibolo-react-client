import React, { Component, Fragment } from 'react'

import styles from './Datepicker.module.css'

const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

class Datepicker extends Component {

  state = { date: 0, month: 0, year: 0 }

  monthDays() {
    if (this.state.year % 4 === 0 && this.state.month === 1) {
      return 29
    }
    return monthDays[this.state.month]
  }

  componentDidMount() {
    const dateTime = new Date()
    const date = dateTime.getDate()
    const month = dateTime.getMonth()
    const year = dateTime.getFullYear()
    this.setState({ date, month, year })
  }

  increaseDate = () => {
    this.setState({ date: this.state.date + 1 })
  }
  
  decreaseDate = () => {
    this.setState({ date: this.state.date - 1 })
  }
  
  increaseMonth = () => {
    this.setState({ month: this.state.month + 1 })
  }
  
  decreaseMonth = () => {
    this.setState({ month: this.state.month - 1 })
  }
  
  increaseYear = () => {
    this.setState({ year: this.state.year + 1 })
  }
  
  decreaseYear = () => {
    this.setState({ year: this.state.year - 1 })
  }

  render() {
    const {increaseDate, decreaseDate, increaseMonth, decreaseMonth, increaseYear, decreaseYear} = this
    return (
      <Fragment>
        <div className={styles.datepicker}>
          <div>
            <button onClick={increaseDate}>Inc</button>
            <div>{this.state.date}</div>
            <button onClick={decreaseDate}>Dec</button>
          </div>
          <div>
            <button onClick={increaseMonth}>Inc</button>
            <div>{this.state.month}</div>
            <button onClick={decreaseMonth}>Dec</button>
          </div>
          <div>
            <button onClick={increaseYear}>Inc</button>
            <div>{this.state.year}</div>
            <button onClick={decreaseYear}>Dec</button>
          </div>
        </div>
        <p>{this.state.dateTime}</p>
        <p>{this.monthDays()}</p>
      </Fragment>

    )
  }
}

export { Datepicker };
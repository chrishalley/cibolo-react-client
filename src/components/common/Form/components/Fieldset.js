import React, { Component } from 'react';

import { Toast } from '../../'

import styles from '../../Fieldset/Fieldset.module.css';

class Fieldset extends Component {

  state = { value: '' }

  componentDidMount() {
    console.log('Fieldset props: ', this.props)
  }

  renderToast = () => {
    const { errorMessage } = this.props
    if (errorMessage) {
      return (
        <Toast type="error" content={errorMessage} />
      )
    }
  }


  render() {

    const { label, type, stateProp, placeholder, onChangeHandler } = this.props

    return (
      <fieldset className={styles['fieldset']}>
        <label htmlFor="">{label}</label>
        <input 
          value={this.state.value}
          onChange={(e) => onChangeHandler(stateProp, e.target.value, (value) => { this.setState({ value }) })}
          type={type}
          placeholder={placeholder}
        />
        {this.renderToast()}
      </fieldset>
    )
  }
}

export { Fieldset };
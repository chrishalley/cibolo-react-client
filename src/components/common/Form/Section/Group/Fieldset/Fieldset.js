import React, { Component } from 'react';

import { Toast } from '../../../../'

import styles from './Fieldset.module.css';

class Fieldset extends Component {

  state = { value: '' }

  componentDidMount() {
    console.log('FIELDSET PROPS: ', this.props)
  }

  renderToast = () => {
    const { errorMessage } = this.props.fieldsetConfig
    if (errorMessage) {
      return (
        <Toast type="error" content={errorMessage} />
      )
    }
  }

  updateInputState = (value) => {
    this.setState({ value })
  }

  render() {
    const { label, type, stateProp, placeholder, onChangeHandler } = this.props.fieldsetConfig

    return (
      <fieldset className={styles['fieldset']}>
        <label htmlFor="">{label}</label>
        <input value={this.props.value} onChange={(e) => onChangeHandler({dataProp: stateProp, dataValue: e.target.value}, this.updateInputState(e.target.value))}type={type} placeholder={placeholder} />
        {this.renderToast()}
      </fieldset>
    )
  }
  
}

export default Fieldset
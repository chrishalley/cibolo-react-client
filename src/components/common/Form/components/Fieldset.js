import React, { Component } from 'react';

import { Toast } from '../../'

import styles from '../../Fieldset/Fieldset.module.css';

class Fieldset extends Component {

  state = { value: '' }

  componentDidMount() {
    // console.log('Fieldset props: ', this.props)
  }

  renderToast = () => {
    const { errorMessage } = this.props
    if (errorMessage) {
      return (
        <Toast type="error" content={errorMessage} />
      )
    }
  }

  renderChild = (child) => {
    const { placeholder, onChangeHandler, name } = this.props
    // console.log('child: ', child)
    let props ={}

    if (child.type === 'input') {

      switch(child.props.type) {
        case 'checkbox':
          props = {
            onChange: (e) => {
              // console.log('e:', e)
              onChangeHandler(name, this.state.value, () => null)
            }
          }
          break
        default:
          props = {
            value: this.state.value,
            onChange: (e) => onChangeHandler(name, e.target.value, (value) => { this.setState({ value }) }),
            placeholder: placeholder
          }
      }
    }
      

    return React.cloneElement(child, {
      ...child.props,
      ...props
    })
  }


  render() {

    const { label, name } = this.props
    const children = React.Children.map(this.props.children, child => this.renderChild(child))

    return (
      <fieldset className={styles['fieldset']}>
        <label className={styles.label} htmlFor={name}>{label}</label>
        {children}
        {this.renderToast()}
      </fieldset>
    )
  }
}

export { Fieldset };
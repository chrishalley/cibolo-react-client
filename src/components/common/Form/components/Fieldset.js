import React, { Component } from 'react';

import { Toast } from '../../'

import styles from '../../Fieldset/Fieldset.module.css';

class Fieldset extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.initState(this.props.name)
  }

  // renderToast = () => {
  //   const { errorMessage } = this.props
  //   if (errorMessage) {
  //     return (
  //       <Toast type="error" content={errorMessage} />
  //     )
  //   }
  // }

  renderChild = (child) => {
    const { placeholder } = this.props
    // console.log('child: ', child)
    let props = {
      value: this.state,
      onChange: this.updateFieldsetState,
      placeholder: placeholder
    }

    return React.cloneElement(child, {
      ...child.props,
      ...props
    })
  }

  updateFieldsetState = (val) => {
    this.setState({ [val]: !this.state[val] })
  }

  render() {
    const { label, name } = this.props
    const children = React.Children.map(this.props.children, child => this.renderChild(child))

    return (
      <fieldset className={styles['fieldset']}>
        <label className={styles.label} htmlFor={name}>{label}</label>
        {children}
        {/* {this.renderToast()} */}
      </fieldset>
    )
  }
}

export { Fieldset };
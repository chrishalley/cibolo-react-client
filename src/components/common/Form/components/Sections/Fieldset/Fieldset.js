import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { merge, set } from 'lodash';

import { Toast } from '../../../../'

import styles from './Fieldset.module.css';

const proptypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  updateFormState: PropTypes.func.isRequired,
  initState: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ])
}

const defaultProps = {
  updateFormState: () => { console.warn('updateFormState prop is not set') },
  initState: () => { console.warn('initState prop is not set') },
}

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
    const { placeholder, name } = this.props
    let props = {
      value: this.state,
      onChange: this.updateFieldsetState,
      placeholder: placeholder,
      name: name
    }

    return React.cloneElement(child, {
      ...child.props,
      ...props
    })
  }

  updateFieldsetState = (val) => {
    const { name, updateFormState } = this.props
    const update = typeof val === 'object' ? merge(this.state[name], val) : val
    this.setState({ [name]: update }, () => {
      let update = {}
      set(update, name, this.state[name])
      updateFormState(update, () => {
      })
    })
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

Fieldset.propTypes = proptypes;
Fieldset.defaultProps = defaultProps;

export { Fieldset };
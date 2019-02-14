import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { merge, set } from 'lodash';

import { Toast } from '../../'

import styles from '../../Fieldset/Fieldset.module.css';

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
    // console.log('PROPS: ', props)
    this.state = this.props.initState(this.props.name)
    console.log(`fieldsetState: `, this.state)
  }

  componentDidMount() {
    // console.log('mounted: ', this.state)
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
    console.log('childProps: ', child.props)
    const { placeholder, name } = this.props
    // console.log('child: ', child)
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
    // console.log(val)
    const update = typeof val === 'object' ? merge(this.state[name], val) : val
    // console.log('update: ', update)
    const merged = merge(this.state[name], val)
    // console.log('merged: ', merged)
    this.setState({ [name]: update }, () => {
      console.log('fieldset state updated: ', this.state)
      let update = {}
      set(update, name, this.state[name])
      updateFormState(update, () => {
        console.log('form state updated')
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
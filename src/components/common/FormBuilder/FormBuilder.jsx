import React, { useReducer } from 'react';
import { set, unset } from 'lodash';
import validator from 'validator';

import { FieldGroup, FormSection, Fieldset, FormControl } from './components/layout';
import { TextInput, TextArea, Select, RadioInput, Checkbox } from './components/inputs';
import { Button, Spinner } from '../';

import styles from './FormBuilder.module.css';
import { pathsFromObject } from './helperFunctions';

// Set up form-level reducer, to be updated by Fieldset components through
// dispatch callback passed down through context
const appReducer = (state, action) => {
  switch(action.type) {
    case 'update':
      return { ...updateState(state, action.payload) }
    default:
      return state;
  }
}

const updateState = function (state, update) {
  const { path, value, valid } = pathsFromObject(update, 'value')[0];
  unset(state, path);
  return set(state, path, { value , valid });
}

// Initialise context
export const FormBuilderContext = React.createContext();

const FormBuilder = ({
  form,
  debug,
  onSubmit,
  disabled,
  error,
  className
}) => {
  // Initialise state as an empty object, connect it to reducer
  const [state, dispatch] = useReducer(appReducer, {});

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(state);
  }

  // Assigns most common input components to string equivalents,
  // or returns a custom component if passed in via form config prop,
  // throws error if component string cannot be parsed
  const switchComponent = function (component) {
    if (typeof (component) !== 'string') return component;
    switch (component) {
      case 'FieldGroup':
        return FieldGroup
      case 'Fieldset':
        return Fieldset;
      case 'FormSection':
        return FormSection;
      case 'FormControl':
        return FormControl;
      case 'TextInput':
        return TextInput;
      case 'TextArea':
        return TextArea;
      case 'Select':
        return Select;
      case 'RadioInput':
        return RadioInput;
      case 'Checkbox':
        return Checkbox;
      case 'Button':
        return Button;
      case 'Submit':
        return Button;
      case 'Spinner':
        return Spinner;
      default:
        throw new Error('Form component not recognised');
    }
  }

  const assignValidationFunctions = function (validations) {
    console.log({validations})
    return validations.map(rule => {
      console.log({rule})
      rule.method = typeof (rule.method) === 'string' ? validator[rule.method] : rule.method(state)
      return rule;
    });
  };

  // Recursively render component tree implied through form config prop
  const renderChildren = function (children) {
    return children.map((child, i) => {
      if (child.props.render !== undefined && child.props.render(state) === false) {
        return null
      } else {
        child.props.validations && console.log('**', child.props.validations)
        let nestedChildren = child.props.children ? renderChildren(child.props.children) : null;
        let inputComponent = child.props.component ? switchComponent(child.props.component) : null;
        let validations = child.props.validations ? assignValidationFunctions(child.props.validations) : null;
        if (child.component !== 'FormControl') {
          return React.createElement(
            switchComponent(child.component),
            { ...child.props, context: FormBuilderContext, component: inputComponent, validations: validations, disabled: disabled, key: i },
            nestedChildren
          );
        } else {
          return React.createElement(
            switchComponent(child.component),
            { ...child.props, disabled: !formValid(state), key: i },
            nestedChildren
          );
        }
      }
    });
  }

  const onKeyPress = e => {
    if (e.key === 'Enter') {
      e.target.type !== 'submit' && e.preventDefault();
    }
  }

  const formValid = (state) => {
    const validArray = Object.keys(state).map(key => state[key].valid);
    return validArray.indexOf(false) === -1;
  }

  // Render the generated form, wrapping with context to pass reducer's dispatch method down to inputs
  return (
    <FormBuilderContext.Provider value={{dispatch}}>
      <form data-testid="formBuilder" onSubmit={submitHandler} onKeyPress={ e => onKeyPress(e)} className={className}>
        {renderChildren(form)}
        {debug && <pre data-testid="debug"><p className={styles.debug}>Sandbox state: {JSON.stringify(state, null, 2)}</p></pre>}
        {error ? <p className={styles.formError}>{error}</p> : null}
      </form>
    </FormBuilderContext.Provider>
  );
};

export { FormBuilder };
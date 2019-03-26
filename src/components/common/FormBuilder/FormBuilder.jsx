import React, { useReducer, useEffect } from 'react';
import { set, unset } from 'lodash';
import validator from 'validator';


import { FieldGroup, FormSection, Fieldset, FormControl } from './components/layout';
import { TextInput, TextArea, Select, RadioInput, Checkbox } from './components/inputs';

import styles from './FormBuilder.module.css';
import { pathsFromObject } from './helperFunctions';

// Set up form-level reducer, to be updated by Fieldset components through
// dispatch callback passed down through context
const appReducer = (state, action) => {
  switch(action.type) {
    case 'update':
    // console.log('action.payload', action.payload);
      return { ...updateState(state, action.payload) }
    default:
      return state;
  }
}



const updateState = function (state, update) {
  // console.log('update', update)
  const { path, value, valid } = pathsFromObject(update, 'value')[0];
  // console.log(path, value, valid);
  unset(state, path);
  return set(state, path, { value , valid });
}

// Initialise context
const FormBuilderContext = React.createContext();

const FormBuilder = (props) => {
  const { form, debug, onSubmit, disabled } = props;

  // Initialise state as an empty object, connect it to reducer
  const [state, dispatch] = useReducer(appReducer, {});

  // Debugging console logs
  useEffect(() => {
    // console.log('FormBuilder has mounted');
  }, []);

  useEffect(() => {
    // console.log('FormBuilder has rerendered');
  });

  useEffect(() => {
    // console.log('FormBuilder state has changed', state)
  }, [state])

  const submitHandler = (e) => {
    // console.log('submitHandler()', e)
    e.preventDefault();
    onSubmit(state);
  }

  // Assigns most common input components to string equivalents,
  // or returns a custom component if passed in via form config prop,
  // throws error if component string cannot be parsed
  const switchComponent = function (component) {
    // console.log('switchComponent:', component);
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
      default:
        throw new Error('Form component not recognised');
    }
  }

  const assignValidationFunctions = function (validations) {
    return validations.map(rule => {
      rule.method = typeof (rule.method) === 'string' ? validator[rule.method] : rule.method
      return rule;
    });
  };

  // Recursively render component tree implied through form config prop
  const renderChildren = function (children) {
    return children.map((child, i) => {
      let nestedChildren = child.props.children ? renderChildren(child.props.children) : null;
      let inputComponent = child.props.component ? switchComponent(child.props.component) : null;
      let validations = child.props.validations ? assignValidationFunctions(child.props.validations) : null;
      return React.createElement(
        switchComponent(child.component),
        { ...child.props, context: FormBuilderContext, component: inputComponent, validations: validations, disabled: disabled, key: i },
        nestedChildren
      );
    });
  }

  // Render the generated form, wrapping with context to pass reducer's dispatch method down to inputs
  return (
    <FormBuilderContext.Provider value={dispatch}>
      <form data-testid="formBuilder" onSubmit={submitHandler} className={styles.form}>
        {renderChildren(form)}
        {debug && <pre data-testid="debug"><p className={styles.debug}>Sandbox state: {JSON.stringify(state, null, 2)}</p></pre>}
      </form>
    </FormBuilderContext.Provider>
  );
};



// const initialiseState = function(config) {
//   let state = {};
//   getStateValues(config, state)
//   return state;
// };

// const getStateValues = function(array, state) {
//   array.forEach(item => {
//     state[item.props.name] = ''
//   })
// };

export { FormBuilder };
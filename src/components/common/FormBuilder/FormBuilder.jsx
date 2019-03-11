import React, { useState } from 'react';
import { set, merge, get, uniqueId, values } from 'lodash';

import { Button, Toast } from '../';
import { Fieldset, FieldGroup, FormSection } from './components/sections';

export * from './components/sections';

const FormBuilder = (props) => {
  const { disabled, form, submitHandler, error } = props;

  const [state, setState] = useState(setInitialState());

  function setInitialState() { // Returns state object after recursive mapping of form prop
    let state = {};
    getStateValues(form, state);
    return state;
  }

  function getStateValues(array, state) { // Recursively searches through (nested) array and assigns form field names/values to state argument
    return array.forEach(elem => {
      if ((elem.props && elem.props.name) && !elem.children) { 
        return set(state, elem.props.name, elem.props.defaultValue || ''); // Assigns name and value of inputs to component level state
      } else if ((elem.props && elem.props.type === 'submit') || (elem.props && elem.props.type === 'button')) { 
        return; // Exclude buttons from recursion
      } else if ((!elem.props || !elem.props.name) && elem.children) { 
        return getStateValues(elem.children, state); // Recurse function inside any wrapping components
      }
    });
  }

  // Form level validation, returns true if values of all inputs are valid
  const isFormValid = () => {
    const fields = values(state);
    const validations = fields.map(field => {
      return field.valid;
    })
    if (validations.indexOf(false) !== -1) {
      return false;
    } else {
      return true;
    }
  }

  function onChangeHandler(path, data) { // Updates component level state each time the value of an input changes
    const nestedUpdate = {};
    set(nestedUpdate, path, { value: data.value, valid: data.valid });
    setState(merge(state, nestedUpdate));
  }

  const switchComponent = (type) => { // Returns component to render in place of string provided in form config object
    switch(type) {
      case 'FormSection':
        return FormSection;
      case 'FieldGroup':
        return FieldGroup;
      case 'Fieldset':
        return Fieldset;
      case 'Submit':
        return Button;
      default:
        return 'div';
    }
  }

  const children = renderChildren(form);

  // todo: Refactor this mess!
  function renderChildren(children) { // Recursively renders component tree
    return children.map((child, i) => {
      const fieldsetProps = {};
      if (child.component === 'Fieldset') {
        fieldsetProps.onChange = onChangeHandler;
        fieldsetProps.value = get(state, child.props.name);
        disabled ? fieldsetProps.disabled = true : fieldsetProps.disabled = false;
      }
      const component = typeof(child.component) === 'string' ? switchComponent(child.component) : child.component;
      let children;
      if ((child.props && child.props.type === 'submit') || (child.props && child.props.type === 'button')) {
        children = child.children;
      } else if (!child.children) {
        children = null;
      } else {
        children = renderChildren(child.children);
      }
      return React.createElement(
        component,
        { 
          ...child.props,
          ...fieldsetProps,
          key: uniqueId()
        },
        children
      )
    })
  }

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        if (isFormValid()) {
          submitHandler(state);
        } else {
          console.log('form is not valid');
        }
    }}>
      {children}
      <button></button>
      <Toast type="error" content={error}></Toast>
    </form>
  );
}

export { FormBuilder };
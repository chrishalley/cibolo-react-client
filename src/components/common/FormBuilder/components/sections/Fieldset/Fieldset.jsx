import React, { useState, useEffect } from 'react';

import { TextInput, Checkbox, RadioInput, TextArea, Select } from '../../inputs';
import { Toast } from '../../../../index';

import styles from './Fieldset.module.css';

const Fieldset = (props) => {
  const { defaultValue, type, name, label, onChange, validations } = props;
  const [value, setValue] = useState(defaultValue || '');


  const renderInput = (element) => {
    return React.createElement(
      element,
      {...props, onBlur: onBlurHandler, onChange: onChangeHandler, value: value},
      props.children
    );
  }

  // Validation
  const [valid, setValid] = useState(setValidInitialState());
  const [errorMessage, setErrorMessage] = useState(null);
  const [dirty, setDirty] = useState(false);

  function setValidInitialState() {
    if (validations && validations.length > 0) {
      if (defaultValue) {
        const initialValidationResults = validations.map(rule => {
          return rule.method(defaultValue, rule.methodOptions) === rule.validWhen;
        });
        if (initialValidationResults.indexOf(false) === -1) {
          return true;
        }
      }
      return false;
    } else {
      return true;
    }
  }

  const validate = (input) => {
    setErrorMessage(null);
    const validationResults = validations.map(rule => {
      return rule.method(input, rule.methodOptions) === rule.validWhen;
    })
    if (validationResults.indexOf(false) !== -1) {
      setValid(false);
      const errorString = validations[validationResults.indexOf(false)].errorMessage;
      setErrorMessage(errorString);
    } else {
      setValid(true);
    }
  }

  const toastVisibility = () => !dirty ? { visibility: 'hidden' } : {};

  const onBlurHandler = (update) => {
    setDirty(true);
  }

  const onChangeHandler = (update) => {
    setValue(update.value);
    if (validations && validations.length > 0) {
      validate(update.value);
    }
  }

  useEffect(() => {
    onChange(name, { value: value, valid });
  }, [value]);

  const switchInput = (type) => {
    switch(type) {
      case 'checkbox':
        return renderInput(Checkbox);
      case 'radio':
        return renderInput(RadioInput);
      case 'textarea':
        return renderInput(TextArea);
      case 'select':
        return renderInput(Select);
      case 'email':
      case 'password':
      case 'text':
      default:
        return renderInput(TextInput);
    }
  }
  
  return (
    <fieldset className={styles.fieldset}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      {switchInput(type)}
      <Toast type="error" content={errorMessage} style={toastVisibility()}></Toast>
    </fieldset>
  );
}

export { Fieldset };
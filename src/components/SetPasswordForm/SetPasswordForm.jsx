import React, { useState } from 'react';
import { isLength } from 'validator'
import { get } from 'lodash';

import {
  formValues
} from '../../utils/utils';

import { FormBuilder } from '../common';

const setPasswordForm = [
  {
    component: "Fieldset",
    props: {
      component: "TextInput",
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "eg. password123",
      validations: [
        {
          method: isLength,
          methodOptions: { min: 6, max: undefined },
          validWhen: true,
          errorMessage: "Please enter a minimum of 6 characters"
        }
      ]
    }
  },
  {
    component: "Fieldset",
    props: {
      component: "TextInput",
      type: "password",
      name: "confirmPassword",
      label: "Confirm Password",
      placeholder: "eg. password123",
      validations: [
        {
          method: isLength,
          methodOptions: { min: 6, max: undefined },
          validWhen: true,
          errorMessage: "Please enter a minimum of 6 characters"
        },
        { // Todo: Make this work
          method: (state) => confPassword => {
            const value = get(state, 'password.value')
            return confPassword === value
          },
          // methodOptions: { min: 6, max: undefined },
          validWhen: true,
          errorMessage: "Passwords do not match"
        }
      ]
    }
  },
  {
    component: "FormControl",
    props: {
      children: [
        {
          component: 'Submit',
          props: {
            onClick: () => { },
            label: "Set password",
            type: "submit"
          }
        },
      ]
    }
  }
];



const SetPasswordForm = ({
  onSubmit
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const submitHandler = (state) => {
    const { password } = formValues(state);
    onSubmit(password)
    setFormSubmitted(true)
  }
  return !formSubmitted ? (
    <FormBuilder
      error={''}
      onSubmit={submitHandler}
      form={setPasswordForm}
    />
  ) : (
    <p>Password sucessfully reset!</p>
  );
};

export default SetPasswordForm;
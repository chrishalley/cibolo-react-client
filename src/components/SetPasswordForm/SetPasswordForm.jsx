import React from 'react';
import { isLength } from 'validator'

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

const onSubmit = () => {
  console.log('setPasswordForm submit')
}

const SetPasswordForm = () => {
  return (
    <FormBuilder
      error={''}
      onSubmit={onSubmit}
      form={setPasswordForm}
    />
  );
};

export default SetPasswordForm;
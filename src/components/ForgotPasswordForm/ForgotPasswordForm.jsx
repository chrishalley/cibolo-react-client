import React, { useState } from 'react';
import { isEmail, isEmpty } from 'validator'

import { FormBuilder } from '../common';

const forgotPasswordForm = [
  {
    component: "Fieldset",
    props: {
      component: "TextInput",
      type: "text",
      name: "email",
      label: "Email",
      placeholder: "eg. test@test.com",
      validations: [
        {
          method: isEmpty,
          validWhen: false,
          errorMessage: "Please enter something"
        },
        {
          method: isEmail,
          validWhen: true,
          errorMessage: "Please enter a valid email address"
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
            onClick: () => {},
            label: "Reset password",
            type: "submit"
          }
        },
      ]
    }
  }
];


const ForgotPasswordForm = ({
  onSubmit
}) => {

  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const onSubmitHandler = () => {
    onSubmit()
    setFormSubmitted(true);
  };

  return !formSubmitted ?
      (
        <FormBuilder
          error={''}
          onSubmit={onSubmitHandler}
          form={forgotPasswordForm}
        />
      ) : (
        <p>Form submitted!</p>
      );
};

export default ForgotPasswordForm;


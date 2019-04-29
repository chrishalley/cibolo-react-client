import React from 'react';
import { isEmpty } from 'validator';

import { FormBuilder } from '../common';

const BookingForm = props => {
  return (
    <div>
      <FormBuilder form={form} onSubmit={() => console.log('submit')} />
    </div>
  );
}

const form = [
  {
    component: "FormSection",
    props: {
      title: "Event Details",
      flexDirection: "row",
      children: [
        {
          component: "FieldGroup",
          props: {
            flexDirection: "row",
            children: [
              {
                component: "Fieldset",
                props: {
                  component: "TextInput",
                  type: "text",
                  name: "eventTitle",
                  label: "Event Title",
                  placeholder: "My awesome event",
                  defaultValue: "",
                  validations: [
                    {
                      method: isEmpty,
                      validWhen: false,
                      errorMessage: "Please enter an event title"
                    }
                  ]
                }
              }
            ]
          }
        }
      ]
    }
  }
];

export default BookingForm;
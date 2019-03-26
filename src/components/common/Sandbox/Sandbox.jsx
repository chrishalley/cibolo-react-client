import React from 'react';

import { FormBuilder } from '..';
import { ColorPicker } from '../FormBuilder/components/inputs/ColorPicker/ColorPicker';

const Sandbox = () => {
  return (
    <div>
      <h1>Sandbox</h1>
      <FormBuilder debug form={sandboxConfig} onSubmit={onSubmit} />
    </div>
  );
}

const onSubmit = (state) => {
  console.log(state);
}

const sandboxConfig = [
  {
    component: 'FormSection',
    props: {
      flexDirection: 'row',
      title: 'Client name',
      children: [
        {
          component: 'FieldGroup',
          props: {
            flexDirection: 'row',
            children: [
              {
                component: 'Fieldset',
                props: {
                  name: 'client.firstName',
                  label: 'First name',
                  defaultValue: 'Hello',
                  component: 'TextInput'
                }
              },
              {
                component: 'Fieldset',
                props: {
                  name: 'client.lastName',
                  label: 'Last name',
                  defaultValue: 'There',
                  component: 'TextInput'
                }
              },
              {
                component: 'Fieldset',
                props: {
                  name: 'event.description',
                  label: 'Description',
                  defaultValue: 'Some random dummy text',
                  component: 'TextArea'
                }
              },
              {
                component: 'Fieldset',
                props: {
                  name: 'user.role',
                  label: 'Role',
                  options: [
                    { label: 'Super-admin', value: 'super-admin' },
                    { label: 'Admin', value: 'admin' },
                  ],
                  defaultValue: 'admin',
                  component: 'Select'
                }
              },
              {
                component: 'Fieldset',
                props: {
                  name: 'event.session',
                  label: 'Session',
                  options: [
                    { label: 'Morning', value: 'morning' },
                    { label: 'Afternoon', value: 'afternoon' },
                  ],
                  defaultValue: 'morning',
                  component: 'RadioInput'
                }
              },
              {
                component: 'Fieldset',
                props: {
                  name: 'event.extras',
                  label: 'Extras',
                  options: [
                    { label: 'Drinks', value: 'drinks' },
                    { label: 'Food', value: 'food' },
                  ],
                  defaultValue: ['drinks'],
                  component: 'Checkbox'
                }
              },
            ]
          }
        }
      ]
    }
  },
  {
    component: 'FormSection',
    props: {
      flexDirection: 'row',
      title: 'Client contact',
      children: [
        {
          component: 'FieldGroup',
          props: {
            flexDirection: 'column',
            children: [
              {
                component: 'Fieldset',
                props: {
                  name: 'client.email',
                  label: 'Email',
                  defaultValue: 'test@test.com',
                  component: 'TextInput',
                  validations: [
                    {
                      method: 'isEmpty',
                      validWhen: false,
                      errorMessage: 'Please enter something'
                    },
                    {
                      method: 'isEmail',
                      validWhen: true,
                      errorMessage: 'Please enter a valid email address'
                    }
                  ]
                }
              },
              {
                component: 'Fieldset',
                props: {
                  name: 'client.address',
                  label: 'Address',
                  defaultValue: '123 example lane',
                  component: 'TextInput'
                }
              },
              {
                component: 'Fieldset',
                props: {
                  name: 'client.avatarColor',
                  label: 'Avatar color',
                  component: ColorPicker
                }
              },
            ]
          }
        }
      ]
    }
  },
  {
    component: 'FormControl',
    props: {
      controls: [
        {
          onClick: () => {},
          label: 'Seeend',
          type: 'submit'
        }
      ]
    }
  }
  
  
  // {
  //   component: Input,
  //   props: {
  //     name: 'client.firstName',
  //     label: 'First name',
  //     defaultValue: 'Hello'
  //   }
  // },
  // {
  //   component: Input,
  //   props: {
  //     name: 'client.lastName',
  //     label: 'Last name',
  //     defaultValue: 'There'
  //   }
  // },
  // {
  //   component: Input,
  //   props: {
  //     name: 'client.email',
  //     label: 'Email',
  //     defaultValue: 'There'
  //   }
  // }
];

export default Sandbox;
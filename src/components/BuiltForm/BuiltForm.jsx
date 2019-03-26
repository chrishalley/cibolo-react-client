import React from 'react'

import { FormBuilder, Card } from '../common'

const form = [
  {
    component: 'FormSection',
    props: {
      flexDirection: 'row'
    },
    children: [
      {
        component: 'FieldGroup',
        props: {
          flexDirection: 'column'
        },
        children: [
          {
            component: 'Fieldset',
            props: {
              type: 'text',
              name: 'client.firstName',
              label: 'First Name',
              placeholder: 'eg. John',
              defaultValue: 'Dave'
            }
          },
          {
            component: 'Fieldset',
            props: {
              type: 'text',
              name: 'client.lastName',
              label: 'Last name',
              placeholder: 'eg. Smith'
            }
          }
        ]
      },
      {
        component: 'FieldGroup',
        props: {
          flexDirection: 'column'
        },
        children: [
          {
            component: 'Fieldset',
            props: {
              type: 'text',
              name: 'client.emailAddress',
              label: 'Email address',
              placeholder: 'eg. john@example.com'
            }
          },
          {
            component: 'Fieldset',
            props: {
              type: 'text',
              name: 'client.phoneNumber',
              label: 'Phone number',
              placeholder: 'eg. 07123456789'
            }
          }
        ]
      }
    ]
  },
  {
    component: 'FormSection',
    props: {
      flexDirection: 'row'
    },
    children: [
      {
        component: 'FieldGroup',
        props: {
          flexDirection: 'column'
        },
        children: [
          {
            component: 'Fieldset',
            props: {
              type: 'text',
              name: 'event.title',
              label: 'Event title',
              placeholder: 'eg. My awesome event'
            }
          },
          {
            component: 'Fieldset',
            props: {
              type: 'text',
              name: 'event.description',
              label: 'Event description',
              placeholder: 'Please provide a short description'
            }
          }
        ]
      },
      {
        component: 'FieldGroup',
        children: [
          {
            component: 'Fieldset',
            props: {
              type: 'text',
              name: 'event.image',
              label: 'Featured image',
              placeholder: 'eg. john@example.com'
            }
          }
        ]
      },
      {
        component: 'Fieldset',
        props: {
          type: 'radio',
          name: 'radio.test',
          label: 'Radio test',
          options: [
            { label: 'Option 1', value: 1 },
            { label: 'Option 2', value: 2 },
            { label: 'Option 3', value: 3 }
          ],
          value: 1
        }
      },
      {
        component: 'Fieldset',
        props: {
          type: 'checkbox',
          name: 'checkbox.test',
          label: 'Checkbox test',
          options: [
            { label: 'Option 1', value: false },
            { label: 'Option 2', value: false },
            { label: 'Option 3', value: false }
          ]
        }
      }
    ]
  },
  {
    component: 'Submit',
    props: {
      type: 'submit'
    },
    children: 'Send in'
  }
]

function submitBuiltForm(state) {
  console.log('submit built form: ', state)
}

const BuiltForm = () => {
  
  return (
    <Card>
      <FormBuilder submitHandler={submitBuiltForm} form={form}></FormBuilder>
    </Card>
  )
}

export default BuiltForm
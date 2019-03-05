import React, { Fragment, useState } from 'react';
import { FormBuilder, SecondaryButton } from '../common';
import { connect } from 'react-redux';

import { isEmail, isEmpty } from 'validator';
import { addUser } from '../../actions';

const EditNewUserForm = (props) => {

  const [error, setError] = useState(null);

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
                name: 'firstName',
                label: 'First Name',
                placeholder: 'eg. John',
                validations: [
                  {
                    method: isEmpty,
                    validWhen: false,
                    errorMessage: 'Please enter a first name'
                  }
                ]
              }
            },
            {
              component: 'Fieldset',
              props: {
                type: 'text',
                name: 'lastName',
                label: 'Last Name',
                placeholder: 'eg. Smith',
                validations: [
                  {
                    method: isEmpty,
                    validWhen: false,
                    errorMessage: 'Please enter a last name'
                  }
                ]
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
                name: 'emailAddress',
                label: 'Email address',
                placeholder: 'eg. john.smith@example.com',
                validations: [
                  {
                    method: isEmail,
                    validWhen: true,
                    errorMessage: 'Please enter a valid email address'
                  }
                ]
              }
            },
            {
              component: 'Fieldset',
              props: {
                type: 'select',
                name: 'role',
                label: 'Role',
                options: [
                  {name: 'Admin', value: 'admin'},
                  {name: 'Super-admin', value: 'super-admin'}
                ],
                defaultValue: 'admin',
                validations: [
                  {
                    method: isEmpty,
                    validWhen: false,
                    errorMessage: 'Please enter a user role'
                  }
                ]
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
          component: 'Submit',
          props: {
            type: 'submit',
          },
          children: 'Save user'
        },
        {
          component: SecondaryButton,
          props: {
            type: 'button',
          },
          children: 'Delete user'
        }
      ]
    }
  ]

  const successfulSave = (string) => {
    console.log('callback: ', string);
  }

  const submitHandler = (state) => {
    const { firstName, lastName, emailAddress, role } = state;
    const user = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: emailAddress.value,
      role: role.value,
    }
    props.addUser(user, successfulSave);
  }

  return (
    <Fragment>
      <FormBuilder form={form} submitHandler={submitHandler} error={error}></FormBuilder>
    </Fragment>
  );
};

export default connect(null, { addUser })(EditNewUserForm);
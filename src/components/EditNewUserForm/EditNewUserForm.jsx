import React, { Fragment, useState, useEffect, useContext } from 'react';
import { FormBuilder, SecondaryButton, EditUserAvatar } from '../common';
import { connect } from 'react-redux';
import { UsersContext } from '../../screens/Dashboard/Users/Users';

import { isEmail, isEmpty } from 'validator';
import { addUser, updateUser, deleteUser } from '../../actions';

const EditNewUserForm = (props) => {

  const [error, setError] = useState(null);

  const { formMode, activeUser, setUsers, users, setShowModal } = useContext(UsersContext);

  useEffect(() => {
    console.log('EditNewUserForm props:', props)
  }, []) 
  // useEffect(() => {
  //   console.log('formMode: ', formMode);
  //   console.log('activeUser: ', activeUser);
  // })

  // const successfulSave = (string) => {
  //   console.log('callback: ', string);
  // }

  const addUserToUsers = (user) => {
    const updatedUsers = [ ...users, user ];
    setUsers(updatedUsers);
    setShowModal(false);
  }

  const removeUserFromUsers = (id) => {
    const updatedUsers = users.filter(user => user._id !== id);
    setUsers(updatedUsers)
    setShowModal(false);
  }

  const updateUserInUsers = (updatedUser) => {
    const updatedUsers = users.map(user => {
      if (user._id !== updatedUser._id) {
        return user;
      } else {
        return updatedUser;
      }
    })
    setUsers(updatedUsers);
    setShowModal(false);
  }

  const onSubmit = (state) => {
    const { firstName, lastName, emailAddress, role, avatar } = state;
    const user = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: emailAddress.value,
      role: role.value,
      avatar: avatar.value
    }

    switch (formMode) {
      case 'add':
        props.addUser(user, addUserToUsers);
        break;
      case 'edit':
        const update = { ...activeUser, ...user };
        props.updateUser(update, updateUserInUsers);
        break;
      default:
        console.log('invalid formMode specified')
    }
  }

  const form = [
    {
      component: "FormSection",
      props: {
        flexDirection: "row",
        children: [
          {
            component: "FieldGroup",
            props: {
              flexDirection: "column",
              children: [
                {
                  component: "Fieldset",
                  props: {
                    component: "TextInput",
                    type: "text",
                    name: "firstName",
                    label: "First Name",
                    placeholder: "eg. John",
                    defaultValue:
                      activeUser && activeUser.firstName
                        ? activeUser.firstName
                        : "",
                    validations: [
                      {
                        method: isEmpty,
                        validWhen: false,
                        errorMessage: "Please enter a first name"
                      }
                    ]
                  }
                },
                {
                  component: "Fieldset",
                  props: {
                    component: "TextInput",
                    type: "text",
                    name: "lastName",
                    label: "Last Name",
                    placeholder: "eg. Smith",
                    defaultValue:
                      activeUser && activeUser.lastName
                        ? activeUser.lastName
                        : "",
                    validations: [
                      {
                        method: isEmpty,
                        validWhen: false,
                        errorMessage: "Please enter a last name"
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            component: "FieldGroup",
            props: {
              flexDirection: "column",
              children: [
                {
                  component: "Fieldset",
                  props: {
                    component: "TextInput",
                    type: "text",
                    name: "emailAddress",
                    label: "Email address",
                    placeholder: "eg. john.smith@example.com",
                    defaultValue:
                      activeUser && activeUser.email ? activeUser.email : "",
                    validations: [
                      {
                        method: isEmail,
                        validWhen: true,
                        errorMessage: "Please enter a valid email address"
                      }
                    ]
                  }
                },
                {
                  component: "Fieldset",
                  props: {
                    component: "Select",
                    name: "role",
                    label: "Role",
                    options: [
                      { label: "Admin", value: "admin" },
                      { label: "Super-admin", value: "super-admin" }
                    ],
                    defaultValue:
                      activeUser && activeUser.role
                        ? activeUser.role
                        : "admin",
                    validations: [
                      {
                        method: isEmpty,
                        validWhen: false,
                        errorMessage: "Please enter a user role"
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      component: "FormSection",
      props: {
        title: "Customise Avatar",
        flexDirection: "row",
        children: [
          {
            component: "Fieldset",
            props: {
              component: EditUserAvatar,
              name: "avatar",
              user: activeUser ? activeUser : null
            }
          }
        ]
      }
    },
    {
      component: "FormControl",
      props: {
        controls: [
          {
            onClick: () => {},
            label: "Save",
            type: "submit"
          }
          // {
          //   component: SecondaryButton,
          //   props: {
          //     type: 'button',
          //     onClick: () => props.deleteUser(activeUser._id, removeUserFromUsers)
          //   },
          //   children: 'Delete user'
          // }
        ]
      }
    }
  ];



  // const isFormDisabled = () => {
  //   if (props.currentUser.role === 'super-admin') { // Return false for all super-admin users
  //     return false;
  //   } else if (props.currentUser._id === activeUser._id) { // Return false for admin users accessing their own data
  //     return false
  //   } else {  // Return true for all other cases
  //     return true
  //   }
  // }

  return (
    <Fragment>
      <FormBuilder disabled={formMode === 'view'} form={form} onSubmit={onSubmit} error={error}></FormBuilder>
    </Fragment>
  );
};

export default connect(null, { addUser, updateUser, deleteUser })(EditNewUserForm);
import React, { useState, useContext } from 'react';

import { crudOps, permissions } from '../../core/constants';
import { currentUserCanEdit } from '../../utils/utils';

import { FormBuilder, EditUserAvatar } from '../common';
import { UsersContext } from '../../screens/Dashboard/Users/Users';
import { isEmail, isEmpty } from 'validator';

import styles from './EditNewUserForm.module.css';

const EditNewUserForm = () => {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    formMode,
    activeUser,
    setActiveUser,
    users,
    setShowModal,
    addUserRequest,
    updateUserRequest,
    deleteUserRequest,
    currentUser
  } = useContext(UsersContext);

  const userValues = (user) => {
    let update = {}
    Object.keys(user).forEach(key => {
      update[key] = user[key].value
    })
    return update
  }

  const onSubmit = (user) => {
    setLoading(true);
    const update = userValues(user)

    switch (formMode) {
      case crudOps.EDIT: {
        return updateUserRequest({
          payload: {
            user: {
              ...activeUser,
              ...update
            }
          },
          callbackSuccess: () => {
            setLoading(false);
            setShowModal(false);
          },
          callbackFail: () => console.log('user update fail...'),
        })
      }
      case crudOps.ADD: {
        return addUserRequest({
          payload: {
            user: {...update}
          },
          callbackSuccess: () => {
            setLoading(false);
            setShowModal(false);
            setActiveUser(null);
          },
          callbackFail: () => console.log('user add failed'),
        })
      }
      default:
        return
    }
    // const processImage = new Promise((resolve, reject) => {
    //   if ( activeUser.avatar.profileImage && avatar.value.profileImage && activeUser.avatar.profileImage.url !== avatar.value.profileImage.url) { // Diff the avatar images
    //       // Cloudinary upload goes here
    //       const { profileImage } = avatar.value;
    //       let fd = new FormData();
    //       fd.append('file', profileImage.url);
    //       fd.append('filename', profileImage.name);
    //       api.post('/profileImages', fd)
    //         .then(res => {
    //           const { data } = res;
    //           resolve(data);
    //         })
    //         .catch(e => { 
    //           reject(e); 
    //         })
    //     } else {
    //       resolve(avatar.value.profileImage);
    //     }
    //   });

      // processImage.then((profileImage) => {
      //   const user = {
      //     firstName: firstName.value,
      //     lastName: lastName.value,
      //     email: emailAddress.value,
      //     role: role.value,
      //     avatar: {...avatar.value, profileImage}
      //   }
    
      //   switch (formMode) {
      //     case 'add':
      //       addUserRequest(user, addUserToUsers);
      //       break;
      //     case 'edit':
      //       const cb = () => setShowModal(false);
      //       const updatedUser = { ...activeUser, ...user };
      //       updateUserRequest({ updatedUser }, cb);
      //       break;
      //     default:
      //       console.log('invalid formMode specified')
      //   }
      // })
      // .catch(e => {
      //   setError(`Error: ${e.response.data.message}`);
      // })
  }

  const deleteUser = (userId) => {
    setLoading(true)
    return deleteUserRequest({
      payload: { userId },
      callbackSuccess: () => {
        setLoading(false);
        setShowModal(false);
      },
      callbackFail: () => {
        setLoading(false);
      },
    })
  }

  const form = [
    {
      component: "FormSection",
      props: {
        title: "User Details",
        flexDirection: "column",
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
              flexDirection: "row",
              children: [
                {
                  component: "Fieldset",
                  props: {
                    component: "TextInput",
                    type: "text",
                    name: "email",
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
                      { label: "Admin", value: permissions.ADMIN },
                      { label: "Super-admin", value: permissions.SUPER_ADMIN }
                    ],
                    defaultValue:
                      activeUser && activeUser.role
                        ? activeUser.role
                        : permissions.ADMIN,
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
    // {
    //   component: "FormSection",
    //   props: {
    //     title: "Customise Avatar",
    //     flexDirection: "row",
    //     children: [
    //       {
    //         component: "Fieldset",
    //         props: {
    //           component: EditUserAvatar,
    //           name: "avatar",
    //           user: activeUser ? activeUser : null
    //         }
    //       }
    //     ]
    //   }
    // },
    {
      component: "FormControl",
      props: {
        children: [
          {
            component: 'Submit',
            props: {
              onClick: () => {},
              label: "Save",
              type: "submit",
            }
          },
          {
            component: 'Submit',
            props: {
              onClick: () => deleteUser(activeUser._id),
              label: "Delete",
              type: "button",
              render: () => formMode !== crudOps.ADD && currentUserCanEdit(currentUser, activeUser),
            }
          },
        ]
      }
    }
  ];

  return (
    <FormBuilder
      disabled={!currentUserCanEdit(currentUser, activeUser)}
      form={form}
      onSubmit={onSubmit}
      error={error}
      className={styles.form}
    />
  );
};

export default EditNewUserForm;
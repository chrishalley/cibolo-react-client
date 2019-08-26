import React, { useState, useContext } from 'react';

import { crudOps } from '../../core/constants';

import { FormBuilder, EditUserAvatar } from '../common';
import { UsersContext } from '../../screens/Dashboard/Users/Users';
import { isEmail, isEmpty } from 'validator';

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
    deleteUser
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

  const form = [
    {
      component: "FormSection",
      props: {
        title: "User Details",
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
    <FormBuilder disabled={formMode === crudOps.READ} form={form} onSubmit={onSubmit} error={error}></FormBuilder>
  );
};

export default EditNewUserForm;
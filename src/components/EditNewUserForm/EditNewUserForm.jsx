import React, { useState, useContext } from 'react';
import api from '../../apis/api';

import { FormBuilder, EditUserAvatar } from '../common';
import { connect } from 'react-redux';
import { UsersContext } from '../../screens/Dashboard/Users/Users';
import { isEmail, isEmpty } from 'validator';
import { addUserRequest, updateUser, deleteUser, updateUserRequest } from '../../actions';

const EditNewUserForm = (props) => {
  console.log('editNewUserForm props', props);

  const [error, setError] = useState(null);

  const { formMode, activeUser, setUsers, users, setShowModal } = useContext(UsersContext);

  const addUserToUsers = (user) => {
    const updatedUsers = [ ...users, user ];
    setUsers(updatedUsers);
    setShowModal(false);
  }

  const removeUserFromUsers = (id) => {
    const updatedUsers = users.filter(user => user._id !== id);
    setUsers(updatedUsers);
    setShowModal(false);
  }

  // const updateUserInUsers = (updatedUser) => {
  //   const updatedUsers = users.map(user => {
  //     if (user._id !== updatedUser._id) {
  //       return user;
  //     } else {
  //       return updatedUser;
  //     }
  //   })
  //   setUsers(updatedUsers);
  //   setShowModal(false);
  // }

  const onSubmit = (state) => {
    const { firstName, lastName, emailAddress, role, avatar } = state;

    console.log(avatar);
    
    const processImage = new Promise((resolve, reject) => {
      console.log('HERE', avatar.value, activeUser.avatar);
      if ( activeUser.avatar.profileImage && avatar.value.profileImage && activeUser.avatar.profileImage.url !== avatar.value.profileImage.url) { // Diff the avatar images
          // Cloudinary upload goes here
          const { profileImage } = avatar.value;
          let fd = new FormData();
          fd.append('file', profileImage.url);
          fd.append('filename', profileImage.name);
          api.post('/profileImages', fd)
            .then(res => {
              const { data } = res;
              resolve(data);
            })
            .catch(e => { 
              console.log('somethings fucked')
              reject(e); 
            })
        } else {
          resolve(avatar.value.profileImage);
        }
      });

      processImage.then((profileImage) => {
        const user = {
          firstName: firstName.value,
          lastName: lastName.value,
          email: emailAddress.value,
          role: role.value,
          avatar: {...avatar.value, profileImage}
        }
    
        switch (formMode) {
          case 'add':
            props.addUser(user, addUserToUsers);
            break;
          case 'edit':
            const cb = () => setShowModal(false);
            const updatedUser = { ...activeUser, ...user };
            props.updateUserRequest({ updatedUser }, cb);
            // props.updateUser(update, updateUserInUsers);
            break;
          default:
            console.log('invalid formMode specified')
        }
      })
      .catch(e => {
        console.log('processImage error:', JSON.stringify(e, null, 2));
        setError(`Error: ${e.response.data.message}`);
      })
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
    <FormBuilder disabled={formMode === 'view'} form={form} onSubmit={onSubmit} error={error}></FormBuilder>
  );
};

export default connect(null, { addUserRequest, updateUserRequest, deleteUser })(EditNewUserForm);
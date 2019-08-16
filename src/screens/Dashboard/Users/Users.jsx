import React, { createContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { permissions, crudOps } from '../../../core/constants';

import {
  getUsers,
  addUserRequest,
  updateUserRequest,
  deleteUser
} from '../../../actions';

import AdminPageHeader from '../../../components/AdminPageHeader/AdminPageHeader';
import AdminUserList from '../../../components/AdminUserList/AdminUserList';
import EditNewUserForm from '../../../components/EditNewUserForm/EditNewUserForm';
import { Button, Modal } from '../../../components/common';

export const UsersContext = createContext();

const UsersScreen = ({
  currentUser,
  users,
  getUsers,
  addUserRequest,
  updateUserRequest,
  deleteUser
}) => {
  console.log({users})
  const [activeUser, setActiveUser] = useState(null);
  const [formMode, setFormMode] = useState(crudOps.ADD);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    if (showModal === false) {
      setShowModal(true);
    } else {
      setShowModal(false);
      setActiveUser(null);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const currentUserCanEdit = user => currentUser.role === permissions.SUPER_ADMIN || currentUser._id === user._id;

  const openEditForm = (user) => {
    if (user) {
      setActiveUser(user);
      if (!currentUserCanEdit(user)) {
        setFormMode(crudOps.ADD);
      } else {
        setFormMode(crudOps.EDIT);
      }
    } else {
      setFormMode();
    }
    setShowModal(true);
  }

  const renderFormTitle = () => {
    switch (formMode) {
      case crudOps.ADD:
        return 'Add user';
      case crudOps.EDIT:
        return 'Edit user';
      default:
        return 'View user'
    }
  }

  return (
    <>
      <UsersContext.Provider
        value={{
          formMode,
          activeUser,
          openEditForm,
          users,
          setShowModal,
          currentUser,
          addUserRequest,
          updateUserRequest,
          deleteUser
        }}>
        <AdminPageHeader title="Users">
          {
            currentUser.role === permissions.SUPER_ADMIN &&
            <Button onClick={() => openEditForm(null)}>Add new user</Button>
          }
        </AdminPageHeader>
        <AdminUserList users={users} />
        {
          showModal &&
          <Modal title={renderFormTitle()} closeHandler={toggleModal}>
            <EditNewUserForm />
          </Modal>
        }
      </UsersContext.Provider>
    </>
  );
}

const mapStateToProps = ({ auth: { user }, users}) => ({
  currentUser: user,
  users: users,
})

const mapDispatchToProps = {
  addUserRequest,
  getUsers,
  updateUserRequest,
  deleteUser
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersScreen);
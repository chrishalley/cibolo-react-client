import React, { Fragment, createContext, useContext, useEffect, useState } from 'react';

import api from '../../../apis/api';

import AdminPageHeader from '../../../components/AdminPageHeader/AdminPageHeader';
import AdminUserList from '../../../components/AdminUserList/AdminUserList';
import EditNewUserForm from '../../../components/EditNewUserForm/EditNewUserForm';
import { PrimaryButton, Modal } from '../../../components/common';

export const UsersContext = createContext();

const UsersScreen = () => {

  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);
  const [formMode, setFormMode] = useState('add');
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
    api.get('/users')
      .then(res => {
        setUsers(res.data)
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    console.log('users state updated');
    console.log(users);
  }, [users]);


  const initAddNewUser = () => {
    setFormMode('add');
    toggleModal();
  }

  const openEditForm = (user) => {
    setFormMode('edit');
    setActiveUser(user);
    setShowModal(true);
  }


  return (
    <Fragment>
      <UsersContext.Provider value={{ formMode, activeUser, openEditForm, setUsers, users, setShowModal}}>
        <AdminPageHeader title="Users">
          <PrimaryButton onClick={initAddNewUser}>Add new user</PrimaryButton>
        </AdminPageHeader>
        <AdminUserList users={users}></AdminUserList>
        {showModal && <Modal closeHandler={toggleModal}><EditNewUserForm /></Modal>}
      </UsersContext.Provider>
    </Fragment>
  );
}

export default UsersScreen;
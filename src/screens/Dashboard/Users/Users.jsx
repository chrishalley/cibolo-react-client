import React, { Fragment, createContext, useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import api from '../../../apis/api';

import AdminPageHeader from '../../../components/AdminPageHeader/AdminPageHeader';
import AdminUserList from '../../../components/AdminUserList/AdminUserList';
import EditNewUserForm from '../../../components/EditNewUserForm/EditNewUserForm';
import { PrimaryButton, Modal } from '../../../components/common';

export const UsersContext = createContext();

const UsersScreen = (props) => {

  const { currentUser } = props;

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
        console.log('***USERS*** ', res.data)
        setUsers(res.data)
      })
      .catch(e => console.log(e));
  }, []);

  useEffect(() => {
    console.log('users state updated');
    console.log(users);
  }, [users]);


  // const initAddNewUser = () => {
  //   setFormMode('add');
  //   toggleModal();
  // }

  const currentUserCanEdit = (user) => currentUser.role === 'super-admin' || currentUser._id === user._id;

  const openEditForm = (user) => {
    if (user) {
      setActiveUser(user);
      if (!currentUserCanEdit(user)) {
        setFormMode('view');
      } else {
        setFormMode('edit');
      }
    } else {
      setFormMode('add');
    }
    setShowModal(true);
  }

  const renderFormTitle = () => {
    switch (formMode) {
      case 'add':
        return 'Add user';
      case 'edit':
        return 'Edit user';
      default:
        return 'View user'
    }
  }


  return (
    <Fragment>
      <UsersContext.Provider value={{ formMode, activeUser, openEditForm, setUsers, users, setShowModal, currentUser}}>
        <AdminPageHeader title="Users">
          {currentUser.role === 'super-admin' && <PrimaryButton onClick={() => openEditForm(null)}>Add new user</PrimaryButton>}
        </AdminPageHeader>
        <AdminUserList users={users}></AdminUserList>
        {showModal && <Modal title={renderFormTitle()} closeHandler={toggleModal}><EditNewUserForm /></Modal>}
      </UsersContext.Provider>
    </Fragment>
  );
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps)(UsersScreen);
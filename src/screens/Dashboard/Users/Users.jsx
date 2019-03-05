import React, { Fragment, useEffect, useState } from 'react';

import api from '../../../apis/api';

import AdminPageHeader from '../../../components/AdminPageHeader/AdminPageHeader';
import AdminUserList from '../../../components/AdminUserList/AdminUserList';
import EditNewUserForm from '../../../components/EditNewUserForm/EditNewUserForm';
import { PrimaryButton, Modal } from '../../../components/common';

const UsersScreen = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users')
      .then(res => {
        setUsers(res.data)
      })
      .catch(e => console.log(e));
  }, []);

  const [showModal, setShowModal] = useState(false);

  const renderUsers = () => {
    return (
      <AdminUserList users={users}></AdminUserList>
      // <ul>
      //   {users.map(user => {
      //     return (
      //       <li key={user._id}>
      //         <Card>
      //           <p>{`${user.firstName} ${user.lastName}`}</p>
      //         </Card>
      //       </li>
      //     )
      //   })}
      // </ul>
    )
  }

  const initAddNewUser = () => {
    toggleModal();
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  }

  return (
    <Fragment>
      <AdminPageHeader title="Users">
        <PrimaryButton onClick={initAddNewUser}>Add new user</PrimaryButton>
      </AdminPageHeader>
      {renderUsers()}
      {showModal && <Modal closeHandler={toggleModal}><EditNewUserForm /></Modal>}
    </Fragment>
  );
}

export default UsersScreen;
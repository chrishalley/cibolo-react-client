import React, { useContext, useEffect, useState } from 'react';
import cx from 'classnames';

import { Card, SVGIcon, BasicButton } from '../../common';
import { UsersContext } from '../../../screens/Dashboard/Users/Users';
import styles from './AdminUserListItem.module.css';

const AdminUserListItem = ({
  user
}) => {
  const [edits, setEdits] = useState(-1);
  const [edited, setEdited] = useState(false);

  const {firstName, lastName, role} = user;
  useEffect(() => {
    setEdits(edits + 1)
  }, [firstName, lastName, role])
  useEffect(() => {
    if (edits > 0) {
      setEdited(true)
      setTimeout(() => setEdited(false), 400)
    }
  }, [edits])

  const { openEditForm } = useContext(UsersContext);

  return (
    <li>
      <Card className={cx(styles['user-list-item'], edited ? styles.edited : null)}>
        <div className={styles['quick-info']}>
          <h3 className={styles['user-name']}>{firstName} {lastName}</h3>
          <p className={styles['user-role']}>{role}</p>
        </div>
        <div className={styles['action-buttons']}>
          <BasicButton
            onClick={() => openEditForm(user)}
          >
            <SVGIcon style={{ width: "40px" }} icon="eye" />
          </BasicButton>
        </div>
      </Card>
    </li>
  );
};

export default AdminUserListItem;
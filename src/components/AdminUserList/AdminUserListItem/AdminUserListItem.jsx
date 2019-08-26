import React, { useContext } from 'react';
import cx from 'classnames';

import { useFlash } from '../../../core/hooks';
import { Card, SVGIcon, BasicButton } from '../../common';
import { UsersContext } from '../../../screens/Dashboard/Users/Users';
import styles from './AdminUserListItem.module.css';

const AdminUserListItem = ({
  user
}) => {
  const { firstName, lastName, role } = user

  const [edited] = useFlash([firstName, lastName, role], 400)

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
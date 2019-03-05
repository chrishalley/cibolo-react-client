import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

let AdminSidebarLink = ({label, className, to, children, icon}) => {
  return (
    <li className={className} key={label}>
      <Link to={to}>{children}</Link>
    </li>
  )
}

AdminSidebarLink = styled(AdminSidebarLink)`
li {
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
  background: red;
}

  a {
    display: flex;
    align-items: center;
  }

  svg {
    width: 4rem;
    margin-left: 2rem;
    height: auto;
  }
`

export default AdminSidebarLink;
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
  border-top: 1px solid red;
  
  &:last-child {
    border-bottom: 1px solid red;
  }

  a {
    display: flex;
    align-items: center;

    &:hover {
      background: green;
    }
  }

  svg {
    width: 4rem;
    margin-left: 1rem;
    height: auto;
  }
`

export default AdminSidebarLink;
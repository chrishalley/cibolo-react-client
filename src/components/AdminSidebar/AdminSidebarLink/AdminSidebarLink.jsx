import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired
}

let AdminSidebarLink = ({label, className, to, children}) => {
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
AdminSidebarLink.propTypes = propTypes;

export default AdminSidebarLink;
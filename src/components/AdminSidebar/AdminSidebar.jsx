import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { logout } from '../../actions';

import AdminSidebarLink from './AdminSidebarLink/AdminSidebarLink';
import { SVGIcon, SecondaryButton, PrimaryButton, BasicButton } from '../common';

let AdminSidebar = (props) => {

  const { className } = props;

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    console.log('sidebarProps: ', props);
  })

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const links = [
    { to: '/dashboard/users', label: 'Users', icon: 'person' },
    { to: '/dashboard/events', label: 'Events', icon: 'calendar' },
    { to: '/dashboard/bookings', label: 'Bookings', icon: 'deskbell' },
    { to: '/dashboard/terms', label: 'Terms & Conditions', icon: 'document-approved' },
    { to: '/', label: 'View Website', icon: 'eye' }
  ];

  const renderLinks = () => {
    return links.map(({to, label, icon}, i) => {
      return <AdminSidebarLink labelVisible={menuOpen} key={label} to={to}>{label}<SVGIcon icon={icon} /></AdminSidebarLink>
    });
  }

  return (
    <div className={`${className} ${menuOpen ? 'isOpen' : ''}`}>
      <PrimaryButton onClick={toggleMenu} classNames={['menu-button']}><SVGIcon icon="arrow-right" /></PrimaryButton>
      <ul>
        {renderLinks()}
        <li>
          <BasicButton onClick={logout}><SVGIcon icon="logout" /></BasicButton>
        </li>
      </ul>
    </div>
  );
}

AdminSidebar = styled(AdminSidebar)`
  background: #333333;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 1.5rem;
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100vh;
  transform: translateX(calc(-1 * (100% - 7rem)));
  transition: transform 0.3s ease-in-out;

  .menu-button {
      align-self: flex-end;
      margin-bottom: 2rem;

      svg {
        transform: rotateZ(0deg);
        transition: transform 0.3s ease-in-out;
        width: 4rem;
        height: 4rem;
      }
    }

  &.isOpen {
    width: auto;
    max-width: 100vw;
    transform: translateX(0);

    .menu-button {
      svg {
        transform: rotateZ(-180deg);
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;

    li {
      align-self: flex-end;
      
      &:not(:last-child) {
        margin-bottom: 2rem;
      }
    }
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: ${(props) => props.theme.colorPrimary};
    }
  }
`;

export default connect(null, { logout })(AdminSidebar);
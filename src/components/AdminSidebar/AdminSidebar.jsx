import React, { useState } from 'react';
import styled from 'styled-components';

// import styles from './AdminSidebar.module.css';
import AdminSidebarLink from './AdminSidebarLink/AdminSidebarLink';
import { SVGIcon, BasicButton, SecondaryButton } from '../common';

let AdminSidebar = ({ className }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const links = [
    {
      to: '/dashboard/users', label: 'Users', icon: 'person'
    },
    {
      to: '/dashboard/events', label: 'Events', icon: 'person'
    },
    {
      to: '/', label: 'Bookings', icon: 'person'
    },
    {
      to: '/', label: 'Terms & Conditions', icon: 'person'
    },
    {
      to: '/', label: 'View Website', icon: 'person'
    }
  ];

  const renderLinks = () => {
    return links.map(({to, label, icon}, i) => {
      return <AdminSidebarLink labelVisible={menuOpen} key={label} to={to}>{label}<SVGIcon icon={icon} width="30px" /></AdminSidebarLink>
    });
  }

  return (
    <div className={`${className} ${menuOpen ? 'isOpen' : ''}`}>
      <SecondaryButton style={{ alignSelf: 'flex-end' }}><SVGIcon icon="arrow-right" width="30px" /></SecondaryButton>
      <BasicButton onClick={toggleMenu} style={{ alignSelf: 'flex-end', color: '#ffffff' }}>
        <SVGIcon icon="arrow-right" width="30px" />
      </BasicButton>
      <ul>{renderLinks()}</ul>
    </div>
  );
}

AdminSidebar = styled(AdminSidebar)`
  background: #333333;
  transform: scaleX(160px);
  display: flex;
  flex-direction: column;
  color: white;
  padding: 1rem;
  position: absolute;
  left: 0;
  top: 0;
  min-height: 100vh;
  transform: translateX(calc(-1 * (100% - 60px)));
  transition: transform 0.3s ease-in-out;

  .menu-button {
      svg {
        transform: rotateZ(0deg);
        transition: transform 0.3s ease-in-out;
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
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default AdminSidebar;
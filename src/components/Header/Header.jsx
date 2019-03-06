import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { HeaderLink, SVGIcon } from '../common'

import styles from './Header.module.css';

class Header extends Component {

  logout = () => {
    this.props.logout()
  }

  renderLinks() {
    const { currentUser } = this.props
    if (currentUser) {
      return (
        <Fragment>
          <HeaderLink to="/">
            <button onClick={() => this.logout()}>
              <SVGIcon icon="close" />
              Log out
            </button>
          </HeaderLink>
          <HeaderLink to="/dashboard">
            <SVGIcon icon="calendar" />
            Dashboard
          </HeaderLink>
        </Fragment>
      )
    }
    
    return (
      <Fragment>
        <HeaderLink to="/">
          Home
        </HeaderLink>
        <HeaderLink to="/login">
          <SVGIcon icon="close" />
          Log in
        </HeaderLink>
        <HeaderLink to="/events">
          <SVGIcon icon="calendar" />
          Events
        </HeaderLink>
        <HeaderLink to="/dashboard">
          <SVGIcon icon="tools" />
          Dashboard
        </HeaderLink>
      </Fragment>
    )
  }

  render() {
    return (
      <header className={styles['appHeader']}>
        {this.renderLinks()}
      </header>
    )
  }
}

const mapStateToProps = state => {
  return { currentUser: state.currentUser }
}

export default connect(mapStateToProps, actions)(Header);
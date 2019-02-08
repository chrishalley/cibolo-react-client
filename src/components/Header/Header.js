import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import HeaderLink from '../common/HeaderLink/HeaderLink'

import styles from './Header.module.css';

class Header extends Component {

  renderLinks() {
    const { currentUser } = this.props
    if (currentUser) {
      return (
        <Fragment>
          <HeaderLink to="/">Home</HeaderLink>
          <button>Log out</button>
        </Fragment>
      )
    }
    
    return (
      <Fragment>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/login">Log in</HeaderLink>
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
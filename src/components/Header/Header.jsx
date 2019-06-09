import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import PublicNav from '../Navigation/PublicNav/PublicNav';
import styles from './Header.module.css';

const propTypes = {

}

const defaultProps = {

}


const PublicHeader = props => {

  const publicRoutes = [
    {
      externalTo: "http://www.dsj.org.uk",
      label: "Home"
    },
    {
      to: "/",
      label: "Events"
    },
    {
      externalTo: "http://www.dsj.org.uk/general/contacts.pdf",
      label: "Contacts"
    },
    {
      externalTo: "http://www.dsj.org.uk/children/index.html",
      label: "Children"
    },
    {
      externalTo: "http://www.dsj.org.uk/magazine/index.html",
      label: "Magazine"
    },
    {
      externalTo: "http://www.dsj.org.uk/history/index.html",
      label: "History"
    },
    {
      externalTo: "http://www.dsj.org.uk/groups/index.html",
      label: "Groups"
    },
    {
      externalTo: "http://www.dsj.org.uk/who/index.html",
      label: "Who's Who?"
    },
    {
      externalTo: "http://www.dsj.org.uk/find/index.html",
      label: "Find Us"
    },
    {
      externalTo: "http://www.dsj.org.uk/links/index.html",
      label: "Links"
    },
    {
      externalTo: "http://www.dsj.org.uk/groups/choir/index.html",
      label: "Choir"
    },
    {
      externalTo: "http://www.dsj.org.uk/rose/index.html",
      label: "Rose & Sweet Pea"
    }
  ];

  const adminRoutesLoggedIn = [
    {
      to: "/dashboard",
      label: "Dashboard"
    },
    {
      action: () => actions.logout(),
      label: "Log out"
    }
  ];

  const adminRoutesLoggedOut = [
    {
      action: () => props.history.push("/login"),
      label: "Log in"
    }
  ];

  const adminRoutes = props.currentUser ? adminRoutesLoggedIn : adminRoutesLoggedOut;

  return (
    <header className={styles['header']}>
      <PublicNav routes={publicRoutes}/>
      <PublicNav routes={adminRoutes}/>
    </header>
  );
}

const mapStateToProps = state => ({ currentUser: state.auth.user });

export default withRouter(connect(mapStateToProps, actions)(PublicHeader));

// class Header extends Component {

//   logout = () => {
//     this.props.logout()
//   }

//   renderLinks() {
//     const { currentUser } = this.props
//     if (currentUser) {
//       return (
//         <Fragment>
//           <HeaderLink to="/">
//             <button onClick={() => this.logout()}>
//               <SVGIcon icon="close" />
//               Log out
//             </button>
//           </HeaderLink>
//           <HeaderLink to="/dashboard">
//             <SVGIcon icon="tools" />
//             Dashboard
//           </HeaderLink>
//         </Fragment>
//       )
//     }
    
//     return (
//       <PublicNav />
//     //   <Fragment>
//     //     <HeaderLink to="/">
//     //       Home
//     //     </HeaderLink>
//     //     <HeaderLink to="/login">
//     //       <SVGIcon icon="close" />
//     //       Log in
//     //     </HeaderLink>
//     //     <HeaderLink to="/">
//     //       <SVGIcon icon="calendar" />
//     //       Events
//     //     </HeaderLink>
//     //     <HeaderLink to="/sandbox">
//     //       <SVGIcon icon="close" />
//     //       Sandbox
//     //     </HeaderLink>
//     //     <HeaderLink to="/dashboard">
//     //       <SVGIcon icon="tools" />
//     //       Dashboard
//     //     </HeaderLink>
//     //   </Fragment>
//     // )
//   }

//   render() {
//     return (
//       <header className={styles['appHeader']}>
//         {this.renderLinks()}
//       </header>
//     )
//   }
// }



// export default connect(mapStateToProps, actions)(Header);
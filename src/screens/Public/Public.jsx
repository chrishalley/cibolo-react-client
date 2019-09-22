import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Login from '../Login/Login';
import EventsScreen from '../Events/EventsScreen';
import SandboxScreen from '../Sandbox/SandboxScreen';
import NoMatch from '../NoMatch/NoMatch';
import NewMenu from '../../components/Navigation/NewMenu/NewMenu';

const Public = ({
  location
}) => (
  <>
    {/* <Header location={location}/> */}
    <NewMenu location={location}/>
    <Switch>
      <Route path="/" exact component={EventsScreen}/>
      <Route path="/sandbox" component={SandboxScreen}/>
      <Route path="/login" component={Login}/>
      <Route component={NoMatch}/>
    </Switch>
    <Footer/>
  </>
);

export default Public;
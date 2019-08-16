import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import Login from '../Login/Login';
import EventsScreen from '../Events/EventsScreen';
import SandboxScreen from '../Sandbox/SandboxScreen';
import NoMatch from "../NoMatch/NoMatch";

const Public = (props) => {
  const {location} = props;
  return (
    <>
      <Header location={location}></Header>
      <Switch>
        <Route path="/" exact component={EventsScreen}></Route>
        <Route path="/sandbox" component={SandboxScreen}></Route>
        <Route path="/login" component={Login}></Route>
        <Route component={NoMatch}/>
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default Public;
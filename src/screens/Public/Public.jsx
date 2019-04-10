import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import Login from '../Login/Login';
import EventsScreen from '../Events/EventsScreen';
import SandboxScreen from '../Sandbox/SandboxScreen';

const Public = (props) => {
  return (
    <Fragment>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={EventsScreen}></Route>
        <Route path="/sandbox" exact component={SandboxScreen}></Route>
        <Route path="/login" component={Login}></Route>
        <Route render={() => `<h1>404 page not found</h1>`} />
      </Switch>
      <Footer></Footer>
    </Fragment>
  );
}

export default Public;
import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/home';
import Section from './containers/section';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/section/:id">
      <Section/>
    </Route>
  </Switch>
);

export default Routes;

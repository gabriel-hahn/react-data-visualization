import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import Settings from '../pages/Settings';
import Dashboard from '../pages/Dashboard';

const Routes = () => (
  <Switch>
    <Route exact path="/settings" component={Settings} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Redirect from="/" to="settings" />
  </Switch>
);

export default Routes;

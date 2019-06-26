import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Settings from "../pages/Settings";

const Routes = () => (
    <Switch>
      <Route exact path="/settings" component={Settings} />
      <Redirect from="/" to="settings" />
    </Switch>
  );
  
  export default Routes;

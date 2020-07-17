import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import Workspace from '../components/workspace/Workspace';

export default (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/workspace" component={Workspace} />
    <Redirect from="*" to="/" />
  </Switch>
  );

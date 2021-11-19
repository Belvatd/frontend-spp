import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PublicRoute from './router/publicRouter';
import PrivateRoute from './router/privateRouter';

import Dashboard from './container/page/Dashboard';
import Login from './container/page/Login';

import ROUTES from './config/routes';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <PrivateRoute
            restricted={true}
            path={ROUTES.DASHBOARD}
            component={Dashboard}
          />
          <PublicRoute
            exact
            restricted={true}
            path={ROUTES.LOGIN}
            component={Login}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;

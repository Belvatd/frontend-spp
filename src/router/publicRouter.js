import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const publicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem('token') && restricted) {
          return <Redirect to={'/dashboard'} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default publicRoute;

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (JSON.parse(localStorage.getItem('userLogin'))) {
          return (
            <Component {...props} history={props.history} match={props.match} />
          );
        }
        return <Redirect to={'/'} />;
      }}
    />
  );
};

export default privateRoute;

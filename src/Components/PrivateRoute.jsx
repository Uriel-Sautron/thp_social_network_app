/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import Cookies from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';

const checkAuth = () => !!Cookies.get('id_token');

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    }
  />
);

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/' }} />
      )
    }
  />
);

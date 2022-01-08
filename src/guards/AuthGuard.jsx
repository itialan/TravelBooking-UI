import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PATH } from '../constants/paths';

const AuthGuard = ({ Component, ...rest }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth) {
          return <Redirect to={PATH.SIGNIN} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default AuthGuard;

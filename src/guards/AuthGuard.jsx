import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

// libraries
import Cookies from 'js-cookie';

// constants
import { PATH } from '../constants/paths';

const AuthGuard = ({ Component, ...rest }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Route
      {...rest}
      render={(props) => {
        // Have to check Cookie stores token because
        // we want to delay the redirect func when
        // checkUserSession() run and return isAuth result.
        if (!isAuth && !Cookies.get('jwt')) {
          return <Redirect to={PATH.SIGNIN} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

export default AuthGuard;

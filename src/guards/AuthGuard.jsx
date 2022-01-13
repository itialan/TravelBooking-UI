import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// constants
import { PATH } from '../constants/paths';

// libraries
import Cookies from 'js-cookie';

const AuthGuard = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  // Have to check Cookie stores token because
  // we want to delay the redirect func when
  // checkUserSession() run and return isAuth result.
  if (!isAuth && !Cookies.get('jwt')) return <Redirect to={PATH.SIGNIN} />;

  return <>{children}</>;
};

export default AuthGuard;

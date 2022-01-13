import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// thunks
import { checkUserSession } from '../../redux/auth/auth.thunks';

const Auth = ({ children }) => {
  const dispatch = useDispatch();

  // check user logged in or not?
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return <>{children}</>;
};

export default Auth;

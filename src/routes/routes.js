import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// actions
import { checkUserSession } from '../redux/auth/auth.thunks';

// components
import HomeRoute from './HomeRoute';
import SignInRoute from './SignInRoute';
import SignUpRoute from './SignUpRoute';
import DashboardRoute from './Admin/DashboardRoute';

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <HomeRoute />
      <SignInRoute />
      <SignUpRoute />
      <DashboardRoute />
    </BrowserRouter>
  );
};

export default Routes;

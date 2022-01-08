import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import SignUp from '../pages/SignInAndSignUp/SignUp/SignUp';

// paths
import { PATH } from '../constants/paths';

const SignUpRoute = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Switch>
      <Route
        path={PATH.SIGNUP}
        render={() => (isAuth ? <Redirect to={PATH.HOME} /> : <SignUp />)}
      />
    </Switch>
  );
};

export default SignUpRoute;

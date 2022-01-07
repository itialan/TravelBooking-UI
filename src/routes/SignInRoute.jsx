import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

// components
import SignIn from '../pages/SignInAndSignUp/SignIn/SignIn';

// paths
import { PATH } from '../constants/paths';

const SignInRoute = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Switch>
      <Route
        exact
        path={PATH.SIGNIN}
        render={() => (isAuth ? <Redirect to={PATH.HOME} /> : <SignIn />)}
      />
    </Switch>
  );
};

export default SignInRoute;

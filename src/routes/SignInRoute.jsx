import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PATH } from '../constants/paths';

import SignIn from '../pages/SignInAndSignUp/SignIn/SignIn';

const SignInRoute = () => {
  return (
    <Switch>
      <Route exact path={PATH.SIGNIN} component={SignIn} />
    </Switch>
  );
};

export default SignInRoute;

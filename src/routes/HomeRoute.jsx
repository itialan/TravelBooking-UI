import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { PATH } from '../constants/paths';

import Home from '../pages/Home/Home';

const HomeRoute = () => {
  return (
    <Switch>
      <Route exact path={PATH.HOME} component={Home} />
    </Switch>
  );
};

export default HomeRoute;

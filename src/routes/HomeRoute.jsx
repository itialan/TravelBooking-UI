import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { PATH } from '../constants/paths';

import Spinner from '../components/Common/Spinner/Spinner';

const Home = lazy(() => import('../pages/Home/Home'));

const HomeRoute = () => {
  return (
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact path={PATH.HOME} component={Home} />
      </Suspense>
    </Switch>
  );
};

export default HomeRoute;

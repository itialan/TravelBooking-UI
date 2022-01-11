import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

// components
import Spinner from '../../components/Common/Spinner/Spinner';
import AuthGuard from '../../guards/AuthGuard';

// paths
import { PATH } from '../../constants/paths';

const User = lazy(() => import('../../pages/Admin/User/User'));

const UserRoute = () => {
  return (
    <Switch>
      <AuthGuard
        exact
        path={`${PATH.DASHBOARD}${PATH.USERS}`}
        Component={() => (
          <Suspense fallback={<div />}>
            <User />
          </Suspense>
        )}
      />
    </Switch>
  );
};

export default UserRoute;

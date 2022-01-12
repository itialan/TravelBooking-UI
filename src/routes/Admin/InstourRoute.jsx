import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

// components
import Spinner from '../../components/Common/Spinner/Spinner';
import AuthGuard from '../../guards/AuthGuard';

// paths
import { PATH } from '../../constants/paths';

const InstourList = lazy(() => import('../../pages/Admin/Instour/InstourList'));

function InstourRoute() {
  return (
    <Switch>
      <AuthGuard
        exact
        path={`${PATH.DASHBOARD}${PATH.INSTOUR_LIST}`}
        Component={() => (
          <Suspense fallback={<div />}>
            <InstourList />
          </Suspense>
        )}
      />
    </Switch>
  );
}

export default InstourRoute;

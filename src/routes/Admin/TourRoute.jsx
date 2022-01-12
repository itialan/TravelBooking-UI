import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

// components
import Spinner from '../../components/Common/Spinner/Spinner';
import AuthGuard from '../../guards/AuthGuard';

// paths
import { PATH } from '../../constants/paths';

const TourList = lazy(() => import('../../pages/Admin/Tour/TourList'));
const TourAdd = lazy(() => import('../../pages/Admin/Tour/TourAdd'));

function TourRoute() {
  return (
    <Switch>
      <AuthGuard
        exact
        path={`${PATH.DASHBOARD}${PATH.TOUR_LIST}`}
        Component={() => (
          <Suspense fallback={<div />}>
            <TourList />
          </Suspense>
        )}
      />
      <AuthGuard
        exact
        path={`${PATH.DASHBOARD}${PATH.TOUR_ADD}`}
        Component={() => (
          <Suspense fallback={<div />}>
            <TourAdd />
          </Suspense>
        )}
      />
    </Switch>
  );
}

export default TourRoute;

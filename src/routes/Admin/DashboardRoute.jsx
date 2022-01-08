import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';

// components
import Spinner from '../../components/Common/Spinner/Spinner';
import AuthGuard from '../../guards/AuthGuard';

// paths
import { PATH } from '../../constants/paths';

const Dashboard = lazy(() => import('../../pages/Admin/Dashboard/Dashboard'));

const DashboardRoute = () => {
  return (
    <Switch>
      <AuthGuard
        exact
        path={PATH.DASHBOARD}
        Component={() => (
          <Suspense fallback={<Spinner />}>
            <Dashboard />
          </Suspense>
        )}
      />
    </Switch>
  );
};

export default DashboardRoute;

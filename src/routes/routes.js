import React, { Fragment, lazy, Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';

// constants
import { PATH } from '../constants/paths';
import { ROLE } from '../constants/roles';

// layouts
import AdminLayout from '../layouts/Admin/MainLayout/AdminLayout';

// guards
import AuthGuard from '../guards/AuthGuard';
import { Route } from 'react-router-dom';
import RoleRoute from './RoleRoute';

// modules
const Home = lazy(() => import('../pages/Home/Home'));
const SignIn = lazy(() => import('../pages/SignInAndSignUp/SignIn/SignIn'));
const SignUp = lazy(() => import('../pages/SignInAndSignUp/SignUp/SignUp'));
const Dashboard = lazy(() => import('../pages/Admin/Dashboard/Dashboard'));
const TourList = lazy(() => import('../pages/Admin/Tour/TourList/TourList'));
const TourAdd = lazy(() => import('../pages/Admin/Tour/TourAdd/TourAdd'));
const InstourList = lazy(() => import('../pages/Admin/Instour/InstourList'));
const User = lazy(() => import('../pages/Admin/User/User'));

const routesConfig = [
  {
    exact: true,
    path: PATH.HOME,
    component: Home,
  },
  {
    exact: true,
    path: '/admin',
    component: () => <Redirect to={PATH.ADMIN + PATH.DASHBOARD} />,
  },
  {
    exact: true,
    guard: AuthGuard,
    path: PATH.SIGNIN,
    component: SignIn,
  },
  {
    exact: true,
    guard: AuthGuard,
    path: PATH.SIGNUP,
    component: SignUp,
  },
  {
    path: '/admin',
    guard: AuthGuard,
    layout: AdminLayout,
    routes: [
      {
        exact: true,
        path: PATH.ADMIN + PATH.DASHBOARD,
        component: Dashboard,
        requireRoles: [ROLE.ADMIN, ROLE.GUIDE],
      },
      {
        exact: true,
        path: [
          `${PATH.ADMIN}${PATH.TOUR_ADD}`,
          `${PATH.ADMIN}${PATH.TOUR_ADD}/:id`,
        ],
        component: TourAdd,
        requireRoles: [ROLE.ADMIN],
      },
      {
        exact: true,
        path: PATH.ADMIN + PATH.TOUR_LIST,
        component: TourList,
        requireRoles: [ROLE.ADMIN, ROLE.GUIDE],
      },
      {
        exact: true,
        path: PATH.ADMIN + PATH.INSTOUR_LIST,
        component: InstourList,
        requireRoles: [ROLE.ADMIN, ROLE.GUIDE],
      },
      {
        exact: true,
        path: PATH.ADMIN + PATH.USERS,
        component: User,
        requireRoles: [ROLE.ADMIN, ROLE.GUIDE],
      },
    ],
  },
];

const renderRoutes = (routes) => {
  return (
    <>
      {routes ? (
        <Suspense fallback={<div />}>
          <Switch>
            {routes.map((route, idx) => {
              const Guard = route.Guard || Fragment;
              const Layout = route.layout || Fragment;
              const Component = route.component;
              const requireRoles = route.requireRoles || [];

              return (
                <Route
                  key={`routes-${idx}`}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => (
                    <Guard>
                      <Layout>
                        {route.routes ? (
                          renderRoutes(route.routes)
                        ) : (
                          <RoleRoute requireRoles={requireRoles}>
                            <Component {...props} />
                          </RoleRoute>
                        )}
                      </Layout>
                    </Guard>
                  )}
                />
              );
            })}
          </Switch>
        </Suspense>
      ) : null}
    </>
  );
};

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;

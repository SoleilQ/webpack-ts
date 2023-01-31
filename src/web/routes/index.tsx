import PageNotFoundView from '@layouts/PageNotFoundView';
import React, { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import Loading from '@components/Loading';
import MainView from '@pages/MainView';
import BasicLayout from '@layouts/BasicLayout';
import Login from '@pages/Login';

const Layout = () => (
  <Suspense fallback={<Loading />}>
    <BasicLayout />
  </Suspense>
);

const Jotai = lazy(() => import('@pages/Jotai'));

const Routes: RouteObject[] = [];

const loginRoute = {
  path: '/login',
  element: <Login />,
};

const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    { path: '*', element: <Navigate to="/404" /> },
    { path: '/', element: <MainView /> },
    { path: '/jotai', element: <Jotai /> },
    { path: '404', element: <PageNotFoundView /> },
  ],
};

Routes.push(loginRoute, mainRoutes);
export default Routes;

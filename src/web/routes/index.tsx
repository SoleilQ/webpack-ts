import PageNotFoundView from '@layouts/PageNotFoundView';
import React, { lazy, Suspense } from 'react';
import { Navigate, RouteObject } from 'react-router-dom';
import MainLayout from '@pages/MainLayout';
// import DemoLayout from '@pages/DemoLayout';
import Loading from '@components/Loading';
import MainView from '@pages/MainView';

const Layout = () => (
  <Suspense fallback={<Loading />}>
    <MainLayout />
  </Suspense>
);

const Routes: RouteObject[] = [];
const mainRoutes = {
  path: '/',
  element: <Layout />,
  children: [
    { path: '*', element: <Navigate to="/404" /> },
    { path: '/', element: <MainView /> },
    { path: '404', element: <PageNotFoundView /> },
  ],
};

const demoRoutes = {
  path: 'demo',
  // element: (
  //   <Suspense fallback={<Loading />}>
  //     <DemoLayout />
  //   </Suspense>
  // ),
  element: <Layout />,
  children: [{ path: '*', element: <Navigate to="/404" /> }],
};
Routes.push(mainRoutes, demoRoutes);
export default Routes;

import React, { Suspense } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

export type RouteDefinition = Omit<RouteObject, 'children'> & {
  path: string;
};
const Bride = React.lazy(() => import('@/pages/Bride'));
const Groom = React.lazy(() => import('@/pages/Groom'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));

const routeList: RouteDefinition[] = [
  {
    path: '/bride',
    element: (
      <Suspense>
        <Bride />
      </Suspense>
    ),
  },
  {
    path: '/groom',
    element: (
      <Suspense>
        <Groom />
      </Suspense>
    ),
  },
  {
    path: '/*',
    element: <NotFound />,
  },
];

const AppRoute: React.FC = () => {
  const elements = useRoutes(routeList);
  return <>{elements}</>;
};

export default AppRoute;

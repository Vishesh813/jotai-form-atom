import { createBrowserRouter, RouteObject } from 'react-router-dom';
import HomePage from '../lib/HomePage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'home-page',
        element: <HomePage />,
      },
    ],
  },
];

const appRoutes = createBrowserRouter(routes);

export default appRoutes;

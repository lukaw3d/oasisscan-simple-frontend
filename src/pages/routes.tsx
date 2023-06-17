import { RouteObject } from 'react-router-dom';
import { Home } from './Home.tsx'
import { routes as emeraldRoutes } from './emerald/routes.tsx'
import { Converter } from './Converter.tsx';

export const routes: RouteObject[] = [
  { path: '', element: <Home /> },
  { path: 'converter', element: <Converter /> },
  {
    path: 'emerald',
    children: emeraldRoutes
  },
]

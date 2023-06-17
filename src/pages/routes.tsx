import { RouteObject } from 'react-router-dom';
import { Home } from './Home.tsx'
import { routes as emeraldRoutes } from './emerald/routes.tsx'

export const routes: RouteObject[] = [
  { path: '', element: <Home /> },
  {
    path: 'emerald',
    children: emeraldRoutes
  },
]

import { RouteObject } from 'react-router-dom';
import { Home } from './Home.tsx'
import { routes as emeraldRoutes } from './emerald/routes.tsx'
import { routes as sapphireRoutes } from './sapphire/routes.tsx'
import { routes as consensusRoutes } from './consensus/routes.tsx'

export const routes: RouteObject[] = [
  { path: '', element: <Home /> },
  { path: 'emerald', children: emeraldRoutes },
  { path: 'sapphire', children: sapphireRoutes },
  { path: 'consensus', children: consensusRoutes },
]

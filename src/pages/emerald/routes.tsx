import { RouteObject } from 'react-router-dom'
import { Blocks } from './Blocks.tsx'
import { Transactions } from './Transactions.tsx'
import { Events } from './Events.tsx'

export const routes: RouteObject[] = [
  { path: 'blocks', element: <Blocks /> },
  { path: 'transactions', element: <Transactions /> },
  { path: 'events', element: <Events /> },
]

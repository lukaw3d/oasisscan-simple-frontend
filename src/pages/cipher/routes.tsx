import { RouteObject } from 'react-router-dom'
import { Blocks } from '../emerald/Blocks.tsx'
import { Transactions } from '../emerald/Transactions.tsx'
import { TransactionsHash } from '../emerald/TransactionsHash.tsx'

export const routes: RouteObject[] = [
  { path: 'blocks', element: <Blocks paratime='cipher' /> },
  { path: 'transactions', element: <Transactions paratime='cipher' /> },
  { path: 'transactions/:txHash', element: <TransactionsHash paratime='cipher' /> },
]

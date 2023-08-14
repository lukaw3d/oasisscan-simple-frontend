import { RouteObject } from 'react-router-dom'
import { Blocks } from './Blocks.tsx'
import { Transactions } from './Transactions.tsx'
import { Events } from './Events.tsx'
import { TransactionsHash } from './TransactionsHash.tsx'
import { AccountsAddress } from './AccountsAddress.tsx'
import { AccountsAddressDelegations } from './AccountsAddressDelegations.tsx'
import { AccountsAddressDebondingDelegations } from './AccountsAddressDebondingDelegations.tsx'
import { Entities } from './Entities.tsx'
import { Validators } from './Validators.tsx'
import { Epochs } from './Epochs.tsx'
import { Proposals } from './Proposals.tsx'

export const routes: RouteObject[] = [
  { path: 'blocks', element: <Blocks /> },
  { path: 'transactions', element: <Transactions /> },
  { path: 'transactions/:txHash', element: <TransactionsHash /> },
  { path: 'events', element: <Events /> },
  { path: 'accounts/:address', element: <AccountsAddress /> },
  { path: 'accounts-delegations/:address', element: <AccountsAddressDelegations /> },
  { path: 'accounts-debonding-delegations/:address', element: <AccountsAddressDebondingDelegations /> },
  { path: 'entities', element: <Entities /> },
  { path: 'validators', element: <Validators /> },
  { path: 'epochs', element: <Epochs /> },
  { path: 'proposals', element: <Proposals /> },
]

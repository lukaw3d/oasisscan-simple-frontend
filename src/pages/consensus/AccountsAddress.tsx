import { Link, useParams, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusAccountsAddress, Account } from '../../oasisscan/generated/api'
import BigNumber from 'bignumber.js'

export function AccountsAddress() {
  const address = useParams().address!
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Accounts</h2>
      <CustomDisplayProvider<Account> value={{
        fieldPriority: {
        },
        fieldDisplay: {
          'address': ({ value }) => {
            return <span>
              <Link to={`/consensus/accounts/${value}`}>{value}</Link>
              ,&nbsp;
              <Link to={`/consensus/transactions?offset=0&limit=100&rel=${value}`}>transactions</Link>
              ,&nbsp;
              <Link to={`/consensus/events?offset=0&limit=100&rel=${value}`}>events</Link>
            </span>
          },
          'available': ({ value }) => {
            return <span>{new BigNumber(value).shiftedBy(-9).toFixed()}</span>
          },
          'debonding': ({ value }) => {
            return <span>{new BigNumber(value).shiftedBy(-9).toFixed()}</span>
          },
          'debonding_delegations_balance': ({ value }) => {
            if (value == null) return null
            return <span>{new BigNumber(value).shiftedBy(-9).toFixed()}</span>
          },
          'delegations_balance': ({ value }) => {
            if (value == null) return null
            return <span>{new BigNumber(value).shiftedBy(-9).toFixed()}</span>
          },
          'escrow': ({ value }) => {
            return <span>{new BigNumber(value).shiftedBy(-9).toFixed()}</span>
          },
        },
      }}>
        <DisplayData result={useGetConsensusAccountsAddress(address, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

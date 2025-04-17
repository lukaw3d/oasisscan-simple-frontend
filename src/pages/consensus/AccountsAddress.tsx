import { Link, useParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useAccountInfoUsingGET } from '../../oasisscan/generated/api'

export function AccountsAddress() {
  const address = useParams().address!
  return (
    <>
      <h2>Accounts</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {
          'address': ({ value }) => {
            return <span>
              <Link to={`/consensus/accounts/${value}`}>{value}</Link>
              ,&nbsp;
              <Link to={`/consensus/transactions?size=100&page=1&address=${value}`}>transactions</Link>
              ,&nbsp;
              <Link to={`/consensus/events?size=100&page=1&address=${value}`}>events</Link>
            </span>
          },
          'escrow': ({ value, parentValue }) => {
            return <span>
              {value}
              ,&nbsp;
              <Link to={`/consensus/accounts-delegations/${parentValue.address}`}>delegations</Link>
            </span>
          },
          'debonding': ({ value, parentValue }) => {
            return <span>
              {value}
              ,&nbsp;
              <Link to={`/consensus/accounts-debonding-delegations/${parentValue.address}`}>debonding delegations</Link>
            </span>
          },
        },
      }}>
        <DisplayData result={useAccountInfoUsingGET(address)}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

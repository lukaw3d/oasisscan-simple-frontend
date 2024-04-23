import { Link, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useLatestTransactionsUsingGET, useTransactionMethodUsingGET } from '../../oasisscan/generated/api'

export function Transactions() {
  const searchParams = Object.fromEntries(useSearchParams()[0])

  return (
    <>
      <h2>Transactions</h2>
      <ul>
        {useTransactionMethodUsingGET().data?.data.data?.list.sort().map((value: string) =>
          <li key={value}>
            <Link to={`/consensus/transactions?size=100&page=1&method=${value}`}>{value}</Link>
            &nbsp;
          </li>
        )}
      </ul>

      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {
          'data.list.0.txHash': ({ value }) => {
            return <Link to={`/consensus/transactions/${value}`}>{value}</Link>
          },
          'data.list.0.status': ({ value }) => {
            return <span style={!value ? {color: 'red'} : {}}>{value.toString()}</span>
          },
          'data.list.0.timestamp': ({ value }) => {
            return <span>{new Date(value * 1000).toISOString()}</span>
          },
          'data.list.0.method': ({ value }) => {
            return <Link to={`/consensus/transactions?size=100&page=1&method=${value}`}>{value}</Link>
          },
          'data.list.0.from': ({ value }) => {
            return <Link to={`/consensus/accounts/${value}`}>{value}</Link>
          },
          'data.list.0.to': ({ value }) => {
            return <Link to={`/consensus/accounts/${value}`}>{value}</Link>
          },
        },
      }}>
        <DisplayData result={useLatestTransactionsUsingGET({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

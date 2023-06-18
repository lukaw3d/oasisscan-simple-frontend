import { Link, useParams, useSearchParams } from 'react-router-dom'
import { CustomDisplayContext, DisplayData } from '../../DisplayData'
import { useGetRuntimeTransactionsTxHash } from '../../oasis-indexer/generated/api'
import BigNumber from 'bignumber.js'

export function TransactionsHash() {
  const txHash = useParams().txHash!
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Transactions</h2>
      <CustomDisplayContext.Provider value={{
        fieldPriority: {
          'transactions[*].round': -4,
          'transactions[*].success': -3,
          'transactions[*].method': -2,
          'transactions[*].amount': -1,
          'transactions[*].body': 100,
        },
        fieldDisplay: {
          'transactions[*].round': ({ value }) => {
            return <Link to={`/emerald/blocks?limit=1&to=${value}`}>{value}</Link>
          },
          'transactions[*].amount': ({ value }) => {
            return <span>{new BigNumber(value).shiftedBy(-18).toFixed()}</span>
          },
          'transactions[*].charged_fee': ({ value }) => {
            return <span>{new BigNumber(value).shiftedBy(-18).toFixed()}</span>
          },
          'transactions[*].fee': ({ value }) => {
            return <span>{new BigNumber(value).shiftedBy(-18).toFixed()}</span>
          },
          'transactions[*].hash': ({ value }) => {
            return <span>
              <Link to={`/emerald/transactions/${value}`}>{value}</Link>
              &nbsp;
              <Link to={`/emerald/events?offset=0&limit=100&tx_hash=${value}`}>events</Link>
            </span>
          },
          'transactions[*].eth_hash': ({ value }) => {
            return <span>0x{value}</span>
          },
          'transactions[*].sender_0': ({ value }) => {
            return <Link to={`/emerald/accounts/${value}`}>{value}</Link>
          },
          'transactions[*].to': ({ value }) => {
            return <Link to={`/emerald/accounts/${value}`}>{value}</Link>
          },
        },
      }}>
        <DisplayData result={useGetRuntimeTransactionsTxHash('emerald', txHash, { ...searchParams })}></DisplayData>
      </CustomDisplayContext.Provider>
    </>
  )
}
import { useSearchParams } from 'react-router-dom'
import { DisplayData } from '../../DisplayData'
import { useGetRuntimeTransactions } from '../../oasis-indexer/generated/api'

export function Transactions() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Transactions</h2>
      <DisplayData result={useGetRuntimeTransactions('emerald', { ...searchParams })}></DisplayData>
    </>
  )
}

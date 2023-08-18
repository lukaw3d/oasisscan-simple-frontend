import { useParams, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusTransactionsTxHash } from '../../oasisscan/generated/api'

export function TransactionsHash() {
  const txHash = useParams().txHash!
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Transactions</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetConsensusTransactionsTxHash(txHash, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

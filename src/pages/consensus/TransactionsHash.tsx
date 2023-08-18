import { useParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useTransactionDetailUsingGET } from '../../oasisscan/generated/api'

export function TransactionsHash() {
  const txHash = useParams().txHash!
  return (
    <>
      <h2>Transactions</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useTransactionDetailUsingGET(txHash)}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

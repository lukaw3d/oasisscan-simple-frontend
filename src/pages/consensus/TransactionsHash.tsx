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
        fieldDisplay: {
          'data.status': ({ value }) => {
            return <span style={!value ? {color: 'red'} : {}}>{value.toString()}</span>
          },
        },
      }}>
        <DisplayData result={useTransactionDetailUsingGET(txHash)}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

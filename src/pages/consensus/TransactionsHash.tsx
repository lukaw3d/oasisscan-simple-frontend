import { Link, useParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData, RecursiveValue } from '../../DisplayData'
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
          'data.raw': ({ value }) => {
            return <RecursiveValue value={JSON.parse(value)} path='' parentValue={{}} />
          },
          'data.from': ({ value }) => {
            return <Link to={`/consensus/accounts/${value}`}>{value}</Link>
          },
          'data.to': ({ value }) => {
            return <Link to={`/consensus/accounts/${value}`}>{value}</Link>
          },
        },
      }}>
        <DisplayData result={useTransactionDetailUsingGET(txHash)}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

import { useParams, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useRuntimeTransactionDetailUsingGET } from '../../oasisscan/generated/api'
import { ParaTime, paraTimesConfig, selectedNetwork } from '../../config'

export function TransactionsHash({ paratime = 'emerald' as ParaTime }) {
  const hash = useParams().txHash!
  const searchParams = Object.fromEntries(useSearchParams()[0])
  const id = paraTimesConfig[paratime][selectedNetwork].runtimeId
  return (
    <>
      <h2>Transactions</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {
          'data.result': ({ value }) => {
            return <span style={!value ? {color: 'red'} : {}}>{value.toString()}</span>
          },
        },
      }}>
        <DisplayData result={useRuntimeTransactionDetailUsingGET({ ...searchParams, hash, id })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useRuntimeLatestTransactionsUsingGET } from '../../oasisscan/generated/api'
import { ParaTime, paraTimesConfig, selectedNetwork } from '../../config'

export function Transactions({ paratime = 'emerald' as ParaTime }) {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  const id = paraTimesConfig[paratime][selectedNetwork].runtimeId

  return (
    <>
      <h2>Transactions</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useRuntimeLatestTransactionsUsingGET({ ...searchParams, id })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

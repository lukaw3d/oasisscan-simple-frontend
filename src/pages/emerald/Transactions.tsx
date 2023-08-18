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
        fieldDisplay: {
          'data.list.0.result': ({ value }) => {
            return <span style={!value ? {color: 'red'} : {}}>{value.toString()}</span>
          },
        },
      }}>
        <DisplayData result={useRuntimeLatestTransactionsUsingGET({ ...searchParams, id })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetRuntimeTransactions, Runtime } from '../../oasisscan/generated/api'

export function Transactions({ paratime = 'emerald' as Runtime }) {
  const searchParams = Object.fromEntries(useSearchParams()[0])

  return (
    <>
      <h2>Transactions</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetRuntimeTransactions(paratime, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

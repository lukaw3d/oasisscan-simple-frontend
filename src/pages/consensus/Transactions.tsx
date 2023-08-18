import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusTransactions } from '../../oasisscan/generated/api'

export function Transactions() {
  const searchParams = Object.fromEntries(useSearchParams()[0])

  return (
    <>
      <h2>Transactions</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetConsensusTransactions({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

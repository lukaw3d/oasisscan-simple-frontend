import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { Runtime, useGetRuntimeEvmTokens } from '../../oasisscan/generated/api'

export function Tokens({ paratime = 'emerald' as Runtime }) {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Events</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetRuntimeEvmTokens(paratime, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetRuntimeEvents, Runtime } from '../../oasisscan/generated/api'

export function Events({ paratime = 'emerald' as Runtime }) {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Events</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetRuntimeEvents(paratime, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

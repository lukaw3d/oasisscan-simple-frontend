import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useStakingEventsUsingGET } from '../../oasisscan/generated/api'

export function Events() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Events</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useStakingEventsUsingGET({ address: '', ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

import { Link, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useStakingEventsUsingGET } from '../../oasisscan/generated/api'

export function Events() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Events</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {
          'data.list.0.id': ({ value }) => {
            return <Link to={`/consensus/events/${value}`}>{value}</Link>
          },
          'data.list.0.tx_hash': ({ value }) => {
            return <Link to={`/consensus/transactions/${value}`}>{value}</Link>
          },
        },
      }}>
        <DisplayData result={useStakingEventsUsingGET({ address: '', ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

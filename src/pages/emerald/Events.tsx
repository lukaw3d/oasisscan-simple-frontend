import { Link, useSearchParams } from 'react-router-dom'
import { CustomDisplayContext, DisplayData } from '../../DisplayData'
import { useGetRuntimeEvents, Runtime } from '../../oasis-indexer/generated/api'

export function Events({ paratime = 'emerald' as Runtime }) {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Events</h2>
      <CustomDisplayContext.Provider value={{
        fieldPriority: {
          'events[*].round': -4,
          'events[*].type': -3,
          'events[*].evm_log_name': -2,
          'events[*].evm_log_params': -1,
          'events[*].body': 100,
        },
        fieldDisplay: {
          'events[*].round': ({ value }) => {
            return <Link to={`/${paratime}/blocks?limit=1&to=${value}`}>{value}</Link>
          },
          'events[*].type': ({ value }) => {
            return <Link to={`/${paratime}/events/?limit=100&offset=0&type=${value}`}>{value}</Link>
          },
          'events[*].tx_hash': ({ value }) => {
            return <Link to={`/${paratime}/transactions/${value}`}>{value}</Link>
          },
        },
      }}>
        <DisplayData result={useGetRuntimeEvents(paratime, { ...searchParams })}></DisplayData>
      </CustomDisplayContext.Provider>
    </>
  )
}

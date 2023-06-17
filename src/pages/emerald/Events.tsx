import { Link, useSearchParams } from 'react-router-dom'
import { CustomDisplayContext, DisplayData } from '../../DisplayData'
import { useGetRuntimeEvents } from '../../oasis-indexer/generated/api'

export function Events() {
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
            return <Link to={`/emerald/blocks?limit=1&to=${value}`}>{value}</Link>
          },
          'events[*].type': ({ value }) => {
            return <Link to={`/emerald/events/?limit=100&offset=0&type=${value}`}>{value}</Link>
          },
          'events[*].tx_hash': ({ value }) => {
            return <Link to={`/emerald/transactions/${value}`}>{value}</Link>
          },
        },
      }}>
        <DisplayData result={useGetRuntimeEvents('emerald', { ...searchParams })}></DisplayData>
      </CustomDisplayContext.Provider>
    </>
  )
}

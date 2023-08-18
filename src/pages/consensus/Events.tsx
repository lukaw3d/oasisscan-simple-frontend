import { Link, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusEvents, ConsensusEventList } from '../../oasisscan/generated/api'

export function Events() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Events</h2>
      <CustomDisplayProvider<ConsensusEventList> value={{
        fieldPriority: {
          'events.0.block': -4,
          'events.0.type': -3,
          'events.0.body': 100,
        },
        fieldDisplay: {
          'events.0.block': ({ value }) => {
            return <Link to={`/consensus/blocks?limit=1&to=${value}`}>{value}</Link>
          },
          'events.0.type': ({ value }) => {
            return <Link to={`/consensus/events/?limit=100&offset=0&type=${value}`}>{value}</Link>
          },
          'events.0.tx_hash': ({ value }) => {
            return <Link to={`/consensus/transactions/${value}`}>{value}</Link>
          },
        },
      }}>
        <DisplayData result={useGetConsensusEvents({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

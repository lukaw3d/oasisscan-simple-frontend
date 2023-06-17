import { useSearchParams } from 'react-router-dom'
import { DisplayData } from '../../DisplayData'
import { useGetRuntimeEvents } from '../../oasis-indexer/generated/api'

export function Events() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Events</h2>
      <DisplayData result={useGetRuntimeEvents('emerald', { ...searchParams })}></DisplayData>
    </>
  )
}

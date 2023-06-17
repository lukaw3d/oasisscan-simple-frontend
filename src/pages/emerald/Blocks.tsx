import { useSearchParams } from 'react-router-dom'
import { DisplayData } from '../../DisplayData'
import { useGetRuntimeBlocks } from '../../oasis-indexer/generated/api'

export function Blocks() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Blocks</h2>
      <DisplayData result={useGetRuntimeBlocks('emerald', { ...searchParams })}></DisplayData>
    </>
  )
}

import { Link, useSearchParams } from 'react-router-dom'
import { CustomDisplayContext, DisplayData } from '../../DisplayData'
import { useGetRuntimeBlocks } from '../../oasis-indexer/generated/api'

export function Blocks() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Blocks</h2>
      <CustomDisplayContext.Provider value={{
        fieldPriority: {
          'blocks[*].round': -4,
        },
        fieldDisplay: {
          'blocks[*].round': ({ value }) => {
            return <span>
              <Link to={`/emerald/blocks?limit=1&to=${value}`}>{value}</Link>
              &nbsp;
              <Link to={`/emerald/events?offset=0&limit=100&block=${value}`}>events</Link>
            </span>
          },
          'blocks[*].num_transactions': ({ value, parentValue }) => {
            return <Link to={`/emerald/transactions/?offset=0&limit=100&block=${parentValue.round}`}>{value}</Link>
          },
          'blocks[*].timestamp': ({ value }) => {
            return <span>
              {value}
              &nbsp;
              <Link to={`/emerald/transactions?offset=0&limit=100&after=${value}&before=${new Date(new Date(value).getTime() + 1).toISOString()}`}>txs</Link>
            </span>
          },
        },
      }}>
        <DisplayData result={useGetRuntimeBlocks('emerald', { ...searchParams })}></DisplayData>
      </CustomDisplayContext.Provider>
    </>
  )
}

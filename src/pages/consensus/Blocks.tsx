import { Link, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusBlocks, BlockList } from '../../oasisscan/generated/api'

export function Blocks() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Blocks</h2>
      <CustomDisplayProvider<BlockList> value={{
        fieldPriority: {
          'blocks.0.height': -4,
        },
        fieldDisplay: {
          'blocks.0.height': ({ value }) => {
            return <span>
              <Link to={`/consensus/blocks?limit=1&to=${value}`}>{value}</Link>
              ,&nbsp;
              <Link to={`/consensus/events?offset=0&limit=100&block=${value}`}>events</Link>
            </span>
          },
          'blocks.0.num_transactions': ({ value, parentValue }) => {
            return <Link to={`/consensus/transactions/?offset=0&limit=100&block=${parentValue.height}`}>{value}</Link>
          },
          'blocks.0.timestamp': ({ value }) => {
            return <span>
              {value}
              &nbsp;
              <Link to={`/consensus/transactions?offset=0&limit=100&after=${value}&before=${new Date(new Date(value).getTime() + 1).toISOString()}`}>txs</Link>
            </span>
          },
        },
      }}>
        <DisplayData result={useGetConsensusBlocks({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

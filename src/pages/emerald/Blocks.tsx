import { Link, useSearchParams } from 'react-router-dom'
import { CustomDisplayContext, DisplayData } from '../../DisplayData'
import { useGetRuntimeBlocks, Runtime, RuntimeBlockList } from '../../oasis-indexer/generated/api'

export function Blocks({ paratime = 'emerald' as Runtime }) {
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
              <Link to={`/${paratime}/blocks?limit=1&to=${value}`}>{value}</Link>
              &nbsp;
              <Link to={`/${paratime}/events?offset=0&limit=100&block=${value}`}>events</Link>
            </span>
          },
          'blocks[*].num_transactions': ({ value, parentValue }: { value: number, parentValue: RuntimeBlockList['blocks'][number] }) => {
            return <Link to={`/${paratime}/transactions/?offset=0&limit=100&block=${parentValue.round}`}>{value}</Link>
          },
          'blocks[*].timestamp': ({ value }) => {
            return <span>
              {value}
              &nbsp;
              <Link to={`/${paratime}/transactions?offset=0&limit=100&after=${value}&before=${new Date(new Date(value).getTime() + 1).toISOString()}`}>txs</Link>
            </span>
          },
        },
      }}>
        <DisplayData result={useGetRuntimeBlocks(paratime, { ...searchParams })}></DisplayData>
      </CustomDisplayContext.Provider>
    </>
  )
}

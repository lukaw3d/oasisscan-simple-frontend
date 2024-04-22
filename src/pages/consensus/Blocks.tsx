import { Link, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useLatestBlocksUsingGET } from '../../oasisscan/generated/api'

export function Blocks() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Blocks</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {
          'data.list.0.timestamp': ({ value }) => {
            return <span>{new Date(value * 1000).toISOString()}</span>
          },
          'data.list.0.txs': ({ value, parentValue }) => {
            return <Link to={`/consensus/transactions?size=100&page=1&height=${parentValue.height}`}>{value}</Link>
          },
        },
      }}>
        <DisplayData result={useLatestBlocksUsingGET({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

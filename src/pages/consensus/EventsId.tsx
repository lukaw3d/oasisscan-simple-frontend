import { Link, useParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useStakingEventDetailUsingGET } from '../../oasisscan/generated/api'

export function EventsId() {
  const id = useParams().id!
  return (
    <>
      <h2>Accounts</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {
          'data.tx_hash': ({ value }) => {
            return <Link to={`/consensus/transactions/${value}`}>{value}</Link>
          },
          'data.timestamp': ({ value }) => {
            return <span>{new Date(value * 1000).toISOString()}</span>
          },
        },
      }}>
        <DisplayData result={useStakingEventDetailUsingGET({id})}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

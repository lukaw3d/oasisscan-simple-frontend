import { Link, useParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useStakingEventUsingGET } from '../../oasisscan/generated/api'

export function EventsId() {
  const id = useParams().id!
  return (
    <>
      <h2>Accounts</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {
          'txHash': ({ value }) => {
            // https://emn178.github.io/online-tools/sha512_256.html?input_type=utf-8&hmac_input_type=utf-8
            if (value === 'c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a' /* sha512_256('') */) return null
            return <Link to={`/consensus/transactions/${value}`}>{value}</Link>
          },
          'timestamp': ({ value }) => {
            return <span>{new Date(value * 1000).toISOString()}</span>
          },
        },
      }}>
        <DisplayData result={useStakingEventUsingGET({id})}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

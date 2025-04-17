import { Link, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useStakingEventsUsingGET } from '../../oasisscan/generated/api'

export function Events() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Events</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {
          'list.0.id': ({ value }) => {
            return <Link to={`/consensus/events/${value}`}>{value}</Link>
          },
          'list.0.txHash': ({ value }) => {
            // https://emn178.github.io/online-tools/sha512_256.html?input_type=utf-8&hmac_input_type=utf-8
            if (value === 'c672b8d1ef56ed28ab87c3622c5114069bdd3ad7b8f9737498d0c01ecef0967a' /* sha512_256('') */) return null
            return <Link to={`/consensus/transactions/${value}`}>{value}</Link>
          },
        },
      }}>
        <DisplayData result={useStakingEventsUsingGET({ address: '', ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

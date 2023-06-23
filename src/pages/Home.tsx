import { Link } from 'react-router-dom'
import { DisplayData } from '../DisplayData'
import { useGetRuntimeStatus, useGetStatus } from '../oasis-indexer/generated/api'

export function Home() {
  return (
    <>
      <h2>Consensus status</h2>
      <DisplayData result={useGetStatus()}></DisplayData>

      <h2>Emerald status</h2>
      <DisplayData result={useGetRuntimeStatus('emerald')}></DisplayData>
      <Link to="/emerald/blocks?limit=100&offset=0">Blocks</Link><br />
      <Link to="/emerald/transactions?limit=100&offset=0">Transactions</Link><br />
      <Link to="/emerald/events?limit=100&offset=0">Events</Link><br />
      <Link to="/emerald/accounts/oasis1qrvha284gfztn7wwq6z50c86ceu28jp7csqhpx9t">Accounts</Link><br />
      <Link to="/emerald/tokens?limit=100&offset=0">Tokens</Link><br />

      <h2>Sapphire status</h2>
      <DisplayData result={useGetRuntimeStatus('sapphire')}></DisplayData>

      <h2>Cipher status</h2>
      <DisplayData result={useGetRuntimeStatus('cipher')}></DisplayData>

      <br />
      <br />
      <br />
      <br />
      <Link to="/converter">Converter</Link>
    </>
  )
}

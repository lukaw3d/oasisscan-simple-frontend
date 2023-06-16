import { DisplayData } from './DisplayData'
import { useGetRuntimeStatus, useGetStatus } from './oasis-indexer/generated/api'

export function App() {
  return (
    <>
      <h2>Consensus status</h2>
      <DisplayData result={useGetStatus()}></DisplayData>

      <h2>Emerald status</h2>
      <DisplayData result={useGetRuntimeStatus('emerald')}></DisplayData>

      <h2>Sapphire status</h2>
      <DisplayData result={useGetRuntimeStatus('sapphire')}></DisplayData>

      <h2>Cipher status</h2>
      <DisplayData result={useGetRuntimeStatus('cipher')}></DisplayData>
    </>
  )
}

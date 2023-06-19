import { useEffect, useState } from 'react'
import { useGetRuntimeAccountsAddress } from '../oasis-indexer/generated/api'
import { getEvmBech32Address } from '../utils/getEvmBech32Address'
import { getEthAccountAddress } from '../utils/getEthAccountAddress'

export function Converter() {
  const [fromEvmAccount, setFromEvmAccount] = useState("0xba504818fdd8d3dba2ef8fd9b4f4d5c71ad1d1d3")
  const [fromEvmAccountResult, setFromEvmAccountResult] = useState("")
  useEffect(() => {
    (async () => {
      setFromEvmAccountResult(await getEvmBech32Address(fromEvmAccount))
    })()
  }, [fromEvmAccount])

  const [fromOasisAccount, setFromOasisAccount] = useState("oasis1qrvha284gfztn7wwq6z50c86ceu28jp7csqhpx9t")
  const emeraldAccount = useGetRuntimeAccountsAddress('emerald', fromOasisAccount)
  const sapphireAccount = useGetRuntimeAccountsAddress('sapphire', fromOasisAccount)
  const fromOasisAccountResult = emeraldAccount.isLoading || sapphireAccount.isLoading
    ? 'loading'
    : getEthAccountAddress(emeraldAccount.data?.data.address_preimage) ?? getEthAccountAddress(sapphireAccount.data?.data.address_preimage) ?? 'not found'

  return (
    <div>
      <section>
        <h2>Convert EVM account to oasis1 (using addressToBech32(fromData(fromHex(evmAddress))))</h2>
        <input type="text" value={fromEvmAccount} onChange={e => setFromEvmAccount(e.target.value)} size={80} />
        <br />
        Result: {fromEvmAccountResult}
      </section>
      <br />
      <br />
      <section>
        <h2>Convert oasis1 account to EVM (using https://index.oasislabs.com/v1/emerald/accounts/oasis1.. address_preimage)</h2>
        <input type="text" value={fromOasisAccount} onChange={e => setFromOasisAccount(e.target.value)} size={80} />
        <br />
        Result: {fromOasisAccountResult}
      </section>
      <br />
      <br />
    </div>
  )
}

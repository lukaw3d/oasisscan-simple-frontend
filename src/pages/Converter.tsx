import { useEffect, useState } from 'react'
import { useGetRuntimeAccountsAddress, useGetRuntimeTransactionsTxHash } from '../oasis-indexer/generated/api'
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

  const [fromOasisTx, setFromOasisTx] = useState("d642cdd262fb27b861056cb4c1913d59679297bd482a5eadebf0e1d8bf484b82")
  const emeraldOasisTx = useGetRuntimeTransactionsTxHash('emerald', fromOasisTx.replace('0x', ''))
  const sapphireOasisTx = useGetRuntimeTransactionsTxHash('sapphire', fromOasisTx.replace('0x', ''))
  const fromOasisTxResult = emeraldOasisTx.isLoading || sapphireOasisTx.isLoading
    ? 'loading'
    : '0x' + (emeraldOasisTx.data?.data.transactions[0]?.eth_hash ?? sapphireOasisTx.data?.data.transactions[0]?.eth_hash ?? 'not found')

  const [fromEvmTx, setFromEvmTx] = useState("0x11800f21f3b1ea9ea84a25a0c5c96d425187e6f581e9b7388eebcedd468dbeee")
  const emeraldEvmTx = useGetRuntimeTransactionsTxHash('emerald', fromEvmTx.replace('0x', ''))
  const sapphireEvmTx = useGetRuntimeTransactionsTxHash('sapphire', fromEvmTx.replace('0x', ''))
  const fromEvmTxResult = emeraldEvmTx.isLoading || sapphireEvmTx.isLoading
    ? 'loading'
    : emeraldEvmTx.data?.data.transactions[0]?.hash ?? sapphireEvmTx.data?.data.transactions[0]?.hash ?? 'not found'

  return (
    <div>
      <details>
        <summary>
          I understand a lot of the internals of paratimes and I will not lose tokens by sending them to converted addresses
        </summary>

        <section>
          <h2>Convert EVM account to oasis1 (using addressToBech32(fromData(fromHex(evmAddress))))</h2>
          <input type="text" value={fromEvmAccount} onChange={e => setFromEvmAccount(e.target.value)} size={80} />
          <br />
          Result: {fromEvmAccountResult} (this is not a Consensus address. Do not send tokens to this)
        </section>
        <br />
        <br />
        <section>
          <h2>Convert oasis1 account to EVM (using {import.meta.env.VITE_APP_INDEXER_API}emerald/accounts/oasis1.. address_preimage)</h2>
          <input type="text" value={fromOasisAccount} onChange={e => setFromOasisAccount(e.target.value)} size={80} />
          <br />
          Result: {fromOasisAccountResult}
        </section>
        <br />
        <br />
        <section>
          <h2>Convert EVM transaction hash to oasis (using {import.meta.env.VITE_APP_INDEXER_API}emerald/transaction/.. hash)</h2>
          <input type="text" value={fromEvmTx} onChange={e => setFromEvmTx(e.target.value)} size={80} />
          <br />
          Result: {fromEvmTxResult}
        </section>
        <br />
        <br />
        <section>
          <h2>Convert oasis transaction hash to EVM (using {import.meta.env.VITE_APP_INDEXER_API}emerald/transaction/.. eth_hash)</h2>
          <input type="text" value={fromOasisTx} onChange={e => setFromOasisTx(e.target.value)} size={80} />
          <br />
          Result: {fromOasisTxResult}
        </section>
        <br />
        <br />
      </details>
    </div>
  )
}

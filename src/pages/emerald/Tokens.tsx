import { Link, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { EvmTokenList, Runtime, useGetRuntimeEvmTokens } from '../../oasisscan/generated/api'
import BigNumber from 'bignumber.js'

export function Tokens({ paratime = 'emerald' as Runtime }) {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Events</h2>
      <CustomDisplayProvider<EvmTokenList> value={{
        fieldPriority: {
          'evm_tokens.0.type': -5,
          'evm_tokens.0.total_supply': -4,
          'evm_tokens.0.name': -3,
          'evm_tokens.0.num_holders': -2,
          'evm_tokens.0.symbol': -1,
          'evm_tokens.0.decimals': 100,
        },
        fieldDisplay: {
          'evm_tokens.0.contract_addr': ({ value }) => {
            return <Link to={`/${paratime}/accounts/${value}`}>{value}</Link>
          },
          'evm_tokens.0.total_supply': ({ value, parentValue }) => {
            if (value == null) return null
            return <span>{new BigNumber(value).shiftedBy(-(parentValue.decimals ?? 0)).toFixed()}</span>
          },
        },
      }}>
        <DisplayData result={useGetRuntimeEvmTokens(paratime, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

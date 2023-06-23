import { Link, useParams, useSearchParams } from 'react-router-dom'
import { CustomDisplayContext, DisplayData } from '../../DisplayData'
import { useGetRuntimeAccountsAddress, Runtime, RuntimeAccount } from '../../oasis-indexer/generated/api'
import BigNumber from 'bignumber.js'
import { getEthAccountAddress } from '../../utils/getEthAccountAddress'

export function AccountsAddress({ paratime = 'emerald' as Runtime }) {
  const address = useParams().address!
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Accounts</h2>
      <CustomDisplayContext.Provider value={{
        fieldPriority: {
        },
        fieldDisplay: {
          'address': ({ value, parentValue }: { value: string, parentValue: RuntimeAccount }) => {
            return <span>
              {getEthAccountAddress(parentValue.address_preimage)
                ? <>
                    {getEthAccountAddress(parentValue.address_preimage)}
                    &nbsp;(<Link to={`/${paratime}/accounts/${value}`}>{value}</Link>)
                  </>
                : <Link to={`/${paratime}/accounts/${value}`}>{value}</Link>
              }
              ,&nbsp;
              <Link to={`/${paratime}/transactions?offset=0&limit=100&rel=${value}`}>transactions</Link>
              ,&nbsp;
              <Link to={`/${paratime}/events?offset=0&limit=100&rel=${value}`}>events</Link>
            </span>
          },
          'balances[*].balance': ({ value, parentValue }: { value: string, parentValue: RuntimeAccount['balances'][number] }) => {
            return <span>{new BigNumber(value).shiftedBy(-parentValue.token_decimals).toFixed()}</span>
          },
          'evm_balances[*].balance': ({ value, parentValue }: { value: string, parentValue: RuntimeAccount['evm_balances'][number] }) => {
            return <span>{new BigNumber(value).shiftedBy(-parentValue.token_decimals).toFixed()}</span>
          },
          'evm_balances[*].token_contract_addr': ({ value }) => {
            return <Link to={`/${paratime}/accounts/${value}`}>{value}</Link>
          },
          'stats.total_received': ({ value }) => {
            return <span>{new BigNumber(value).shiftedBy(-18).toFixed()}</span>
          },
          'stats.total_sent': ({ value }) => {
            return <span>{new BigNumber(value).shiftedBy(-18).toFixed()}</span>
          },
        },
      }}>
        <DisplayData result={useGetRuntimeAccountsAddress(paratime, address, { ...searchParams })}></DisplayData>
      </CustomDisplayContext.Provider>
    </>
  )
}

import { Link, useParams, useSearchParams } from 'react-router-dom'
import { CustomDisplayContext, DisplayData } from '../../DisplayData'
import { useGetRuntimeAccountsAddress, RuntimeAccount } from '../../oasis-indexer/generated/api'
import BigNumber from 'bignumber.js'
import { getEthAccountAddress } from '../../utils/getEthAccountAddress'

export function AccountsAddress() {
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
                    &nbsp;(<Link to={`/emerald/accounts/${value}`}>{value}</Link>)
                  </>
                : <Link to={`/emerald/accounts/${value}`}>{value}</Link>
              }
              &nbsp;
              <Link to={`/emerald/transactions?offset=0&limit=100&rel=${value}`}>transactions</Link>
              &nbsp;
              <Link to={`/emerald/events?offset=0&limit=100&rel=${value}`}>events</Link>
            </span>
          },
          'balances[*].balance': ({ value, parentValue }: { value: string, parentValue: RuntimeAccount['balances'][number] }) => {
            return <span>{new BigNumber(value).shiftedBy(-parentValue.token_decimals).toFixed()}</span>
          },
          'evm_balances[*].balance': ({ value, parentValue }: { value: string, parentValue: RuntimeAccount['evm_balances'][number] }) => {
            return <span>{new BigNumber(value).shiftedBy(-parentValue.token_decimals).toFixed()}</span>
          },
          'evm_balances[*].token_contract_addr': ({ value }) => {
            return <Link to={`/emerald/accounts/${value}`}>{value}</Link>
          },
        },
      }}>
        <DisplayData result={useGetRuntimeAccountsAddress('emerald', address, { ...searchParams })}></DisplayData>
      </CustomDisplayContext.Provider>
    </>
  )
}

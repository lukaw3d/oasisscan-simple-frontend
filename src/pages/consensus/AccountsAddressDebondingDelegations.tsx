import { useParams, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusAccountsAddressDebondingDelegations, DebondingDelegationList } from '../../oasis-indexer/generated/api'

export function AccountsAddressDebondingDelegations() {
  const address = useParams().address!
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>AccountsAddressDebondingDelegations</h2>
      <CustomDisplayProvider<DebondingDelegationList> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetConsensusAccountsAddressDebondingDelegations(address, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

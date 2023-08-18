import { useParams, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusAccountsAddress } from '../../oasisscan/generated/api'

export function AccountsAddress() {
  const address = useParams().address!
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Accounts</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetConsensusAccountsAddress(address, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

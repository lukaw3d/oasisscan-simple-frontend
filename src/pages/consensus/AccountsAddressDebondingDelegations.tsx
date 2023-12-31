import { useParams, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useAccountDebondingUsingGET } from '../../oasisscan/generated/api'

export function AccountsAddressDebondingDelegations() {
  const address = useParams().address!
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>AccountsAddressDebondingDelegations</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useAccountDebondingUsingGET({ ...searchParams, address })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

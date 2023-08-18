import { useParams, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useAccountDelegationsUsingGET } from '../../oasisscan/generated/api'

export function AccountsAddressDelegations() {
  const address = useParams().address!
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>AccountsAddressDelegations</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useAccountDelegationsUsingGET({ ...searchParams, address })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

import { useParams, useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetRuntimeAccountsAddress, Runtime } from '../../oasisscan/generated/api'

export function AccountsAddress({ paratime = 'emerald' as Runtime }) {
  const address = useParams().address!
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Accounts</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetRuntimeAccountsAddress(paratime, address, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

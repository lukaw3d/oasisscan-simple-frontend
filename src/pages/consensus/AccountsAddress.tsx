import { useParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useAccountInfoUsingGET } from '../../oasisscan/generated/api'

export function AccountsAddress() {
  const address = useParams().address!
  return (
    <>
      <h2>Accounts</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useAccountInfoUsingGET(address)}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

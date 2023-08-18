import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useProposalListUsingGET } from '../../oasisscan/generated/api'

export function Proposals() {
  return (
    <>
      <h2>Proposals</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useProposalListUsingGET()}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

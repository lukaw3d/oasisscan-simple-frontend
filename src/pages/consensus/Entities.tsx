import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusEntities } from '../../oasisscan/generated/api'

export function Entities() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Entities</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetConsensusEntities({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

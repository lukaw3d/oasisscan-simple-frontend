import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusEntities, EntityList } from '../../oasis-indexer/generated/api'

export function Entities() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Entities</h2>
      <CustomDisplayProvider<EntityList> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetConsensusEntities({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

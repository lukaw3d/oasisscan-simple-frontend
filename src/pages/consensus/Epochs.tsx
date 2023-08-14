import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusEpochs, EpochList } from '../../oasis-indexer/generated/api'

export function Epochs() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Epochs</h2>
      <CustomDisplayProvider<EpochList> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetConsensusEpochs({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

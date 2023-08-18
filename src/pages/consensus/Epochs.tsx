import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusEpochs } from '../../oasisscan/generated/api'

export function Epochs() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Epochs</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetConsensusEpochs({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusBlocks } from '../../oasisscan/generated/api'

export function Blocks() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Blocks</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetConsensusBlocks({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

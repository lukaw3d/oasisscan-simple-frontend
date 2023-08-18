import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusValidators } from '../../oasisscan/generated/api'

export function Validators() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Validators</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetConsensusValidators({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

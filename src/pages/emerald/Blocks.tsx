import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetRuntimeBlocks, Runtime } from '../../oasisscan/generated/api'

export function Blocks({ paratime = 'emerald' as Runtime }) {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Blocks</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetRuntimeBlocks(paratime, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

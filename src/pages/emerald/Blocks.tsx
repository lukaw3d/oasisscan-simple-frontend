import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useRoundListUsingGET } from '../../oasisscan/generated/api'
import { ParaTime, paraTimesConfig, selectedNetwork } from '../../config'

export function Blocks({ paratime = 'emerald' as ParaTime }) {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  const id = paraTimesConfig[paratime][selectedNetwork].runtimeId
  return (
    <>
      <h2>Blocks</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useRoundListUsingGET({ ...searchParams, id })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

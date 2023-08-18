import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { Layer, useGetLayerStatsTxVolume } from '../../oasisscan/generated/api'

export function StatsTxVolume({ layer = 'emerald' as Layer }) {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>StatsTxVolume</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetLayerStatsTxVolume(layer, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

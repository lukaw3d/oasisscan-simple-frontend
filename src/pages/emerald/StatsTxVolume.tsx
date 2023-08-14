import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { TxVolumeList, Layer, useGetLayerStatsTxVolume } from '../../oasis-indexer/generated/api'

export function StatsTxVolume({ layer = 'emerald' as Layer }) {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>StatsTxVolume</h2>
      <CustomDisplayProvider<TxVolumeList> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetLayerStatsTxVolume(layer, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

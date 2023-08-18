import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { Layer, useGetLayerStatsActiveAccounts } from '../../oasisscan/generated/api'

export function StatsActiveAccounts({ layer = 'emerald' as Layer }) {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>StatsActiveAccounts</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetLayerStatsActiveAccounts(layer, { ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

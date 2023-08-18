import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useLatestTransactionsUsingGET } from '../../oasisscan/generated/api'

export function Transactions() {
  const searchParams = Object.fromEntries(useSearchParams()[0])

  return (
    <>
      <h2>Transactions</h2>
      <CustomDisplayProvider<any> value={{
        fieldPriority: {},
        fieldDisplay: {
          'data.list.0.status': ({ value }) => {
            return <span style={!value ? {color: 'red'} : {}}>{value.toString()}</span>
          },
        },
      }}>
        <DisplayData result={useLatestTransactionsUsingGET({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

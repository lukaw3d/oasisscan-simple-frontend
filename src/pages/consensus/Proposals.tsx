import { useSearchParams } from 'react-router-dom'
import { CustomDisplayProvider, DisplayData } from '../../DisplayData'
import { useGetConsensusProposals, ProposalList } from '../../oasis-indexer/generated/api'

export function Proposals() {
  const searchParams = Object.fromEntries(useSearchParams()[0])
  return (
    <>
      <h2>Proposals</h2>
      <CustomDisplayProvider<ProposalList> value={{
        fieldPriority: {},
        fieldDisplay: {},
      }}>
        <DisplayData result={useGetConsensusProposals({ ...searchParams })}></DisplayData>
      </CustomDisplayProvider>
    </>
  )
}

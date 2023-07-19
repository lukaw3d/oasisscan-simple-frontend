import { Interface } from 'ethers/abi'
import { RecursiveValue } from '../DisplayData'

export default function AbiDisplay(params: {abi: any}) {
  return <RecursiveValue value={Interface.from(params.abi).format()} path='' parentValue={{}} />
}

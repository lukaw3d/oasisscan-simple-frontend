import { AddressPreimage } from '../oasis-indexer/generated/api'
import { getAddress as getChecksumAddress } from 'ethers/address'

export function getEthAccountAddress(preimage: AddressPreimage | undefined): string | undefined {
  if (preimage?.context !== 'oasis-runtime-sdk/address: secp256k1eth' || !preimage.address_data) return undefined
  return getChecksumAddress('0x' + Buffer.from(preimage.address_data, 'base64').toString('hex'))
}

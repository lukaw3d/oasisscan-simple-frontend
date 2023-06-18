import { AddressPreimage } from '../oasis-indexer/generated/api'

export function getEthAccountAddress(preimage: AddressPreimage | undefined): string | undefined {
  if (preimage?.context !== 'oasis-runtime-sdk/address: secp256k1eth' || !preimage.address_data) return undefined
  return '0x' + Buffer.from(preimage.address_data, 'base64').toString('hex')
}

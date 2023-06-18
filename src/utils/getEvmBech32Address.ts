export async function getEvmBech32Address(evmAddress: string) {
  const oasis = await import('@oasisprotocol/client')
  const oasisRT = await import('@oasisprotocol/client-rt')
  const ethAddrU8 = oasis.misc.fromHex(evmAddress.replace('0x', ''))
  const addr = await oasis.address.fromData(
    oasisRT.address.V0_SECP256K1ETH_CONTEXT_IDENTIFIER,
    oasisRT.address.V0_SECP256K1ETH_CONTEXT_VERSION,
    ethAddrU8,
  )
  return oasis.staking.addressToBech32(addr)
}

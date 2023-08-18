const emeraldConfig = {
  mainnet: {
    address: 'oasis1qzvlg0grjxwgjj58tx2xvmv26era6t2csqn22pte',
    runtimeId: '000000000000000000000000000000000000000000000000e2eaa99fc008f87f',
  },
  testnet: {
    address: 'oasis1qr629x0tg9gm5fyhedgs9lw5eh3d8ycdnsxf0run',
    runtimeId: '00000000000000000000000000000000000000000000000072c8215e60d5bca7',
  },
}

const cipherConfig = {
  mainnet: {
    address: 'oasis1qrnu9yhwzap7rqh6tdcdcpz0zf86hwhycchkhvt8',
    runtimeId: '000000000000000000000000000000000000000000000000e199119c992377cb',
  },
  testnet: {
    address: 'oasis1qqdn25n5a2jtet2s5amc7gmchsqqgs4j0qcg5k0t',
    runtimeId: '0000000000000000000000000000000000000000000000000000000000000000',
  },
}

const sapphireConfig = {
  mainnet: {
    address: 'oasis1qrd3mnzhhgst26hsp96uf45yhq6zlax0cuzdgcfc',
    runtimeId: '000000000000000000000000000000000000000000000000f80306c9858e7279',
  },
  testnet: {
    address: 'oasis1qqczuf3x6glkgjuf0xgtcpjjw95r3crf7y2323xd',
    runtimeId: '000000000000000000000000000000000000000000000000a6d1e3ebf60dff6c',
  },
}

export const paraTimesConfig = {
  cipher: cipherConfig,
  emerald: emeraldConfig,
  sapphire: sapphireConfig,
}

export type ParaTime = keyof typeof paraTimesConfig

export const selectedNetwork = import.meta.env.VITE_APP_INDEXER_API.includes('mainnet') ? 'mainnet' : 'testnet'

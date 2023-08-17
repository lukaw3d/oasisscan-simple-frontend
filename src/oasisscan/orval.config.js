/** @type {import('@orval/core').Config} */
module.exports = {
  indexer: {
    input: {
      // target: 'https://api.oasisscan.com/mainnet/v2/api-docs',
      target: './api.json',
    },
    output: {
      target: './generated/api.ts',
      client: 'react-query',
      mode: 'single',
      override: {
        mutator: './largePages.ts',
      },
    },
  },
}

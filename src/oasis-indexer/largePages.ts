import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const largePages = async <T>(
  config: AxiosRequestConfig,
  requestOverrides?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  await new Promise(r => setTimeout(r, 1))
  if (config.signal?.aborted) throw 'Aborted by React.StrictMode'

  if (Number(config.params?.limit) > 1000) {
    const limit = Number(config.params.limit)
    config.params.limit = 1000
    config.params.offset = Number(config.params.offset ?? '0')
    const response = await axios({ ...config, ...requestOverrides })
    const aggregateField = Object.entries(response.data).find(([, v]) => (v as any[]).length === 1000)
    if (!aggregateField) return response

    for (let i = 1000; i < limit; i += 1000) {
      config.params.offset += 1000
      const add = await axios({ ...config, ...requestOverrides })
      // @ts-expect-error Unknown types
      aggregateField[1].push(...add.data[aggregateField[0]])
    }
    return response
  }
  return await axios({ ...config, ...requestOverrides })
}

export default largePages

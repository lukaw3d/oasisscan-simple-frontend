import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const largePages = async <T>(
  config: AxiosRequestConfig,
  requestOverrides?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  await new Promise(r => setTimeout(r, 1))
  if (config.signal?.aborted) throw 'Aborted by React.StrictMode'

  if (Number(config.params?.size) > 1000) {
    const size = Number(config.params.size)
    config.params.size = 1000
    config.params.page = Number(config.params.page ?? '1')
    const response = await axios({ ...config, ...requestOverrides })
    const aggregate = response.data.data.list
    if (aggregate.length !== 1000) return response

    for (let i = 1000; i < size; i += 1000) {
      config.params.size = Math.min(1000, size - i)
      config.params.page += 1
      const add = await axios({ ...config, ...requestOverrides })
      aggregate.push(...add.data.data.list)
    }
    return response
  }
  return await axios({ ...config, ...requestOverrides })
}

export default largePages

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const largePages = async <T>(
  config: AxiosRequestConfig,
  requestOverrides?: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  await new Promise(r => setTimeout(r, 1))
  if (config.signal?.aborted) throw 'Aborted by React.StrictMode'
  return await axios({ ...config, ...requestOverrides })
}

export default largePages

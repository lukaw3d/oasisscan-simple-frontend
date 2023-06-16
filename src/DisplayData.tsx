import { UseQueryResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

export function DisplayData({ result }: { result: UseQueryResult<AxiosResponse<any> | undefined> }) {
  if (result.isLoading) return <div>Loading...</div>
  if (result.error) return <div>{result.error.toString()}</div>
  return (
    <pre>{JSON.stringify(result.data?.data, null, 2)}</pre>
  )
}

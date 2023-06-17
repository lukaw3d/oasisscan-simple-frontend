import { UseQueryResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import isPlainObject from 'is-plain-obj';

export function DisplayData({ result }: { result: UseQueryResult<AxiosResponse<any> | undefined> }) {
  if (result.isLoading) return <div>Loading...</div>
  if (result.error) return <div>{result.error.toString()}</div>
  return (<div>
    <Recursive field='' value={result.data?.data} path='' />
  </div>
  )
}

export function Recursive({ field, value, path }: {
  field?: string
  value: any
  path: string
}) {
  if (!field) {
    return <RecursiveValue value={value} path={path} />
  }
  return (
    <div style={{ marginLeft: '2ex' }}>
      <strong>{field}: </strong>
      <RecursiveValue value={value} path={path} />
    </div>
  )
}

export function RecursiveValue({ value, path }: {
  value: any
  path: string
}) {
  if (value == null) {
    return (<span></span>)
  }

  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
    return (<span title={path}>{value.toString()}</span>)
  }

  if (Array.isArray(value) && value.every(a => isPlainObject(a))) {
    const fields = [...new Set(value.flatMap(a => Object.keys(a)))]
    return  (
      <div>
        <table>
          <thead>
          <tr>
            {fields.map((field) => <th key={field} title={path ? path + '[*].' + field : field}>{field}</th>)}
          </tr>
          </thead>
          <tbody>
          {value.map((value, index) => (
            <tr key={index}>
              {fields.map((field) => <td key={field + index}><RecursiveValue value={value[field]} path={path ? path + '[*].' + field : field} /></td>)}
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div>
      {
        Object.entries(value).map(([field, value], index) => (
          <Recursive
            key={index}
            field={field}
            value={value}
            path={path ? path + '.' + field : field}
          />
        ))
      }
    </div>
  )
}

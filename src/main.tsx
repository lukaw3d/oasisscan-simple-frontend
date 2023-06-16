import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import axios from 'axios'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

axios.defaults.baseURL = 'https://index.oasislabs.com/v1/'
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)

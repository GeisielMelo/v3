import '@/styles/global.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { StrictMode } from 'react'

const environment = import.meta.env.VITE_ENV

ReactDOM.createRoot(document.getElementById('root')!).render(
  environment === 'development' ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <App />
  ),
)

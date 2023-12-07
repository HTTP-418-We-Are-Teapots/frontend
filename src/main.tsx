import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <div className='content'>
      <h1>hello world</h1>
      <p>hello world</p>
    </div>
  </React.StrictMode>,
)

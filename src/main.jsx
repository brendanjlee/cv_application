import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import InfoForm from './components/InfoForm'
import EduForm from './components/EduForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoForm />
    <EduForm />
  </React.StrictMode>,
)

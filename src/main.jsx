import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import InfoForm from './components/InfoForm'
import EduForm from './components/EduForm'
import ExprienceForm from './components/ExperienceForm'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InfoForm />
    <EduForm />
    <ExprienceForm />
  </React.StrictMode>,
)

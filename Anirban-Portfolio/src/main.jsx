import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ConceptPreviewApp } from './ConceptPreviewApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConceptPreviewApp />
  </StrictMode>,
)

import { useEffect, useState } from 'react'
import App from './App.jsx'
import { ConceptSelector } from './concepts/ConceptSelector.jsx'
import { CinematicNoir } from './concepts/CinematicNoir.jsx'
import { EditorialAtelier } from './concepts/EditorialAtelier.jsx'
import { ExperimentalMotion } from './concepts/ExperimentalMotion.jsx'

function getPath() {
  return window.location.pathname.replace(/\/$/, '') || '/'
}

export function ConceptPreviewApp() {
  const [path, setPath] = useState(getPath)

  useEffect(() => {
    const onPopState = () => setPath(getPath())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const title = path === '/concepts/cinematic-noir'
      ? 'Cinematic Noir — Anirban.Creats'
      : path === '/concepts/editorial-atelier'
        ? 'Editorial Atelier — Anirban.Creats'
        : path === '/concepts/experimental-motion'
          ? 'Experimental Motion — Anirban.Creats'
          : 'Anirban.Creats — Concept Preview'

    document.title = title
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [path])

  if (path === '/portfolio') return <App />
  if (path === '/concepts/cinematic-noir') return <CinematicNoir />
  if (path === '/concepts/editorial-atelier') return <EditorialAtelier />
  if (path === '/concepts/experimental-motion') return <ExperimentalMotion />
  return <ConceptSelector />
}


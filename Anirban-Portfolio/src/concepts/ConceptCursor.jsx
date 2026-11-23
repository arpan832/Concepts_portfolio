import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import clickSound from '../assets/media/Sounds/mouseclicking.mp3'

const CLICK_COOLDOWN_MS = 300
const CLICK_VOLUME = 0.18

export function ConceptCursor({ variant }) {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current

    if (!cursor || !window.matchMedia('(pointer: fine)').matches) return undefined

    const moveX = gsap.quickTo(cursor, 'x', { duration: 0.22, ease: 'power3.out' })
    const moveY = gsap.quickTo(cursor, 'y', { duration: 0.22, ease: 'power3.out' })
    const clickAudio = new Audio(clickSound)
    let lastClickAt = -Infinity

    clickAudio.preload = 'auto'
    clickAudio.volume = CLICK_VOLUME

    const handlePointerMove = (event) => {
      cursor.classList.add('concept-cursor--visible')
      moveX(event.clientX)
      moveY(event.clientY)
    }

    const playClick = () => {
      const now = performance.now()

      if (now - lastClickAt < CLICK_COOLDOWN_MS) return

      lastClickAt = now
      clickAudio.currentTime = 0
      clickAudio.play().catch(() => {})
    }

    const handlePointerDown = (event) => {
      if (event.button === 0) playClick()
    }

    const handleContextMenu = () => playClick()

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('contextmenu', handleContextMenu)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('contextmenu', handleContextMenu)
      clickAudio.pause()
      clickAudio.src = ''
    }
  }, [])

  return (
    <div className={`concept-cursor concept-cursor--${variant}`} ref={cursorRef} aria-hidden="true">
      <span className="concept-cursor__core" />
      <span className="concept-cursor__ring" />
    </div>
  )
}


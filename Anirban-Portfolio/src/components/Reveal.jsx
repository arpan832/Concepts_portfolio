import { useEffect, useRef } from 'react'

export function Reveal({ as: Element = 'div', className = '', delay = 0, children }) {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return undefined

    if (!('IntersectionObserver' in window)) {
      element.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible')
          observer.unobserve(element)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <Element
      ref={elementRef}
      className={`reveal ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Element>
  )
}

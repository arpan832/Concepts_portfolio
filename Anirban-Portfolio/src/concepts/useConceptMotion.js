import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useConceptMotion(rootRef, variant) {
  useLayoutEffect(() => {
    const root = rootRef.current

    if (!root) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const context = gsap.context(() => {
      const heroItems = root.querySelectorAll('[data-hero-reveal]')
      const scrollItems = root.querySelectorAll('[data-scroll-reveal]')
      const mediaItems = root.querySelectorAll('[data-media-reveal]')

      if (reducedMotion) {
        gsap.set([...heroItems, ...scrollItems, ...mediaItems], { clearProps: 'all', opacity: 1, y: 0, x: 0 })
        return
      }

      gsap.fromTo(heroItems, { opacity: 0, y: 42 }, { opacity: 1, y: 0, duration: 1.1, stagger: 0.1, ease: 'power3.out' })

      scrollItems.forEach((item, index) => {
        gsap.fromTo(item, { opacity: 0, y: variant === 'motion' ? 65 : 42 }, {
          opacity: 1,
          y: 0,
          duration: 0.95,
          delay: (index % 3) * 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: item, start: 'top 86%', once: true },
        })
      })

      mediaItems.forEach((item, index) => {
        gsap.fromTo(item, { opacity: 0, scale: variant === 'motion' ? 0.92 : 0.97 }, {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          delay: index * 0.08,
          ease: 'power2.out',
          scrollTrigger: { trigger: item, start: 'top 88%', once: true },
        })
      })
    }, root)

    return () => context.revert()
  }, [rootRef, variant])
}


import { useRef } from 'react'
import { ConceptCursor } from './ConceptCursor.jsx'
import { ConceptMediaSlot } from './ConceptMediaSlot.jsx'
import { conceptContent, mediaItems, mediaSources } from './conceptContent.jsx'
import { useConceptMotion } from './useConceptMotion.js'
import './ExperimentalMotion.css'

const content = conceptContent.motion

export function ExperimentalMotion() {
  const rootRef = useRef(null)
  useConceptMotion(rootRef, 'motion')

  return (
    <div className="motion-page" ref={rootRef}>
      <ConceptCursor variant="motion" />
      <header className="motion-header"><a className="motion-wordmark" href="/">Anirban<span>.Creats</span></a><span className="motion-header__status"><i /> Online / in progress</span><nav aria-label="Experimental Motion navigation"><a href="#about">About</a><a href="#why">Why me</a><a href="#contact">Start</a><a href="/">Exit ↗</a></nav></header>

      <main>
        <section className="motion-hero" id="home" aria-labelledby="motion-title">
          <div className="motion-hero__stamp" data-hero-reveal>A—C / 001<br />Experimental motion</div><div className="motion-hero__backtype" aria-hidden="true">MOVE</div>
          <div className="motion-hero__content"><p className="motion-kicker" data-hero-reveal>{content.hero.kicker}</p><h1 id="motion-title" data-hero-reveal>{content.hero.title}</h1><p className="motion-hero__copy" data-hero-reveal>{content.hero.copy}</p></div>
          <div className="motion-hero__graphic" aria-hidden="true"><span className="motion-hero__circle" /><span className="motion-hero__bar motion-hero__bar--one" /><span className="motion-hero__bar motion-hero__bar--two" /><span className="motion-hero__crosshair" /></div>
          <div className="motion-hero__footer"><span>Scroll / let the frame move</span><span>01—04</span></div>
        </section>

        <section className="motion-about" id="about" aria-labelledby="motion-about-title">
          <div className="motion-about__label" data-scroll-reveal>{content.about.kicker}</div>
          <div className="motion-about__copy" data-scroll-reveal><h2 id="motion-about-title">{content.about.title}</h2><p>{content.about.copy}</p><a href="#why">See the signal <span>↓</span></a></div>
          <div className="motion-about__portrait" data-scroll-reveal><ConceptMediaSlot kind="portrait" src={mediaSources.portrait} mediaType="image" label="Anirban / portrait" detail="Personal image to be supplied" icon="＋" /></div>
        </section>

        <section className="motion-why" id="why" aria-labelledby="motion-why-title">
          <div className="motion-why__head" data-scroll-reveal><p className="motion-kicker">{content.why.kicker}</p><h2 id="motion-why-title">{content.why.title}</h2><p>{content.why.copy}</p></div>
          <div className="motion-media-grid">
            {mediaItems.map((item, index) => <article className="motion-media-card" data-media-reveal key={item.type}><div className="motion-media-card__top"><span>0{index + 1}</span><span>Study</span></div><ConceptMediaSlot {...item} /><div className="motion-media-card__bottom"><h3>{item.label}</h3><span>Open slot ↗</span></div></article>)}
          </div>
        </section>

        <section className="motion-contact" id="contact" aria-labelledby="motion-contact-title"><div className="motion-contact__shape" aria-hidden="true" /><p className="motion-kicker" data-scroll-reveal>04 / Make a signal</p><h2 id="motion-contact-title" data-scroll-reveal>{content.contact}</h2><div className="motion-contact__footer" data-scroll-reveal><p>Original images, visual experiments and the next direction.</p><a href="mailto:[email-to-be-supplied]">[email to be supplied] <span>↗</span></a></div></section>
      </main>

      <footer className="motion-footer"><span>© 2026 Anirban.Creats</span><span>Experimental Motion / temporary study</span><a href="#home">Top ↑</a></footer>
    </div>
  )
}


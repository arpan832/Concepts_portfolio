import { useRef } from 'react'
import { ConceptCursor } from './ConceptCursor.jsx'
import { ConceptMediaSlot } from './ConceptMediaSlot.jsx'
import { conceptContent, mediaItems, mediaSources } from './conceptContent.jsx'
import { useConceptMotion } from './useConceptMotion.js'
import './CinematicNoir.css'

const content = conceptContent.noir

export function CinematicNoir() {
  const rootRef = useRef(null)
  useConceptMotion(rootRef, 'noir')

  return (
    <div className="noir-page" ref={rootRef}>
      <ConceptCursor variant="noir" />
      <header className="noir-header">
        <a className="noir-wordmark" href="/">Anirban<span>.Creats</span></a>
        <nav className="noir-nav" aria-label="Cinematic Noir navigation"><a href="#about">About</a><a href="#why">Why me</a><a href="#contact">Contact</a></nav>
        <a className="noir-header__back" href="/">All concepts <span>↗</span></a>
      </header>

      <main>
        <section className="noir-hero" id="home" aria-labelledby="noir-title">
          <div className="noir-hero__texture" aria-hidden="true" />
          <div className="noir-hero__meta" data-hero-reveal><span>01 / 04</span><span>Photography / visual stories</span><span>Concept study</span></div>
          <div className="noir-hero__content">
            <p className="noir-kicker" data-hero-reveal>{content.hero.kicker}</p>
            <h1 id="noir-title" data-hero-reveal>{content.hero.title}</h1>
            <div className="noir-hero__aside" data-hero-reveal><p>{content.hero.copy}</p><a className="noir-link" href="#about">Meet the photographer <span>↓</span></a></div>
          </div>
          <div className="noir-hero__visual" aria-hidden="true"><div className="noir-orbit noir-orbit--outer" /><div className="noir-orbit noir-orbit--inner" /><div className="noir-hero__number">01</div><div className="noir-hero__vertical">A / C — VISUAL ARCHIVE</div></div>
          <div className="noir-hero__footer"><span>Scroll to explore</span><span>Dhaka / India / everywhere</span></div>
        </section>

        <section className="noir-about" id="about" aria-labelledby="noir-about-title">
          <div className="noir-section-label" data-scroll-reveal>{content.about.kicker}</div>
          <div className="noir-about__copy" data-scroll-reveal><h2 id="noir-about-title">{content.about.title}</h2><p>{content.about.copy}</p><a className="noir-link" href="#why">See the point of view <span>↓</span></a></div>
          <div className="noir-about__portrait" data-scroll-reveal><ConceptMediaSlot kind="portrait" src={mediaSources.portrait} mediaType="image" label="Anirban / portrait" detail="Personal image to be supplied" icon="＋" /></div>
        </section>

        <section className="noir-why" id="why" aria-labelledby="noir-why-title">
          <div className="noir-why__head" data-scroll-reveal><p className="noir-kicker">{content.why.kicker}</p><h2 id="noir-why-title">{content.why.title}</h2><p>{content.why.copy}</p></div>
          <div className="noir-media-grid">
            {mediaItems.map((item) => <article className="noir-media-card" data-media-reveal key={item.type}><ConceptMediaSlot {...item} className="noir-media-card__media" /><div className="noir-media-card__caption"><span>{item.label}</span><span>{item.detail}</span><span>View slot ↗</span></div></article>)}
          </div>
        </section>

        <section className="noir-contact" id="contact" aria-labelledby="noir-contact-title">
          <p className="noir-kicker" data-scroll-reveal>04 / Begin a story</p><h2 id="noir-contact-title" data-scroll-reveal>{content.contact}</h2>
          <div className="noir-contact__bottom" data-scroll-reveal><p>Commissions, collaborations and visual stories.</p><a className="noir-link" href="mailto:[email-to-be-supplied]">[email to be supplied] <span>↗</span></a></div>
        </section>
      </main>

      <footer className="noir-footer"><span>© 2026 Anirban.Creats</span><span>Temporary concept / no client photography included</span><a href="#home">Back to top ↑</a></footer>
    </div>
  )
}


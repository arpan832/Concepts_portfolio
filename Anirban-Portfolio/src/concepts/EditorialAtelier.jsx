import { useRef } from 'react'
import { ConceptCursor } from './ConceptCursor.jsx'
import { ConceptMediaSlot } from './ConceptMediaSlot.jsx'
import { conceptContent, mediaItems, mediaSources } from './conceptContent.jsx'
import { useConceptMotion } from './useConceptMotion.js'
import './EditorialAtelier.css'

const content = conceptContent.atelier

export function EditorialAtelier() {
  const rootRef = useRef(null)
  useConceptMotion(rootRef, 'atelier')

  return (
    <div className="atelier-page" ref={rootRef}>
      <ConceptCursor variant="atelier" />
      <header className="atelier-header"><a className="atelier-wordmark" href="/">Anirban<span>.Creats</span></a><p>Photographer / visual storyteller</p><a className="atelier-header__back" href="/">Return to concepts ↗</a></header>

      <main>
        <section className="atelier-hero" id="home" aria-labelledby="atelier-title">
          <div className="atelier-hero__masthead" data-hero-reveal><span>Vol. 01</span><span>Field notes for a visual practice</span><span>2026 — ongoing</span></div>
          <div className="atelier-hero__layout">
            <div className="atelier-hero__intro"><p className="atelier-kicker" data-hero-reveal>{content.hero.kicker}</p><h1 id="atelier-title" data-hero-reveal>{content.hero.title}</h1><p className="atelier-hero__dek" data-hero-reveal>{content.hero.copy}</p></div>
            <div className="atelier-hero__image" data-hero-reveal><ConceptMediaSlot kind="portrait" src={mediaSources.portrait} mediaType="image" label="Hero photograph" detail="Editorial image to be supplied" icon="＋" /><span className="atelier-hero__image-note">01 / Temporary image space</span></div>
            <div className="atelier-hero__aside" data-hero-reveal><span className="atelier-hero__aside-number">A—01</span><p>For portraits, places and the details that make them feel lived in.</p><a href="#about">Read the story <span>↓</span></a></div>
          </div>
          <div className="atelier-hero__bottom"><span>Scroll / archive</span><span>Original photography replaces marked spaces</span></div>
        </section>

        <section className="atelier-about" id="about" aria-labelledby="atelier-about-title">
          <div className="atelier-about__label" data-scroll-reveal>{content.about.kicker}</div>
          <div className="atelier-about__copy" data-scroll-reveal><h2 id="atelier-about-title">{content.about.title}</h2><p>{content.about.copy}</p><a className="atelier-button" href="#why">Continue to the work <span>↓</span></a></div>
          <div className="atelier-about__portrait" data-scroll-reveal><ConceptMediaSlot kind="portrait" src={mediaSources.portrait} mediaType="image" label="Anirban / portrait" detail="Personal image to be supplied" icon="＋" /></div>
        </section>

        <section className="atelier-why" id="why" aria-labelledby="atelier-why-title">
          <div className="atelier-section-head" data-scroll-reveal><p className="atelier-kicker">{content.why.kicker}</p><h2 id="atelier-why-title">{content.why.title}</h2><p>{content.why.copy}</p></div>
          <div className="atelier-media-list">
            {mediaItems.map((item, index) => <article className="atelier-media-card" data-media-reveal key={item.type}><span className="atelier-media-card__number">0{index + 1}</span><ConceptMediaSlot {...item} /><div className="atelier-media-card__copy"><p>{item.detail}</p><h3>{item.label}</h3><span>Media slot / to be supplied ↗</span></div></article>)}
          </div>
        </section>

        <section className="atelier-contact" id="contact" aria-labelledby="atelier-contact-title"><div className="atelier-contact__label" data-scroll-reveal>04 / Contact</div><div data-scroll-reveal><h2 id="atelier-contact-title">{content.contact}</h2><p>For commissions, collaborations or a considered conversation about an idea.</p><a className="atelier-button" href="mailto:[email-to-be-supplied]">[email to be supplied] <span>↗</span></a></div></section>
      </main>

      <footer className="atelier-footer"><span>© 2026 Anirban.Creats</span><span>Concept study / original photography pending</span><a href="#home">↑ Back to top</a></footer>
    </div>
  )
}


import { useEffect, useState } from 'react'
import {
  contactDetails,
  designStudies,
  navigation,
  photographyStudies,
  selectedProjects,
} from './data/content'
import { GeometricComposition } from './components/GeometricComposition'
import { ProjectVisual } from './components/ProjectVisual'
import { Reveal } from './components/Reveal'
import './App.css'

const copyrightYear = '2026'

function SectionLabel({ index, children, light = false }) {
  return (
    <p className={`section-label${light ? ' section-label--light' : ''}`}>
      <span>{index}</span>
      <span>{children}</span>
    </p>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', menuOpen)

    return () => document.body.classList.remove('menu-is-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="page-grain" aria-hidden="true" />

      <header className="site-header">
        <div className="site-header__inner layout-frame">
          <a className="wordmark" href="#top" onClick={closeMenu}>
            Anirban<span>.Creats</span>
          </a>

          <nav
            id="primary-navigation"
            className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className={`menu-toggle${menuOpen ? ' menu-toggle--open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span className="menu-toggle__label">Menu</span>
            <span className="menu-toggle__icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__meta layout-frame">
            <span>Independent creative practice</span>
            <span>Based in [location to be supplied]</span>
            <span className="hero__meta-status">
              <i aria-hidden="true" />
              Available for selected work
            </span>
          </div>

          <div className="hero__content layout-frame">
            <div className="hero__heading-block">
              <p className="eyebrow hero__eyebrow">Photography / Design / Direction</p>
              <h1 id="hero-title" className="hero__title">
                <span className="hero__title-line hero__title-line--one">Making</span>
                <span className="hero__title-line hero__title-line--two">space</span>
                <span className="hero__title-line hero__title-line--three">
                  for <em>feeling.</em>
                </span>
              </h1>
            </div>

            <div className="hero__intro">
              <span className="hero__intro-index">01 / 09</span>
              <p>
                A typography-led foundation for Anirban.Creats — an evolving visual
                practice where image, language and composition meet.
              </p>
              <a className="text-link" href="#selected-work">
                <span>Explore the work</span>
                <span aria-hidden="true">↘</span>
              </a>
            </div>
          </div>

          <GeometricComposition />

          <a className="scroll-cue" href="#selected-work">
            <span className="scroll-cue__line" aria-hidden="true" />
            <span>Scroll to explore</span>
          </a>
        </section>

        <section id="selected-work" className="section selected-work">
          <div className="layout-frame">
            <Reveal className="section-heading section-heading--work">
              <SectionLabel index="02" />
              <div>
                <h2>Selected work</h2>
                <p className="section-heading__note">
                  Temporary studies that define the shape of the portfolio while client
                  work is being gathered.
                </p>
              </div>
            </Reveal>

            <div className="project-grid">
              {selectedProjects.map((project, index) => (
                <Reveal
                  key={project.title}
                  className={`project-card project-card--${project.layout}`}
                  delay={index * 90}
                >
                  <div className="project-card__visual">
                    <ProjectVisual type={project.visual} label={project.visualLabel} />
                    <span className="project-card__status">Temporary study</span>
                  </div>
                  <div className="project-card__details">
                    <div>
                      <p className="project-card__index">{project.index}</p>
                      <h3>{project.title}</h3>
                    </div>
                    <div className="project-card__meta">
                      <span>{project.discipline}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="photography" className="section practice-section practice-section--dark">
          <div className="layout-frame">
            <Reveal className="section-heading section-heading--dark">
              <SectionLabel index="03" light />
              <div>
                <h2>Photography</h2>
                <p className="section-heading__note">
                  A quiet index for future image stories. The typographic frames below
                  are deliberately image-free until original work is supplied.
                </p>
              </div>
            </Reveal>

            <div className="study-list study-list--photography">
              {photographyStudies.map((study, index) => (
                <Reveal
                  as="article"
                  key={study.title}
                  className="study-row"
                  delay={index * 75}
                >
                  <div className="study-row__marker" aria-hidden="true">
                    <span>{study.number}</span>
                    <span className="study-row__marker-line" />
                  </div>
                  <div className="study-row__title">
                    <span className="study-row__kicker">{study.category}</span>
                    <h3>{study.title}</h3>
                  </div>
                  <div className="study-row__placeholder">
                    <span>{study.placeholder}</span>
                    <span className="study-row__arrow" aria-hidden="true">↗</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="design" className="section practice-section practice-section--design">
          <div className="layout-frame">
            <Reveal className="section-heading">
              <SectionLabel index="04" />
              <div>
                <h2>Graphic design</h2>
                <p className="section-heading__note">
                  Systems, symbols and visual experiments — ready to become case studies
                  once the original design material is available.
                </p>
              </div>
            </Reveal>

            <div className="design-grid">
              {designStudies.map((study, index) => (
                <Reveal
                  as="article"
                  key={study.title}
                  className={`design-tile design-tile--${study.tone}`}
                  delay={index * 85}
                >
                  <div className="design-tile__topline">
                    <span>{study.number}</span>
                    <span>{study.category}</span>
                  </div>
                  <div className="design-tile__composition" aria-hidden="true">
                    <span className="design-tile__shape design-tile__shape--one" />
                    <span className="design-tile__shape design-tile__shape--two" />
                    <span className="design-tile__glyph">{study.glyph}</span>
                  </div>
                  <div className="design-tile__footer">
                    <h3>{study.title}</h3>
                    <span>{study.placeholder}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="layout-frame">
            <Reveal className="section-heading">
              <SectionLabel index="05" />
              <div>
                <h2>About the practice</h2>
                <p className="section-heading__note">
                  An honest placeholder for the artist’s own voice, not a fabricated bio.
                </p>
              </div>
            </Reveal>

            <div className="about-grid">
              <Reveal className="about-statement" delay={100}>
                <p className="about-statement__lead">
                  Anirban<span>.Creats</span> is a developing creative identity built
                  around images, ideas and the space between them.
                </p>
                <p className="temporary-copy">
                  Temporary positioning copy — replace with Anirban’s biography, creative
                  philosophy, experience and location when the client materials are ready.
                </p>
              </Reveal>

              <Reveal className="about-notes" delay={180}>
                <div className="about-note">
                  <span>Approach</span>
                  <p>Observation / rhythm / restraint</p>
                </div>
                <div className="about-note">
                  <span>Practice</span>
                  <p>Photography + visual communication</p>
                </div>
                <div className="about-note">
                  <span>Information</span>
                  <p>Client details to be supplied</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="layout-frame">
            <Reveal className="section-heading section-heading--contact">
              <SectionLabel index="06" />
              <div>
                <h2>Start a conversation</h2>
                <p className="section-heading__note">
                  For commissions, collaborations or a thoughtful exchange about an idea.
                </p>
              </div>
            </Reveal>

            <Reveal className="contact-panel" delay={120}>
              <p className="contact-panel__lead">Have a feeling worth making visible?</p>
              <div className="contact-panel__details">
                <div>
                  <span className="contact-panel__label">Email</span>
                  <span className="contact-panel__placeholder">{contactDetails.email}</span>
                </div>
                <div>
                  <span className="contact-panel__label">Instagram</span>
                  <span className="contact-panel__placeholder">{contactDetails.instagram}</span>
                </div>
                <div>
                  <span className="contact-panel__label">Availability</span>
                  <span className="contact-panel__placeholder">{contactDetails.availability}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="layout-frame site-footer__inner">
          <div className="site-footer__brand">
            <a className="wordmark wordmark--footer" href="#top">
              Anirban<span>.Creats</span>
            </a>
            <p>Visual practice / temporary foundation</p>
          </div>
          <div className="site-footer__links">
            <span>© {copyrightYear} Anirban.Creats</span>
            <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
          </div>
          <div className="site-footer__detail" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

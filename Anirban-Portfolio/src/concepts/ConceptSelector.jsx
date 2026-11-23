import './ConceptSelector.css'

const concepts = [
  {
    number: '01',
    name: 'Cinematic Noir',
    descriptor: 'Atmosphere / shadow / stillness',
    detail: 'A gallery-led world with dramatic pacing and a filmic point of view.',
    path: '/concepts/cinematic-noir',
    className: 'selector-card--noir',
  },
  {
    number: '02',
    name: 'Editorial Atelier',
    descriptor: 'Material / rhythm / observation',
    detail: 'A warm, tactile editorial system for considered stories and portraits.',
    path: '/concepts/editorial-atelier',
    className: 'selector-card--atelier',
  },
  {
    number: '03',
    name: 'Experimental Motion',
    descriptor: 'Signal / energy / movement',
    detail: 'A confident digital canvas where images, type and interaction collide.',
    path: '/concepts/experimental-motion',
    className: 'selector-card--motion',
  },
]

function SelectorPreview({ type }) {
  return (
    <div className="selector-preview" aria-hidden="true">
      {type === 'noir' && (
        <>
          <span className="selector-preview__noir-orbit" />
          <span className="selector-preview__noir-type">NOIR</span>
          <span className="selector-preview__noir-line" />
          <span className="selector-preview__noir-frame" />
        </>
      )}
      {type === 'atelier' && (
        <>
          <span className="selector-preview__atelier-paper" />
          <span className="selector-preview__atelier-letter">A</span>
          <span className="selector-preview__atelier-rule" />
          <span className="selector-preview__atelier-caption">IMAGE / 001</span>
        </>
      )}
      {type === 'motion' && (
        <>
          <span className="selector-preview__motion-block selector-preview__motion-block--one" />
          <span className="selector-preview__motion-block selector-preview__motion-block--two" />
          <span className="selector-preview__motion-letter">M</span>
          <span className="selector-preview__motion-crosshair" />
        </>
      )}
      <span className="selector-preview__placeholder">Temporary visual study</span>
    </div>
  )
}

export function ConceptSelector() {
  return (
    <main className="concept-selector">
      <div className="concept-selector__topbar">
        <a className="concept-selector__wordmark" href="/">Anirban<span>.Creats</span></a>
        <span className="concept-selector__edition">Portfolio direction / 2026</span>
        <a className="concept-selector__existing" href="/portfolio">View existing build ↗</a>
      </div>

      <section className="concept-selector__intro" aria-labelledby="selector-title">
        <p className="concept-selector__eyebrow">A concept preview application</p>
        <h1 id="selector-title">Three ways<br /><em>to see</em> the work.</h1>
        <p className="concept-selector__summary">
          Choose a direction to preview the proposed visual language for Anirban.Creats.
          Each route is an independent layout system, ready for original photography.
        </p>
      </section>

      <section className="concept-selector__grid" aria-label="Website concepts">
        {concepts.map((concept, index) => (
          <a className={`selector-card ${concept.className}`} href={concept.path} key={concept.path}>
            <div className="selector-card__topline">
              <span>{concept.number}</span>
              <span>Concept</span>
            </div>
            <SelectorPreview type={['noir', 'atelier', 'motion'][index]} />
            <div className="selector-card__details">
              <div>
                <h2>{concept.name}</h2>
                <p>{concept.descriptor}</p>
              </div>
              <span className="selector-card__arrow" aria-hidden="true">↗</span>
            </div>
            <p className="selector-card__detail">{concept.detail}</p>
          </a>
        ))}
      </section>

      <footer className="concept-selector__footer">
        <span>Original client photography will replace all marked spaces.</span>
        <span>Use the routes above to compare the systems.</span>
      </footer>
    </main>
  )
}


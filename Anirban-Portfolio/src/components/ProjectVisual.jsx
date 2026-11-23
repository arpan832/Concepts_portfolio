export function ProjectVisual({ type, label }) {
  return (
    <div className={`project-visual project-visual--${type}`}>
      {type === 'signal' && (
        <>
          <span className="project-visual__orb" />
          <span className="project-visual__line project-visual__line--one" />
          <span className="project-visual__line project-visual__line--two" />
          <span className="project-visual__giant">S</span>
        </>
      )}
      {type === 'geometry' && (
        <>
          <span className="project-visual__frame" />
          <span className="project-visual__circle" />
          <span className="project-visual__giant">G</span>
          <span className="project-visual__vertical">FORM / 002</span>
        </>
      )}
      {type === 'afterimage' && (
        <>
          <span className="project-visual__sun" />
          <span className="project-visual__afterimage">A</span>
          <span className="project-visual__afterimage project-visual__afterimage--back">A</span>
          <span className="project-visual__scanline" />
        </>
      )}
      <span className="project-visual__label">{label}</span>
    </div>
  )
}

export function ConceptMediaSlot({ kind, label, detail, icon = '＋', src = '', poster = '', mediaType = 'image', rotate = false, className = '' }) {
  const hasSource = Boolean(src)
  const videoClassName = `concept-media__asset${rotate ? ' concept-media__asset--rotated' : ''}`

  return (
    <div
      className={`concept-media concept-media--${kind}${hasSource ? ' concept-media--has-source' : ''} ${className}`.trim()}
      role="img"
      aria-label={`${label}${hasSource ? '' : ': client media to be supplied'}`}
    >
      {hasSource && mediaType === 'video' && <video className={videoClassName} src={src} poster={poster} controls playsInline preload="metadata" aria-label={label} />}
      {hasSource && mediaType !== 'video' && <img className="concept-media__asset" src={src} alt={label} />}
      <span className="concept-media__badge">Client media to be supplied</span>
      <span className="concept-media__label">{label}</span>
      <span className="concept-media__detail">{detail}</span>
      {!hasSource && <span className="concept-media__icon" aria-hidden="true">{icon}</span>}
      {!hasSource && <span className="concept-media__shape" aria-hidden="true" />}
    </div>
  )
}


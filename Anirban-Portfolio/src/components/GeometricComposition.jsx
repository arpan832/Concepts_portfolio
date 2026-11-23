export function GeometricComposition() {
  return (
    <div className="geometric-composition" aria-hidden="true">
      <div className="geometric-composition__orbit" />
      <div className="geometric-composition__orbit geometric-composition__orbit--inner" />
      <div className="geometric-composition__square" />
      <div className="geometric-composition__bar geometric-composition__bar--vertical" />
      <div className="geometric-composition__bar geometric-composition__bar--horizontal" />
      <div className="geometric-composition__dot" />
      <span className="geometric-composition__label">A / C</span>
      <span className="geometric-composition__number">001</span>
    </div>
  )
}

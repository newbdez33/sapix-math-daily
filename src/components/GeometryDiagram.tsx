interface GeometryDiagramProps {
  type: 'angle-puzzle' | 'trapezoid' | '3d-composite'
  className?: string
}

export function GeometryDiagram({ type, className = '' }: GeometryDiagramProps) {
  const imageMap = {
    'angle-puzzle': '/sapix-math-daily/images/geo1-angle.jpg',
    'trapezoid': '/sapix-math-daily/images/geo2-trapezoid.jpg',
    '3d-composite': '/sapix-math-daily/images/geo3-3d.jpg',
  }

  return (
    <div className={`flex justify-center ${className}`}>
      <img
        src={imageMap[type]}
        alt={`Geometry diagram for ${type}`}
        className="max-w-full h-auto rounded-lg shadow-sm border border-gray-200"
        style={{ maxWidth: '500px', backgroundColor: 'white' }}
      />
    </div>
  )
}

const productPositions = [[6, 28], [58, 28], [110, 28]]

export default function ThumbEcommerce() {
  return (
    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="152" height="20" rx="5" fill="rgba(20,30,56,0.95)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <rect x="12" y="9" width="28" height="8" rx="3" fill="rgba(79,156,249,0.3)" />
      <circle cx="136" cy="14" r="5" fill="rgba(167,139,250,0.25)" stroke="rgba(167,139,250,0.4)" strokeWidth="1" />
      <rect x="118" y="11" width="12" height="6" rx="2" fill="rgba(255,255,255,0.07)" />
      {productPositions.map(([x, y], i) => (
        <g key={i}>
          <rect x={x} y={y} width="44" height="60" rx="6" fill="rgba(20,30,56,0.9)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <rect x={x} y={y} width="44" height="32" rx="6" fill={i === 1 ? "rgba(79,156,249,0.12)" : "rgba(167,139,250,0.08)"} />
          <rect x={x} y={y + 20} width="44" height="12" fill={i === 1 ? "rgba(79,156,249,0.12)" : "rgba(167,139,250,0.08)"} />
          <rect x={x + 6} y={y + 36} width="24" height="4" rx="2" fill="rgba(255,255,255,0.2)" />
          <rect x={x + 6} y={y + 44} width="16" height="3.5" rx="1.5" fill="rgba(74,222,128,0.5)" />
          <rect x={x + 6} y={y + 51} width="32" height="8" rx="3" fill="rgba(79,156,249,0.35)" />
        </g>
      ))}
      <circle cx="141" cy="10" r="5" fill="#4f9cf9" />
      <text x="141" y="14" textAnchor="middle" fontSize="6" fill="#080c18" fontWeight="bold">3</text>
    </svg>
  )
}

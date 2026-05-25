export default function ThumbMemory() {
  const cards = [0, 1, 2, 3, 4, 5, 6, 7]
  const flipped = new Set([2, 6])

  return (
    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="152" height="22" rx="6" fill="rgba(20,30,56,0.9)" stroke="rgba(79,156,249,0.2)" strokeWidth="1" />
      <rect x="12" y="12" width="40" height="10" rx="3" fill="rgba(79,156,249,0.25)" />
      <rect x="110" y="12" width="38" height="10" rx="3" fill="rgba(167,139,250,0.2)" />
      <text x="80" y="21" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.4)" fontFamily="monospace">
        SCORE: 4
      </text>
      {cards.map((i) => {
        const col = i % 4
        const row = Math.floor(i / 4)
        const x = 8 + col * 38
        const y = 36 + row * 38
        const isFlipped = flipped.has(i)
        return (
          <g key={i}>
            <rect
              x={x} y={y} width="30" height="30" rx="5"
              fill={isFlipped ? "rgba(79,156,249,0.25)" : "rgba(20,30,56,0.9)"}
              stroke={isFlipped ? "rgba(79,156,249,0.6)" : "rgba(255,255,255,0.1)"}
              strokeWidth="1.5"
            />
            {isFlipped && (
              <text x={x + 15} y={y + 20} textAnchor="middle" fontSize="14" fill="rgba(79,156,249,0.9)">
                ★
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

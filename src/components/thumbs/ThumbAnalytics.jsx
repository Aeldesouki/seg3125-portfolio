const kpiTiles   = [[12, 30, 38, 18], [58, 30, 38, 18], [104, 30, 38, 18]]
const bars       = [[22,84,12,20],[38,72,12,32],[54,78,12,26],[70,60,12,44],[86,68,12,36],[102,54,12,50],[118,62,12,42],[134,58,12,46]]
const linePoints = [28,44,60,76,92,108,124,140]
const lineY      = [82,70,76,58,66,52,60,56]
const kpiFills   = ["rgba(79,156,249,0.5)", "rgba(74,222,128,0.45)", "rgba(167,139,250,0.45)"]

export default function ThumbAnalytics() {
  return (
    <svg width="160" height="120" viewBox="0 0 160 120" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="152" height="112" rx="8" fill="rgba(79,156,249,0.04)" stroke="rgba(79,156,249,0.14)" strokeWidth="1.5" />
      <rect x="4" y="4" width="152" height="20" rx="8" fill="rgba(79,156,249,0.08)" />
      <rect x="4" y="16" width="152" height="8" fill="rgba(79,156,249,0.08)" />
      <rect x="12" y="8" width="36" height="8" rx="3" fill="rgba(79,156,249,0.3)" />

      {kpiTiles.map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} rx="4" fill="rgba(20,30,56,0.9)" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
          <rect x={x + 4} y={y + 4} width={16} height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
          <rect x={x + 4} y={y + 10} width={24} height="5" rx="2" fill={kpiFills[i]} />
        </g>
      ))}

      <line x1="16" y1="104" x2="148" y2="104" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="16" y1="56"  x2="16"  y2="104" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />

      {bars.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="2" fill={`rgba(79,156,249,${(0.35 + i * 0.07).toFixed(2)})`} />
      ))}

      <polyline
        points={linePoints.map((x, i) => `${x},${lineY[i]}`).join(" ")}
        fill="none"
        stroke="rgba(167,139,250,0.8)"
        strokeWidth="1.8"
      />
      {linePoints.map((x, i) => (
        <circle key={i} cx={x} cy={lineY[i]} r="2.5" fill="#a78bfa" />
      ))}
    </svg>
  )
}

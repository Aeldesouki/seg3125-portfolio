import { Link, useParams } from 'react-router-dom'

const designInfo = {
  '1': { title: 'Service Website',         type: 'Design 01' },
  '2': { title: 'Memory Game',             type: 'Design 02' },
  '3': { title: 'E-Commerce Platform',     type: 'Design 03' },
  '4': { title: 'Analytics Dashboard',     type: 'Design 04' },
}

export default function ComingSoon() {
  const { id } = useParams()
  const info = designInfo[id] || { title: 'Design', type: 'Coming Soon' }

  return (
    <div className="coming-page" style={{ background: 'var(--bg)', flexDirection: 'column' }}>

      <div
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
          background: 'rgba(79,156,249,0.1)',
          border: '1px solid rgba(79,156,249,0.28)',
          color: 'var(--accent)',
          padding: '0.28rem 0.85rem', borderRadius: '100px',
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
          marginBottom: '1.75rem',
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, display: 'inline-block' }}></span>
        {info.type} · In Progress
      </div>

      <h1
        style={{
          fontFamily: 'var(--font-display)', fontWeight: 800,
          fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
          letterSpacing: '-0.03em', lineHeight: 1,
          background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '1rem',
        }}
      >
        {info.title}
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--muted-light)',
          fontSize: '0.93rem', lineHeight: 1.85,
          maxWidth: '420px', marginBottom: '2.5rem',
        }}
      >
        This project is currently under construction as part of SEG3125 at the
        University of Ottawa. Come back soon to see the finished design.
      </p>

      <Link
        to="/"
        style={{
          background: 'var(--accent)', color: '#080c18',
          fontFamily: 'var(--font-body)',
          fontWeight: 700, fontSize: '0.875rem',
          padding: '0.65rem 1.5rem', borderRadius: '8px',
          textDecoration: 'none', display: 'inline-block',
        }}
      >
        ← Back to Portfolio
      </Link>

    </div>
  )
}

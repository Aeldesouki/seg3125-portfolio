import { Link } from "react-router-dom"
import designs from "../data/designs"

function CaseCard({ id, num, title, desc, Thumb, bg }) {
  return (
    <Link to={`/design/${id}`} className="case-card card h-100">
      <div className="case-thumb" style={{ background: bg }}>
        <Thumb />
        <div className="case-overlay">
          <span className="coming-soon-pill">Coming Soon</span>
        </div>
      </div>
      <div className="case-body">
        <p className="case-num">{num}</p>
        <p className="case-title">{title}</p>
        <p className="case-desc">{desc}</p>
      </div>
    </Link>
  )
}

export default function CaseStudies() {
  return (
    <section id="portfolio" className="section-pad">
      <div className="container">
        <h2 className="section-heading">Case Studies</h2>
        <div className="section-underline"></div>

        <p className="body-text mb-5" style={{ maxWidth: "520px" }}>
          Four design projects built across the semester, each targeting a different
          user need and design.
        </p>

        <div className="row g-4">
          {designs.map((design) => (
            <div key={design.id} className="col-sm-6 col-lg-3">
              <CaseCard {...design} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import designs from "../data/designs"

function CaseCard({ num, title, desc, Thumb, bg, href }) {
  const isExternal = href.startsWith("http")
  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <a href={href} className="case-card card h-100" {...externalProps}>
      <div className="case-thumb" style={{ background: bg }}>
        <Thumb />
        <div className="case-overlay">
          <span className="coming-soon-pill">
            {isExternal ? "View Project" : "Coming Soon"}
          </span>
        </div>
      </div>
      <div className="case-body">
        <p className="case-num">{num}</p>
        <p className="case-title">{title}</p>
        <p className="case-desc">{desc}</p>
      </div>
    </a>
  )
}

export default function CaseStudies() {
  return (
    <section id="portfolio" className="section-pad">
      <div className="container">
        <p className="section-eyebrow">03 -- Work</p>
        <h2 className="section-heading">Case Studies</h2>
        <div className="section-underline"></div>
        <p className="body-text mb-5" style={{ maxWidth: "520px" }}>
          Four design projects built across the semester -- each targeting a
          different user need and design challenge. Click any card to view its
          project page.
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
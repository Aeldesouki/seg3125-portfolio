const skills = [
  "React", "Python", "FastAPI", "Docker", "Azure",
  "Bootstrap 5", "TypeScript", "Git", "OpenAI API", "PostgreSQL",
]

export default function HeroAbout() {
  return (
    <section id="about" className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* ── Left: headline + stats ── */}
          <div className="col-lg-6">
            <div className="hero-tag anim d1">
              <span className="hero-tag-dot"></span>
              SEG3125 &middot; UI/UX Portfolio &middot; University of Ottawa
            </div>

            <h1 className="hero-name anim d2">
              Ahmed's
              <span> Portfolio</span>
            </h1>

            <p className="hero-role anim d2">
              Software Engineering Student
            </p>

            <p className="hero-desc anim d3">
              Second-year Software Engineering co-op student at the University of Ottawa. My 
              current skillset is geared towards data analytics and AI/ML, however I am currently interested
              in the field of cybersecurity.
            </p>

            <div className="d-flex gap-3 flex-wrap anim d4">
              <a className="btn-primary-custom" href="#portfolio">View My Designs</a>
              <a className="btn-outline-custom" href="#how-i-work">How I Work</a>
            </div>

            <div className="hero-stats anim d5">
              <div>
                <div className="stat-num">2nd</div>
                <div className="stat-label">Year &middot; uOttawa</div>
              </div>
             
              <div>
                <div className="stat-num">4</div>
                <div className="stat-label">Projects In Progress</div>
              </div>
            </div>
          </div>

          {/* ── Right: about card ── */}
          <div className="col-lg-6 anim d4">
            <div className="card">
              <div className="card-body" style={{ padding: "1.75rem" }}>
                <div className="avatar-circle">A</div>

                <h5 className="display-font fw-bold mb-3" style={{ color: "var(--text)", fontSize: "1.1rem" }}>
                  About Me
                </h5>

                <p className="body-text mb-3">
                    I am a software engineering student who generally likes building things online, whether
                    that is a tool that helps, or something that I find amusing.
                </p>

                <p className="body-text mb-3">
                  Outside of programming, I am into various hobbies like music and cooking. 
                </p>

                <h6 className="display-font fw-bold mb-2" style={{ color: "var(--text)", fontSize: "0.9rem" }}>
                  Tech Stack
                </h6>
                <div>
                  {skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

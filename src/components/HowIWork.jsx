const cards = [
  {
    title: "Experience with React",
    text: "I have hands-on experience building and deploying React applications from my co-op placement. This includes component-based architecture, state management, and integrating with REST APIs. Jumping into this course with a real development background has been a big advantage.",
  },
  {
    title: "Currently Taking SEG3125",
    text: "Enrolled in SEG3125 -- Analysis and Design of User Interfaces at the University of Ottawa. Actively learning visual communication, user-centered design, and interaction design principles.",
    link: { label: "NN/g Reference", href: "https://www.nngroup.com/" },
  },
]

function WorkCard({ title, text, link }) {
  return (
    <div className="card h-100">
      <div className="work-card-body">
        <p className="work-card-title">{title}</p>
        <p className="work-card-text">{text}</p>
        {link && (
          <a
            className="ref-link mt-2 d-inline-flex"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        )}
      </div>
    </div>
  )
}

export default function HowIWork() {
  return (
    <section id="how-i-work" className="section-pad work-section">
      <div className="container">
        <p className="section-eyebrow"></p>
        <h2 className="section-heading">How I Work</h2>
        <div className="section-underline"></div>

        <p className="body-text mb-5" style={{ maxWidth: "520px" }}>
          My progress with web development, and my experience with it:
        </p>

        <div className="row g-4 justify-content-center">
          {cards.map((card) => (
            <div key={card.title} className="col-md-6">
              <WorkCard {...card} />
            </div>
          ))}
        </div>

        <div
          className="mt-4 p-3"
          style={{
            background: "rgba(79,156,249,0.06)",
            border: "1px solid rgba(79,156,249,0.18)",
            borderRadius: "10px",
          }}
        >
          <p className="mb-0" style={{ fontSize: "0.85rem", color: "var(--muted-light)" }}>
            Concepts being explored:{" "}
            <strong style={{ color: "var(--text)" }}>Visual Hierarchy</strong>,{" "}
            <strong style={{ color: "var(--text)" }}>Scale</strong>,{" "}
            <strong style={{ color: "var(--text)" }}>Balance and Contrast</strong>,{" "}
            <strong style={{ color: "var(--text)" }}>Color Theory</strong>, and{" "}
            <strong style={{ color: "var(--text)" }}>Typography Pairing</strong>
            {" "}from the NN/g video series.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          Ahmed<span className="dot">.</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how-i-work">How I Work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">Case Studies</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

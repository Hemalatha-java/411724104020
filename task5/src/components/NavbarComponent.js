function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand" href="/">
          <i className="bi bi-laptop me-2"></i>
          TechSphere
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link active" href="/">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#footer">
                Contact
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default NavbarComponent;
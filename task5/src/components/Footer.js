function Footer() {
  return (
    <footer id="footer" className="text-white mt-5">
      <div className="container py-4">

        <div className="row">

          {/* Website Info */}
          <div className="col-md-4 mb-3">
            <h5>TechSphere</h5>
            <p>
              Creating responsive and modern websites using
              React and Bootstrap.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li>
                <a href="/" className="text-white text-decoration-none">
                  Home
                </a>
              </li>

              <li>
                <a href="#features" className="text-white text-decoration-none">
                  Features
                </a>
              </li>

              <li>
                <a href="#about" className="text-white text-decoration-none">
                  About
                </a>
              </li>

            </ul>

          </div>

          {/* Social Icons */}
          <div className="col-md-4 mb-3">

            <h5>Follow Us</h5>

            <i className="bi bi-facebook me-3"></i>

            <i className="bi bi-instagram me-3"></i>

            <i className="bi bi-twitter-x me-3"></i>

            <i className="bi bi-linkedin"></i>

          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            © 2026 TechSphere. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
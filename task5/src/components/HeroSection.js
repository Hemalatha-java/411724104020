function HeroSection() {
  return (
    <section className="hero">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6">
            <h1>Build Responsive Websites with React</h1>

            <p>
              Create responsive and modern websites using React and Bootstrap.
              Learn reusable components and responsive layouts with ease.
            </p>

            <button className="btn btn-primary btn-custom">
              Get Started
            </button>
          </div>

          <div className="col-lg-6 text-center">

            <i
              className="bi bi-laptop display-1 text-primary"
              style={{ fontSize: "220px" }}
            ></i>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;
function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6 text-center">

            <i
              className="bi bi-people-fill text-primary"
              style={{ fontSize: "180px" }}
            ></i>

          </div>

          <div className="col-lg-6">

            <h2>About Us</h2>

            <p>
              TechSphere helps students build responsive and modern websites
              using React and Bootstrap.
            </p>

            <p>
              Our goal is to create simple, user-friendly web pages using
              reusable components and responsive design.
            </p>

            <button className="btn btn-outline-primary btn-custom">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;
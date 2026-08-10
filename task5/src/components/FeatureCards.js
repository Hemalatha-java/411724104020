function FeatureCards() {
  return (
    <section className="features" id="features">
      <div className="container">

        <h2 className="section-title text-center">
          Our Features
        </h2>

        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">

              <div className="card-body text-center">

                <i className="bi bi-lightning-charge-fill"></i>

                <h4>Fast Performance</h4>

                <p>
                  React provides reusable components that help build
                  websites quickly with better performance.
                </p>

              </div>

            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">

              <div className="card-body text-center">

                <i className="bi bi-phone-fill"></i>

                <h4>Responsive Design</h4>

                <p>
                  Bootstrap makes websites responsive so they look
                  great on mobiles, tablets, and desktops.
                </p>

              </div>

            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card shadow-sm h-100">

              <div className="card-body text-center">

                <i className="bi bi-shield-check"></i>

                <h4>Easy to Use</h4>

                <p>
                  Build clean and modern user interfaces with simple
                  Bootstrap components and React.
                </p>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default FeatureCards;
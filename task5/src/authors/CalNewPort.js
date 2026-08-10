import { Link } from "react-router-dom";

function CalNewPort() {
  return (
    <div>
      <h1>Cal NewPort</h1>

      <h3>Country: United States</h3>

      <h3>Famous Book:</h3>
      <p>Deep Work</p>

      <p>
        Cal Newport is a computer science professor and author who focuses on
        productivity, concentration, and meaningful work.
      </p>

      <Link to="/authors">← Back to Authors</Link>
    </div>
  );
}

export default CalNewPort;
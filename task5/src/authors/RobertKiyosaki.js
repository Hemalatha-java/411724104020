import { Link } from "react-router-dom";

function RobertKiyosaki() {
  return (
    <div>
      <h1>Robert Kiyosaki</h1>

      <h3>Country: United States</h3>

      <h3>Famous Book:</h3>
      <p>Rich Dad Poor Dad</p>

      <p>
        Robert Kiyosaki is an entrepreneur and author who teaches financial
        literacy, investing, and wealth creation.
      </p>

      <Link to="/authors">← Back to Authors</Link>
    </div>
  );
}

export default RobertKiyosaki;
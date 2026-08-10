import { Link } from "react-router-dom";

function MorganHousel() {
  return (
    <div>
      <h1>Morgan Housel</h1>

      <h3>Country: United States</h3>

      <h3>Famous Book:</h3>
      <p>The Psychology of Money</p>

      <p>
        Morgan Housel is a financial writer whose books explain how human
        behavior influences money management and investing.
      </p>

      <Link to="/authors">← Back to Authors</Link>
    </div>
  );
}

export default MorganHousel;
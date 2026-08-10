import { Link } from "react-router-dom";

function HectorGarcia() {
  return (
    <div>
      <h1>Hector Garcia</h1>

      <h3>Country: Spain</h3>

      <h3>Famous Book:</h3>
      <p>Ikigai</p>

      <p>
        Hector Garcia is a Spanish author who writes about Japanese culture,
        lifestyle, and happiness.
      </p>

      <Link to="/authors">← Back to Authors</Link>
    </div>
  );
}

export default HectorGarcia;
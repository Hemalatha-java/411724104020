import { Link } from "react-router-dom";

function JamesClear() {
  return (
    <div>
      <h1>James Clear</h1>

      <h3>Country: United States</h3>

      <h3>Famous Book:</h3>
      <p>Atomic Habits</p>

      <p>
        James Clear is a bestselling author and speaker known for his work on
        habits, productivity, and continuous self-improvement.
      </p>

      <Link to="/authors">← Back to Authors</Link>
    </div>
  );
}

export default JamesClear;
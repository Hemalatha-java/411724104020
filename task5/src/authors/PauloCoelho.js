import { Link } from "react-router-dom";

function PauloCoelho() {
  return (
    <div>
      <h1>Paulo Coelho</h1>

      <h3>Country: Brazil</h3>

      <h3>Famous Book:</h3>
      <p>The Alchemist</p>

      <p>
        Paulo Coelho is a Brazilian novelist best known for inspirational books
        that focus on dreams, destiny, and spirituality.
      </p>

      <Link to="/authors">← Back to Authors</Link>
    </div>
  );
}

export default PauloCoelho;